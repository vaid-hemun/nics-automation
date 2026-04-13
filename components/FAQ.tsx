"use client"
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What services does NICS Automation provide?",
    answer: "NICS Automation offers end-to-end industrial automation solutions including PLC programming, control panel design, system integration, and maintenance services. We also support businesses with digital solutions like website development to enhance their online presence."
  },
  {
    id: 2,
    question: "Why is automation important for modern industries?",
    answer: "Automation helps industries improve efficiency, reduce human errors, and increase productivity. It also ensures consistent output quality, minimizes downtime, and enhances safety in manufacturing environments."
  },
  {
    id: 3,
    question: "Do you provide customized automation solutions?",
    answer: "Yes, we specialize in delivering customized automation solutions based on your specific industry requirements. Our team analyzes your processes and designs systems that optimize performance and scalability."
  },
  {
    id: 4,
    question: "How does a professional website benefit industrial businesses?",
    answer: "A professional website helps establish credibility, attract new clients, and showcase your services globally. It acts as a digital presence for your business, making it easier for potential clients to find and connect with you."
  },
  {
    id: 5,
    question: "Do you provide support and maintenance after project completion?",
    answer: "Absolutely. We offer ongoing support, maintenance, and upgrades to ensure your systems run smoothly and efficiently. Our team is always available to assist with troubleshooting and improvements."
  }
];

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(1); // Only one item can be open at a time

  const toggleItem = (id: number) => {
    // If clicking on the currently open item, close it. Otherwise, open the clicked item
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-x-hidden">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Column - FAQ Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Header */}
            <div className="space-y-2 md:space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-50 text-[#05ce9b] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                <span className="w-2 h-2 bg-gradient-to-r from-[#14473b] to-[#039158]  rounded-full"></span>
                FAQs
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                You Are Confused!<br />
                <span className="text-[#05ce9b]">Question & Answers.</span>
              </h1>
             
            </div>

            {/* FAQ Items */}
            <div className="space-y-3 md:space-y-4">
              {faqData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4 sm:pr-8">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItem === item.id ? (
                        <Minus className="w-5 h-5 text-[#05ce9b] transition-transform duration-200" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#05ce9b] transition-transform duration-200" />
                      )}
                    </div>
                  </button>
                  
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openItem === item.id
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="h-px bg-gray-200 mb-3 sm:mb-4"></div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-2 sm:-inset-4 border-2 border-dashed border-red-300 rounded-2xl sm:rounded-3xl"></div>
              
              {/* Main image container */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="AI/FAQ.png"
                  alt="Professional consultation"
                  className="w-full h-64 sm:h-96 lg:h-[600px] object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-4 sm:top-8 -left-2 sm:-left-4 w-10 sm:w-16 h-10 sm:h-16 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-8 sm:bottom-16 -right-2 sm:-right-4 w-8 sm:w-12 h-8 sm:h-12 bg-blue-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            <div className="absolute top-1/2 -right-4 sm:-right-8 w-6 sm:w-8 h-6 sm:h-8 bg-yellow-500 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;