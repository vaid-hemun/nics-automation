'use client'

import Link from 'next/link'
import {
    Home,
    ChevronRight,
} from 'lucide-react'
import React, { useState } from 'react';


function QATesting() {
    // Services array for cards section
    const services = [
        {
            image: "https://intileo.com/wp-content/uploads/2024/01/FUNCTIONAL-TESTING.jpg",
            alt: "WhatsApp AI Automation",
            title: "WhatsApp AI Automation",
            description: "Automate conversations on WhatsApp with instant replies, lead qualification, and customer support — available 24/7 without manual effort."
        },
        {
            image: "https://intileo.com/wp-content/uploads/2024/01/html-system-websites-concept-1.jpg",
            alt: "Social Media Auto-Reply",
            title: "Social Media Auto-Reply",
            description: "Respond instantly to Instagram, Facebook Messenger, and comments, ensuring no customer inquiry or lead is ever missed."
        },
        {
            image: "https://intileo.com/wp-content/uploads/2024/01/people-using-digital-device-while-meeting-1-2.jpg",
            alt: "Lead Capture & Qualification",
            title: "Lead Capture & Qualification",
            description: "Automatically capture customer details, qualify leads, and route them efficiently into your sales pipeline."
        },
        {
            image: "https://intileo.com/wp-content/uploads/2024/03/standard-quality-control-collage-concept-1.jpg",
            alt: "24/7 Customer Support Automation",
            title: "24/7 Customer Support Automation",
            description: "Provide round-the-clock support by answering FAQs, resolving queries, and guiding users without human intervention.:"
        },
        {
            image: "https://intileo.com/wp-content/uploads/2024/03/COMPATIBILITY-TESTING-1.jpg",
            alt: "Multi-Platform Integration",
            title: "Multi-Platform Integration",
            description: "Seamlessly integrate AI chat across WhatsApp, websites, and social media platforms for unified communication."
        },
        {
            image: "https://intileo.com/wp-content/uploads/2024/03/representation-user-experience-interface-design-smartphone-1.jpg",
            alt: "Smart Response Intelligence",
            title: "Smart Response Intelligence",
            description: "Use AI to deliver context-aware, human-like responses that improve engagement and customer satisfaction."
        },

    ];

    const tools = [
        {
            name: 'Instant Customer Engagement',
            icon: <img src="/QA-testing/leaf-solid.svg" alt="Software Logo" className="w-10 h-10" />,
            description: 'Engage customers instantly with real-time AI responses across all platforms.'
        },
        {
            name: 'Lead Generation Automation',
            icon: <img src="/QA-testing/window-maximize-solid.svg" alt="VAPT Logo" className="w-10 h-10" />,
            description: 'Convert conversations into qualified leads automatically with smart workflows.'
        },
        {
            name: 'Sales Funnel Automation',
            icon: <img src="/QA-testing/id-badge-solid.svg" alt="QA Automation Services Logo" className="w-10 h-10" />,
            description: 'Guide users from inquiry to conversion with intelligent conversation flows.'
        },
        {
            name: 'Time & Cost Efficiency',
            icon: <img src="/QA-testing/headset-solid.svg" alt="QA Manual Testing Services Logo" className="w-10 h-10" />,
            description: 'Reduce manual effort and operational costs while improving response speed.'
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
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">AI Chat Automation</h1>
                    <nav className="flex items-center space-x-2 text-white/80">
                        <Home className="w-4 h-4" />
                        <Link href="/">
                            <span className="text-sm">Home</span>
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-sm text-[#05ce9b]">AI Chat Automation</span>
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

            {/* QA Testing Info Section */}
            <section className="py-16 bg-white flex flex-col items-center justify-center">
                <h4 className="text-2xl md:text-3xl font-bold mb-8 text-[#05ce9b]">AI-POWERED AUTOMATION</h4>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Smart AI Chat Automation for Modern Businesses</h2>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left Column: Text */}
                    <div className="md:w-1/2 w-full">

                        <p className="mb-6 text-lg">Transform the way you communicate with customers using AI-powered chat automation. Our intelligent systems handle conversations across WhatsApp, Instagram, Messenger, and more — instantly responding to queries, capturing leads, and guiding users through your sales process. Deliver faster support, improve engagement, and never miss an opportunity with 24/7 automated communication.</p>

                        <Link href="/contact">
                            <button className="bg-gradient-to-r from-[#14473b] to-[#039158]  hover:from-[#039bad] hover:to-[#05ce9b] text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:scale-105">Get Started</button>
                        </Link>
                    </div>
                    {/* Right Column: Illustration */}
                    <div className="md:w-1/2 w-full flex justify-center">
                        <img
                            src="https://intileo.com/wp-content/uploads/2024/01/QA-TESTING-Banner.jpg"
                            alt="QA Testing Illustration"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* How QA Testing Services Stimulate Business Growth */}
            <section className="pt-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-3xl md:text-5xl text-center font-bold mb-6">Power of AI Chat Automation</h3>
                    <p className="mb-6 text-lg">AI chat automation enables businesses to scale customer communication without increasing workload. From handling repetitive queries to nurturing leads and providing instant responses, it ensures seamless interaction across all platforms. By combining speed, intelligence, and personalization, businesses can enhance customer experience while boosting efficiency and conversions.</p>
                </div>
            </section>

            {/* Services Cards Section */}
            <section className="pb-16 bg-gray-50 flex flex-col items-center justify-center">
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

            {/* Tools Used Section */}
            <section className="py-20 bg-white flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="md:w-1/3 w-full flex flex-col justify-center items-start px-8 md:px-6 mb-8 md:mb-0">
                    <h2 className=" text-3xl md:text-3xl text-left font-bold mb-4 text-[#05ce9b]">AI Chat Automation Solutions</h2>
                    <p className=" text-md text-gray-600 text-left ">Our AI chat automation solutions are designed to help businesses streamline communication, improve response time, and increase conversions. By automating conversations across multiple channels, we reduce manual workload while ensuring consistent, high-quality interactions. Whether it's customer support, lead generation, or engagement, our AI systems work intelligently to grow your business.</p>
                </div>
                <div className="md:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
                    {tools.map((tool, idx) => (
                        <div
                            key={tool.name}
                            className={`group flex flex-col items-center justify-center rounded-2xl p-10 min-h-[180px] shadow-md transition duration-300 cursor-pointer border border-transparent hover:bg-gradient-to-r  hover:from-[#14473b] hover:to-[#03a564] hover:text-white hover:border-[#05ce9b]`}
                        >
                            <div className="mb-4">{tool.icon}</div>
                            <span className="text-xl font-semibold text-center">{tool.name}</span>
                            <p className="text-center text-base mt-2 text-gray-600 group-hover:text-white">{tool.description}</p>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default QATesting;