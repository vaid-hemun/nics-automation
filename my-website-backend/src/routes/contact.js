const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Route for handling contact form submissions
router.post('/', contactController.submitContactForm);

// Admin routes for managing contacts
router.get('/', contactController.getAllContacts);
router.get('/stats', contactController.getContactStats);
router.patch('/:id/status', contactController.updateContactStatus);

module.exports = router;