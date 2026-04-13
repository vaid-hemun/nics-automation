const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Submit contact form
exports.submitContactForm = async (req, res) => {
    try {
        const { name, email, message, subject } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false,
                message: 'Name, email, and message are required fields' 
            });
        }

        // Get client information
        const ipAddress = req.clientIP || req.ip || req.connection.remoteAddress || req.socket.remoteAddress;
        const userAgent = req.get('User-Agent');

        // Create new contact entry
        const newContact = new Contact({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            message: message.trim(),
            subject: subject ? subject.trim() : 'Website Contact',
            ipAddress,
            userAgent
        });

        // Save to database
        const savedContact = await newContact.save();
        console.log('Contact saved to database:', savedContact._id);

        // Send notification email to admin (optional - doesn't fail the request)
        await sendNotificationEmail(savedContact);

        res.status(201).json({ 
            success: true,
            message: 'Contact form submitted successfully',
            contactId: savedContact._id,
            timestamp: savedContact.createdAt
        });

    } catch (error) {
        console.error('Error submitting contact form:', error);
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors
            });
        }

        // Handle duplicate key errors
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'A contact with this email already exists'
            });
        }

        res.status(500).json({ 
            success: false,
            message: 'Internal server error. Please try again later.' 
        });
    }
};

// Get all contacts (for admin panel)
exports.getAllContacts = async (req, res) => {
    try {
        const { page = 1, limit = 10, status, sortBy = 'createdAt', sortOrder = 'desc' } = req.query;
        
        const query = {};
        if (status) {
            query.status = status;
        }

        const sortOptions = {};
        sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;

        const contacts = await Contact.find(query)
            .sort(sortOptions)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .select('-ipAddress -userAgent'); // Exclude sensitive info

        const total = await Contact.countDocuments(query);

        res.status(200).json({
            success: true,
            data: {
                contacts,
                pagination: {
                    currentPage: parseInt(page),
                    totalPages: Math.ceil(total / limit),
                    totalContacts: total,
                    hasNext: page < Math.ceil(total / limit),
                    hasPrev: page > 1
                }
            }
        });

    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching contacts'
        });
    }
};

// Update contact status
exports.updateContactStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!['new', 'read', 'replied', 'archived'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status. Must be one of: new, read, replied, archived'
            });
        }

        const contact = await Contact.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Contact status updated successfully',
            data: contact
        });

    } catch (error) {
        console.error('Error updating contact status:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating contact status'
        });
    }
};

// Get contact statistics
exports.getContactStats = async (req, res) => {
    try {
        const stats = await Contact.aggregate([
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 }
                }
            }
        ]);

        const totalContacts = await Contact.countDocuments();
        const todayContacts = await Contact.countDocuments({
            createdAt: {
                $gte: new Date(new Date().setHours(0, 0, 0, 0))
            }
        });

        res.status(200).json({
            success: true,
            data: {
                totalContacts,
                todayContacts,
                statusBreakdown: stats
            }
        });

    } catch (error) {
        console.error('Error fetching contact stats:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching contact statistics'
        });
    }
};

// Helper function to send notification email
async function sendNotificationEmail(contact) {
    try {
        const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ADMIN_EMAIL, FROM_EMAIL } = process.env;
        const adminEmail = ADMIN_EMAIL || 'ak855717@gmail.com';

        if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !adminEmail) {
            console.log('SMTP configuration incomplete, skipping email notification');
            return;
        }

        const transporter = nodemailer.createTransporter({
            host: SMTP_HOST,
            port: Number(SMTP_PORT),
            secure: Number(SMTP_PORT) === 465,
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS
            }
        });

        const mailOptions = {
            from: FROM_EMAIL || SMTP_USER,
            to: adminEmail,
            subject: `New Contact Submission from ${contact.name}`,
            text: `
New Contact Form Submission

Name: ${contact.name}
Email: ${contact.email}
Subject: ${contact.subject}
Submitted: ${contact.createdAt}

Message:
${contact.message}

---
Contact ID: ${contact._id}
IP Address: ${contact.ipAddress}
            `,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">New Contact Form Submission</h2>
                    <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
                        <p><strong>Name:</strong> ${contact.name}</p>
                        <p><strong>Email:</strong> ${contact.email}</p>
                        <p><strong>Subject:</strong> ${contact.subject}</p>
                        <p><strong>Submitted:</strong> ${contact.createdAt}</p>
                    </div>
                    <div style="margin-top: 20px;">
                        <h3>Message:</h3>
                        <p style="background: white; padding: 15px; border-left: 4px solid #007bff;">
                            ${contact.message.replace(/\n/g, '<br/>')}
                        </p>
                    </div>
                    <hr style="margin: 20px 0;">
                    <p style="color: #666; font-size: 12px;">
                        Contact ID: ${contact._id}<br>
                        IP Address: ${contact.ipAddress}
                    </p>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        console.log('Notification email sent successfully');

    } catch (mailErr) {
        console.error('Error sending notification email:', mailErr);
        // Don't throw error - email failure shouldn't break the contact submission
    }
}