"use client"

import React, { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Building2, Phone, Mail, Clock, MapPin } from 'lucide-react'

function ConnectUs() {

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const breadcrumbRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Hero section entrance animation
    tl.fromTo(sectionRef.current,
      {
        backgroundPosition: 'center 20%',
        scale: 1.1
      },
      {
        backgroundPosition: 'center center',
        scale: 1,
        duration: 1.5,
        ease: 'power2.out'
      }
    )
      .fromTo(titleRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)'
        },
        '-=0.5'
      )
      .fromTo(breadcrumbRef.current,
        {
          opacity: 0,
          x: -30
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out'
        },
        '-=0.3'
      );

    // Parallax effect on scroll
    gsap.to(sectionRef.current, {
      backgroundPosition: 'center 10%',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

  }, { scope: sectionRef });


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    message: '',
    service: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <div>

      <div ref={sectionRef} className="relative h-96 bg-cover bg-center bg-no-repeat overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <h1 ref={titleRef} className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>

          <nav ref={breadcrumbRef} className="flex items-center space-x-2 text-white/80">
            <Home className="w-4 h-4" />
            <Link href="/">
              <span className="text-sm">Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm text-[#05ce9b]">Contact Us</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* Left Side - Locations */}
          <div className="flex flex-col justify-center items-center h-auto md:h-[720px] bg-gray-900 rounded-2xl mx-2 px-6 py-10 md:p-8 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <Building2 className="w-7 h-7 md:w-8 md:h-8 text-[#05ce9b]" />
              <h2 className="text-xl md:text-4xl font-bold text-white">OUR LOCATION</h2>
            </div>

            {/* India Location */}
            <div className="flex flex-col justify-center items-center md:mb-10">
              <h3 className="text-xl md:text-3xl font-semibold text-[#05ce9b] mb-3 md:mb-4">India</h3>
              <div className="flex flex-col justify-center space-y-2 md:space-y-3">
                <p className="text-center text-lg md:text-xl font-medium text-gray-200">NICS Automation</p>
                <div className="flex items-start gap-2 md:gap-3">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#05ce9b] mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                    Block B Palam Vihar Extension,<br />
                    Gurgaon,122017
                  </p>
                </div>
                
                <div className="flex items-center gap-2 md:gap-3">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#05ce9b]" />
                  <a href="mailto:info@nicsautomation.com" className="text-sm md:text-lg text-gray-300 hover:text-[#05ce9b] transition-colors">
                    Send Email: info@nicsautomation.com
                  </a>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#05ce9b]" />
                  <div className="text-sm md:text-lg text-gray-300">
                    <p>09:00 AM - 07:30 PM IST</p>
                    <p className="text-xs md:text-sm text-gray-400">Working Days - Mon-Sat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl  mx-2 px-6 py-10 md:p-8 shadow-2xl">
            <div className="mb-6 md:mb-8">
              <p className="text-[#05ce9b] font-semibold text-xs md:text-sm uppercase tracking-wider mb-1 md:mb-2">
                GET IN TOUCH
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                REQUEST A<br />
                <span className="text-[#14473b]">CONSULTATION</span>
              </h2>
            </div>

          <form
  action="https://formspree.io/f/mpqkagzb"
  method="POST"
  className="space-y-4 md:space-y-6"
>
  <input type="hidden" name="form-name" value="contact" />

  {/* Service Dropdown */}
  <select
    name="service"
    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg focus:border-[#05ce9b] focus:outline-none transition-colors text-gray-700 text-sm md:text-sm"
    required
  >
    <option value="">--Please choose an option--</option>
    <option value="web-development">AI Chat Automation (WhatsApp & Social Media)</option>
    <option value="mobile-app">AI Sales Automation (Leads & Booking)</option>
    <option value="digital-marketing">Website Development</option>
    <option value="qa-testing">App Development</option>
    <option value="crm-software">AI Content & Engagement</option>
    <option value="analytics-ai">Digital Marketing</option>
    <option value="other">Other Services</option>
  </select>

  {/* Name */}
  <input
    type="text"
    name="name"
    placeholder="Name"
    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg focus:border-[#05ce9b] focus:outline-none"
    required
  />

  {/* Email */}
  <input
    type="email"
    name="email"
    placeholder="Email"
    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg focus:border-[#05ce9b] focus:outline-none"
    required
  />

  {/* Contact Number */}
  <input
    type="tel"
    name="contactNo"
    placeholder="Contact No"
    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg focus:border-[#05ce9b] focus:outline-none"
    required
  />

  {/* Message */}
  <textarea
    name="message"
    placeholder="How May We Help?"
    rows={3}
    className="w-full px-3 md:px-4 py-2 md:py-3 border-2 border-gray-200 rounded-lg focus:border-[#05ce9b] focus:outline-none resize-none"
    required
  ></textarea>

  {/* Submit */}
  <button
    type="submit"
    className="w-full bg-[#05ce9b] text-white py-2 md:py-3 rounded-lg font-semibold hover:opacity-90 transition"
  >
    Send Message
  </button>
</form>


          </div>
        </div>

      </div>

      {/* <div className="mx-auto mb-10 w-full md:w-[1250px] h-[20rem] md:h-[450px] px-2 md:px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.2348813985227!2d77.20364227618052!3d28.74240337908164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cffabb16a566d%3A0x5e1c8ed4b3de828b!2sNICS Automation%20-%20Digital%20Marketing%20Agency%20in%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1751695069769!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </div>
  )
}

export default ConnectUs
