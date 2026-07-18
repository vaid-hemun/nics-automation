'use client'

import Link from 'next/link'
import {
  Home,
  ChevronRight,
} from 'lucide-react'
import React, { useState } from 'react';


function DigitalMarketing() {
  // Services array for cards section
  const services = [
    {
      image: "https://intileo.com/wp-content/uploads/2024/01/person-using-ai-tool-job-1.jpg",
      alt: "AI Content Creation",
      title: "AI Content Creation",
      description: "Generate high-quality, platform-ready content tailored to your brand voice, including captions, creatives, and marketing copy."
    },
    {
      image: "https://intileo.com/wp-content/uploads/2024/01/two-women-entrepreneurs-working-together-office-1.jpg",
      alt: "Audience Engagement Automation",
      title: "Audience Engagement Automation",
      description: "Respond instantly to comments, messages, and interactions using AI to maintain active engagement and improve customer experience."
    },
    {
      image: "https://intileo.com/wp-content/uploads/2024/01/programming-background-collage-1.jpg",
      alt: "Automated Social Publishing",
      title: "Automated Social Publishing",
      description: "Schedule and publish content across platforms like Instagram, Facebook, and TikTok automatically for consistent online presence."
    },
    {
      image: "https://intileo.com/wp-content/uploads/2024/01/collage-customer-experience-concept-2-1.jpg",
      alt: "Content Performance Insights",
      title: "Content Performance Insights",
      description: "Track engagement, reach, and performance metrics to continuously optimize your content strategy."
    },
    {
      image: "https://intileo.com/wp-content/uploads/2024/01/business-people-working-with-ipad-side-view-1.jpg",
      alt: "Multi-Platform Content Management",
      title: "Multi-Platform Content Management",
      description: "Manage and distribute content across multiple platforms from a single system for maximum efficiency."
    },
    {
      image: "https://intileo.com/wp-content/uploads/2024/01/person-using-ai-tool-job-2-1.jpg",
      alt: "Brand Consistency Automation",
      title: "Brand Consistency Automation",
      description: "Ensure consistent tone, style, and messaging across all content with AI-driven brand alignment."
    },

  ];

  const tools = [
    {
      name: 'Content Automation',
      icon: <img src="/AI/leaf-solid.svg" alt="Manufacturing Logo" className="w-10 h-10" />,
      description: 'Transform content workflows with AI-powered creation and scheduling.'
    },
    {
      name: 'Social Media Growth',
      icon: <img src="/AI/window-maximize-solid.svg" alt="Smart Assistants Logo" className="w-10 h-10" />,
      description: 'Boost engagement and visibility through consistent AI-driven activity.'
    },
    {
      name: 'Audience Interaction',
      icon: <img src="/AI/leaf-solid.svg" alt="Healthcare management Logo" className="w-10 h-10" />,
      description: 'Enhance user engagement with automated replies and smart interactions.'
    },
    {
      name: 'Content Optimization',
      icon: <img src="/AI/id-badge-solid.svg" alt="Fraud detection Logo" className="w-10 h-10" />,
      description: 'Improve performance using AI-driven insights and analytics.'
    },
    {
      name: 'Multi-Channel Publishing',
      icon: <img src="/AI/headset-solid.svg" alt="Social media monitoring Logo" className="w-10 h-10" />,
      description: 'Distribute content seamlessly across all major platforms.'
    },
    {
      name: 'Marketing chatbots',
      icon: <img src="/AI/id-badge-solid.svg" alt="Marketing chatbots Logo" className="w-10 h-10" />,
      description: 'Amplifying Engagement, Elevating Conversions — Your 24/7 Digital Marketing Ally.'
    },
  ]


  const tools2 = [
    {
      name: 'Customized AI Applications',
      icon: <img src="/AI/warehouse-solid.svg" alt=" Logo" className="w-10 h-10" />,
      description: 'Tailoring artificial intelligence solutions to address specific business challenges, ensuring relevance and effectiveness.'
    },
    {
      name: 'Machine Learning Expertise',
      icon: <img src="/AI/chart-line-solid.svg" alt=" Logo" className="w-10 h-10" />,
      description: 'Leveraging advanced machine learning algorithms to enable predictive modeling, automation, and continuous improvement.'
    },
    {
      name: 'Data-driven Decision-making',
      icon: <img src="/AI/hammer-solid.svg" alt=" Logo" className="w-10 h-10" />,
      description: 'Harnessing the power of data analytics and AI to extract actionable insights, facilitating informed and strategic decision-making.'
    },
    {
      name: 'Innovation and Adaptability',
      icon: <img src="/AI/bolt-solid.svg" alt=" Logo" className="w-10 h-10" />,
      description: 'Commitment to continuous innovation, staying abreast of AI advancements, and providing adaptive solutions to meet evolving business requirements.'
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">AI Content & Engagement </h1>
          <nav className="flex items-center space-x-2 text-white/80">
            <Home className="w-4 h-4" />
            <Link href="/">
              <span className="text-sm">Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm text-[#05ce9b]">AI Content & Engagement </span>
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
      {/* ANALYTICS, & ML  Info Section */}
      <section className="py-16 bg-white flex flex-col items-center justify-center">
        <h4 className="text-2xl md:text-3xl font-bold mb-8 text-[#05ce9b]">AI-POWERED SOLUTIONS</h4>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          AI CONTENT & ENGAGEMENT SOLUTIONS</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column: Text */}
          <div className="md:w-1/2 w-full">
            <p className="mb-6 text-lg text-gray-700">Leverage the power of artificial intelligence to create, manage, and optimize your digital presence effortlessly.</p>
            <p className="mb-8 text-lg text-gray-700">Our AI-driven content and engagement solutions help businesses generate high-quality content, automate publishing, and maintain consistent interaction with their audience. From social media to multi-platform campaigns, we ensure your brand stays active, relevant, and engaging at all times.</p>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-[#14473b] to-[#039158]  hover:from-[#039bad] hover:to-[#05ce9b] text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:scale-105">Free Consultation</button>
            </Link>
          </div>
          {/* Right Column: Illustration */}
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src="https://intileo.com/wp-content/uploads/2024/01/3d-rendering-biorobots-concept-1.jpg"
              alt="ANALYTICS, & ML  Illustration"
              className="w-full max-w-md h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>


      {/* Services Cards Section */}
      <section className="py-16 bg-gray-50 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-4xl font-bold mb-4 text-center text-gray-900">Content Automation & Engagement</h2>
        <p className="max-w-7xl mx-auto mb-12 text-gray-700">Harnessing AI to automate content creation, streamline publishing, and enhance audience engagement for consistent digital growth.</p>
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
          <h2 className=" text-3xl md:text-3xl text-left font-bold mb-4 text-[#05ce9b]">AI Content Solutions</h2>
          <p className=" text-md text-gray-600 text-left ">Our AI content solutions empower businesses to automate their digital presence with minimal effort. From generating engaging content to managing publishing schedules and interactions, we help brands maintain consistency, improve efficiency, and scale their online engagement effortlessly.</p>
        </div>
        <div className="md:w-2/3 w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8">
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

      {/* Data Analytics Services Section */}
      {/* <section className="w-full py-20 px-4 bg-gradient-to-r from-[#14473b] to-[#03a564] border-[#03a564]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
         
          <div className="md:w-1/2 w-full text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">OUR COMPREHENSIVE SET OF DATA ANALYTICS SERVICES THAT INCLUDES:</h2>
            <p className="mb-4 mt-6 text-base md:text-lg">Overall, experts at Intileo carefully deliver quality and efficient data analytics solutions for your business's requirements.<br />
              With us, you won't have to struggle with unstructured data in bulk or infinite sources of information because our analysts have the cutting-edge tools for data mining and curation.</p>
          </div>
          
          <div className="md:w-1/2 w-full flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <span className="bg-white/30 rounded-lg p-2"><img src="/AI/lightbulb-solid.svg" alt="icon" className="w-6 h-6" /></span>
              <span className="text-white text-base md:text-lg">Business and financial analytics for BI operations and enterprise stability</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-white/30 rounded-lg p-2"><img src="/AI/rotate-left-solid.svg" alt="icon" className="w-6 h-6" /></span>
              <span className="text-white text-base md:text-lg">Supply cn and customer analytics for better demand predictions and profit-making</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-white/30 rounded-lg p-2"><img src="/AI/bookmark-solid.svg" alt="icon" className="w-6 h-6" /></span>
              <span className="text-white text-base md:text-lg">Your Sector-scific analytics for real-time competitor and market research;</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="bg-white/30 rounded-lg p-2"><img src="/AI/star-solid.svg" alt="icon" className="w-14 h-6" /></span>
              <span className="text-white text-base md:text-lg">Operations Intelligence & BI helping manufacturing and other core industry verticals Improve their profitability through higher customer acquisition, improved productivity and reduced losses</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 flex flex-col md:flex-col items-center justify-center gap-8">
        <div className=" w-full flex flex-col justify-center items-center px-8 md:px-6 mb-8 md:mb-0">
          <h2 className=" text-3xl md:text-3xl text-left font-bold mb-4 text-[#05ce9b]">Machine Learning Services</h2>
          <p className="w-full md:w-1/2 text-md text-gray-600 text-left ">Machine learning technology functions similar to humans as it can learn without being programmed. We assist the software in identifying patterns from a large proportion of operational data through Machine Learning (ML). As a leading app development company in Gurugram, we offer machine learning solutions to assist your information systems in predicting the result on its own with advanced learning algorithms.</p>
        </div>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {tools2.map((tool, idx) => (
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
      </section> */}

    </>
  )
}

export default DigitalMarketing;