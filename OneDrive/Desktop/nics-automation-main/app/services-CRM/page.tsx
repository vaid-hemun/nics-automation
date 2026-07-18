'use client'

import Link from 'next/link'
import {
    Home,
    ChevronRight,
    BarChart3,
    Search,
    Flame,
    LineChart,
    Mail,
    Figma
} from 'lucide-react'
import React, { useState } from 'react';

// CRM Software specific FAQ data
// const CRMFaqData = [
//     {
//         id: 1,
//         question: 'What is CRM with an example?',
//         answer: "CRM (Customer Relationship Management) is a technology for managing a company's relationships and interactions with current and potential customers. For example, a business might use CRM software to track customer interactions, sales, and support requests, helping them improve customer service and increase sales."
//     },
//     {
//         id: 2,
//         question: 'What are the three types of CRM?',
//         answer: 'The three main types of CRM are Operational CRM (automates sales, marketing, and service processes), Analytical CRM (analyzes customer data for better decision-making), and Collaborative CRM (facilitates sharing customer information across teams).'
//     },
//     {
//         id: 3,
//         question: 'What are the benefits of CRM?',
//         answer: 'CRM helps businesses improve customer relationships, increase sales, enhance customer retention, streamline processes, and gain valuable insights from customer data.'
//     },
//     {
//         id: 4,
//         question: 'How Can CRM Benefit My Business?',
//         answer: 'CRM can help your business by organizing customer information, automating routine tasks, improving communication, tracking sales, and providing better customer service, all of which lead to increased efficiency and growth.'
//     },
//     {
//         id: 5,
//         question: 'Can CRM be used by businesses of all sizes?',
//         answer: 'Yes, CRM systems are scalable and can be used by small, medium, and large businesses to manage customer relationships and grow their business.'
//     },
//     {
//         id: 6,
//         question: 'Is CRM only used for managing customer data?',
//         answer: 'No, CRM is not just for managing customer data. It also helps automate sales, marketing, and service processes, track interactions, and provide insights to improve business strategies.'
//     },
//     {
//         id: 7,
//         question: 'Is CRM a one-time investment or an ongoing process?',
//         answer: 'CRM is an ongoing process. It requires continuous updates, data entry, and process improvements to adapt to changing business needs and customer expectations.'
//     },
//     {
//         id: 8,
//         question: 'How can CRM help businesses improve customer service?',
//         answer: 'CRM enables businesses to track customer interactions, respond quickly to inquiries, personalize communication, and resolve issues efficiently, leading to improved customer satisfaction.'
//     },
//     {
//         id: 9,
//         question: 'What are the features of CRM?',
//         answer: 'Common CRM features include contact management, sales automation, marketing automation, customer support, reporting and analytics, and integration with other business tools.'
//     },
//     {
//         id: 10,
//         question: 'How Does a CRM Boost Sales?',
//         answer: 'CRM boosts sales by helping businesses identify and prioritize leads, track sales activities, automate follow-ups, and provide insights to close deals faster.'
//     },
// ];

// function CRMFAQ() {
//     const [openItem, setOpenItem] = useState<number | null>(1);
//     const toggleItem = (id: number) => {
//         setOpenItem(openItem === id ? null : id);
//     };
//     return (
//         <div className="space-y-3 md:space-y-4">
//             {CRMFaqData.map((item) => (
//                 <div
//                     key={item.id}
//                     className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md"
//                 >
//                     <button
//                         onClick={() => toggleItem(item.id)}
//                         className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
//                     >
//                         <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4 sm:pr-8">
//                             {item.question}
//                         </h3>
//                         <div className="flex-shrink-0">
//                             {openItem === item.id ? (
//                                 <span className="text-2xl text-[#05ce9b]">&#8722;</span>
//                             ) : (
//                                 <span className="text-2xl text-[#05ce9b]">&#43;</span>
//                             )}
//                         </div>
//                     </button>
//                     <div
//                         className={`transition-all duration-300 ease-in-out ${openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//                             }`}
//                     >
//                         <div className="px-4 sm:px-6 pb-4 sm:pb-6">
//                             <div className="h-px bg-gray-200 mb-3 sm:mb-4"></div>
//                             <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//                                 {item.answer}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

function CRM() {
    // Services array for cards section
    const services = [
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/4262886_2260674-1-quuxxzjtndl8orrwgbqfy2w2vecmxi20gvm43ij480.webp",
            alt: "Cold Email Automation",
            title: "Cold Email Automation",
            description: "Launch personalized cold email campaigns with automated follow-ups to generate and nurture high-quality leads."
        },
        {
            image: "https://intileo.com/wp-content/uploads/2024/09/9906760_4278504-1-300x200.webp",
            alt: "Lead Nurturing Workflows",
            title: "Lead Nurturing Workflows",
            description: "Automatically engage and nurture leads through intelligent sequences that guide prospects toward conversion."
        },
        {
            image: "https://intileo.com/wp-content/uploads/2024/09/14449322_5464026-1-1536x1024.webp",
            alt: "Smart Appointment Booking",
            title: "Smart Appointment Booking",
            description: "Allow customers to book meetings instantly with automated scheduling, reminders, and rescheduling options."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/6345981_24966-1-1-scaled-quuyahsil0q3kx7rbp5yativrfb8hthi6x1qspv0kk.webp",
            alt: "Sales Funnel Automation",
            title: "Sales Funnel Automation",
            description: "Create structured funnels that move leads from initial contact to final conversion without manual intervention."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/27037171_medical_insurance_15-1-scaled-quuyu7gnwxpl2ikx7pxa3cfw9c5cxaqukhlc4mms2s.webp",
            alt: "InsFollow-Up Automationurance",
            title: "Follow-Up Automation",
            description: "Never miss a follow-up with automated reminders and sequences that keep prospects engaged."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/9363963_4144413-1-1-scaled-quuyxs8jx8lv93dvbrl62xy1n4in7ty2q6yuvjbuec.webp",
            alt: "Multi-Channel Outreach",
            title: "Multi-Channel Outreach",
            description: "Reach prospects across email, chat, and other platforms with unified and automated communication."
        },
       
    ];

    

    return (
        <>

            {/* Hero Section */}
            <section className="relative h-96 bg-gradient-to-r from-[#14473b] to-[#03a564] overflow-hidden">
                {/* Decorative Gradient Circles */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#14473b] to-[#039158] /10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#02ef91]/10 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-[#039bad] rounded-full opacity-20"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">AI Sales Automation</h1>
                    <nav className="flex items-center space-x-2 text-white/80">
                        <Home className="w-4 h-4" />
                        <Link href="/">
                            <span className="text-sm">Home</span>
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-sm text-[#05ce9b]">AI Sales Automation</span>
                    </nav>
                </div>
            </section>

            {/* Partners Section */}
            {/* <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center space-x-8 ">
                        <img src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/6.png" alt="ola" />
                        <img src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/1.png" alt="imart" />
                        <img src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/5.png" alt="microsoft" />
                        <img src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/3.png" alt="amazon" />
                        <img src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/06/4.png" alt="google" />
                    </div>
                </div>
            </section> */}

            {/* CRM Software Info Section */}
            <section className="py-16 bg-white flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#05ce9b]">What is AI Sales Automation?</h2>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left Column: Text */}
                    <div className="md:w-1/2 w-full">

                        <p className="mb-6 text-lg">AI Sales Automation is the use of intelligent systems to streamline and optimize your entire sales process — from lead generation to conversion. It automates repetitive tasks like outreach, follow-ups, appointment scheduling, and lead nurturing, allowing businesses to focus on closing deals instead of managing manual workflows.</p>
                        <p className="mb-8 text-lg">By leveraging AI, businesses can engage prospects at the right time, personalize communication at scale, and significantly improve conversion rates while reducing operational effort.</p>
                        <Link href="/contact">
                            <button className="bg-gradient-to-r from-[#14473b] to-[#039158]  hover:from-[#039bad] hover:to-[#05ce9b] text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:scale-105">Get Started</button>
                        </Link>
                    </div>
                    {/* Right Column: Illustration */}
                    <div className="md:w-1/2 w-full flex justify-center">
                        <img
                            src="https://intileo.com/wp-content/uploads/elementor/thumbs/13961233_5395108-1-quv96ycm3ryotqqo173rr0qchruukrc6xbme321h70.webp"
                            alt="CRM Software Illustration"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
            </section>

            

            {/* Services Cards Section */}
            <section className="py-16 bg-gray-50 flex flex-col items-center justify-center">
                <h2 className=" text-4xl md:text-4xl font-bold mb-6 text-center">AI Sales Automation Use Cases</h2>
                <p className="max-w-7xl mx-auto mb-12">Our AI sales automation solutions are designed to adapt across industries and business models. Whether you're generating leads, managing customer interactions, or closing deals, our systems streamline the entire sales journey and maximize efficiency.</p>
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 bg-white rounded-3xl shadow-lg p-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center bg-white rounded-2xl p-8 transition-all duration-300 cursor-pointer hover:bg-gradient-to-r  hover:from-[#14473b] hover:to-[#03a564] hover:text-white shadow-md group"
                        >
                            <img src={service.image} alt={service.alt} className="w-full max-w-xs mb-6 transition duration-300 rounded-xl group-hover:shadow-xl" />
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="text-base">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            

            {/* FAQ Section */}
            {/* <section className="py-20 bg-gray-50 flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                <div className="w-full max-w-4xl mx-auto">
                    <CRMFAQ />
                </div>
            </section> */}

        </>
    )
}

export default CRM;