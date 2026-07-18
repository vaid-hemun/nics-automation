"use client"

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Lightbulb, Palette, Settings, BarChart3 } from 'lucide-react';

const InnovationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const services = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: " WhatsApp & Chat Automation ",
      color: "text-[#05ce9b]"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: " AI Content & Social Media Automation ",
      color: "text-[#05ce9b]"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: " Smart Lead Generation Systems",
      color: "text-[#05ce9b]"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "High-Converting Websites & Apps ",
      color: "text-[#05ce9b]"
    }
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        markers: false
      }
    });

    // Initial setup
    gsap.set([imageRef.current, contentRef.current], { opacity: 0, y: 30 });
    gsap.set('.floating-element', { opacity: 0, scale: 0 });
    gsap.set(servicesRef.current?.children || [], { opacity: 0, x: -20 });

    // Main animation sequence
    tl.to(imageRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    })
    .to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4')
    .to('.floating-element', {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.4)'
    }, '-=0.2')
    .to(servicesRef.current?.children || [], {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.3')
    .to(buttonRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: 'back.out(1.4)'
    }, '-=0.2');

    // Subtle floating animation for decorative elements
    gsap.to('.floating-element', {
      y: -10,
      duration: 4,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="relative">
            <div className="relative z-10">
              <img 
                src="/About/Abouteam.png"
                alt="Creative team working"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              {/* <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-[#14473b] to-[#039158] text-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">32+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div> */}
            </div>
            
            <div className="absolute top-8 left-8 w-24 h-24 border-2 border-purple-300 rounded-full opacity-20 floating-element pointer-events-none"></div>
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-purple-400 rounded-full opacity-30 floating-element pointer-events-none"></div>
            <div className="absolute top-16 -left-6 w-3 h-3 bg-blue-400 rounded-full opacity-40 floating-element pointer-events-none"></div>
          </div>
          
          <div ref={contentRef}>
            <div className="text-[#05ce9b] text-sm font-semibold mb-2 tracking-wider uppercase">
              ABOUT NICS AUTOMATION
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              CREATIVE PROBLEM SOLVING INNOVATIONS
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At NICS Automation, we help businesses save time, increase efficiency, and generate more revenue using AI-powered automation and modern web solutions. 

From WhatsApp AI assistants and social media automation to high-performing websites and lead generation systems, we build smart solutions that work 24/7—so your business grows even when you’re not working.
            </p>
            
            <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3" style={{ opacity: 0, transform: 'translateX(-20px)' }}>
                  <div className={`${service.color} mt-1 flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <div className="text-gray-700 font-medium text-sm leading-tight">
                    {service.title}
                  </div>
                </div>
              ))}
            </div>
            
            {/* <button ref={buttonRef} className="bg-gradient-to-r from-[#14473b] to-[#039158] hover:bg-[#098e6b] text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ opacity: 0, transform: 'scale(0.9)' }}>
              READ MORE
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;