'use client'

import React from 'react'
import Link from 'next/link'
import { Briefcase, Mail, Phone, MapPin, Facebook, Youtube, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto px-6 sm:px-10 py-14 sm:py-14">
        <div className="grid grid-cols-1 gap-10 sm:gap-8 md:text-left text-center md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6 sm:space-y-4 flex flex-col items-center md:items-start">
            <Link href="/" className="flex justify-center items-center space-x-3 group">
              <div className="relative">
                <div className="w-20 flex items-center justify-center">
                  <img src="/logo/NICSlogo.png " alt="logo" />
                </div>
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-[#05ce9b]">NICS Automation</span>
            </Link>
            <p className="text-gray-400 md:text-left text-center leading-relaxed text-base sm:text-sm">
              Premier destination for digital creative solutions. We combine creativity with technology to deliver exceptional digital experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 sm:space-x-4">
              <a href="#" target='_blank' className="text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 p-2 rounded-full">
                <Facebook className="w-6 h-6 sm:w-5 sm:h-5" />
              </a>
              <a href="#" target='_blank' className="text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 p-2 rounded-full">
                <Youtube className="w-6 h-6 sm:w-5 sm:h-5" />
              </a>
              <a href="#" target='_blank' className="text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 p-2 rounded-full">
                <Instagram className="w-6 h-6 sm:w-5 sm:h-5" />
              </a>
              <a href="#" target='_blank' className="text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 p-2 rounded-full">
                <Linkedin className="w-6 h-6 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 sm:space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-3 sm:space-y-2 w-full">
              <Link href="/" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                About
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                Services
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6 sm:space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-3 sm:space-y-2 w-full">
              <Link href="/services-DigitalMarketing" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                Digital Marketing
              </Link>
              <Link href="/services-Web-dev" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                Web Development
              </Link>
              <Link href="/services-App-dev" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                App Development
              </Link>
              <Link href="/services-QA" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                AI Chat Automation
              </Link>
              <Link href="/services-CRM" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                AI Sales Automation
              </Link>
              <Link href="/services-Analytics" className="block text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-2 sm:py-0">
                AI Content & Engagement
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4 sm:space-y-3 w-full">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-6 h-6 sm:w-5 sm:h-5 text-[#05ce9b]" />
                <a href='mailto:info@nicsautomation.com' className="text-gray-400 text-base sm:text-sm">
                  info@nicsautomation.com</a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-6 h-6 sm:w-5 sm:h-5 text-[#05ce9b]" />
                <a href="tel:+918178099663" className="text-gray-400 text-base sm:text-sm">+91 97111497160</a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-6 h-6 sm:w-5 sm:h-5 text-[#05ce9b]" />
                <span className="text-gray-400 text-base sm:text-sm">Block B Palam Vihar Extension<br /> Gurgaon-122017</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} NICS Automation. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm items-center">
              <a href="#" target='_blank' className="text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-1 px-2 rounded">
                Privacy Policy
              </a>
              <a href="#" target='_blank' className="text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-1 px-2 rounded">
                Terms of Service
              </a>
              {/* <a href="#" target='_blank' className="text-gray-400 hover:text-[#05ce9b] transition-colors duration-300 py-1 px-2 rounded">
                Cookie Policy
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 