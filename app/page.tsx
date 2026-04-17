"use client"
import Link from "next/link";

import Image from 'next/image'
import { Play, ArrowRight, Phone, Palette, Lightbulb, Star, PanelTop } from 'lucide-react'
// import { JSX } from 'react'
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQ from '@/components/FAQ';
import ConnectUs from "@/components/connectUs"
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const firstSet = [
  { title: "Card A1", desc: "First set - card 1" },
  { title: "Card A2", desc: "First set - card 2" },
  { title: "Card A3", desc: "First set - card 3" },
];

const secondSet = [
  { title: "Card B1", desc: "Second set - card 1" },
  { title: "Card B2", desc: "Second set - card 2" },
  { title: "Card B3", desc: "Second set - card 3" },
];

const logos = [
  "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0eeeb860f66063130cc_Amsterdam-colored.svg",
  "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09591135411dbf1f686_colorado-colored.svg",
  "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/65609f775edfd6ba4a3c3af7_Nairobi-colored.svg",
  "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/656093f6591bba4a6757b985_Hudon-colored.svg",
  "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/6560817610fbd2b58993793c_Aura-colored.svg",
  "https://cdn.prod.website-files.com/61ed56ae9da9fd7e0ef0a967/65607df9d46a61fcef7c719f_Aiken-colored.svg"
];

const offerCards = [
  {
    title: "WhatsApp AI Assistant",
    description: "Automate replies, handle customer queries, and take orders 24/7 with AI-powered WhatsApp automation.",
    backgroundImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    icon: (
  <svg
    className="w-16 h-16 mb-4 text-green-500"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.78 11.78 0 0012.05 0C5.5 0 .17 5.33.17 11.88c0 2.1.55 4.15 1.6 5.96L0 24l6.34-1.66a11.83 11.83 0 005.71 1.46h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.44zM12.06 21.6h-.01a9.7 9.7 0 01-4.95-1.35l-.35-.21-3.76.98 1-3.66-.23-.38a9.68 9.68 0 01-1.5-5.1C2.26 6.38 6.6 2.04 12.06 2.04c2.6 0 5.05 1.01 6.9 2.86a9.7 9.7 0 012.84 6.9c0 5.46-4.34 9.8-9.74 9.8zm5.39-7.35c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52s1.08 2.93 1.23 3.13c.15.2 2.12 3.24 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.13-.27-.2-.57-.35z" />
  </svg>
)
  },
  {
    title: "Web Development",
    description: "Building modern and responsive web applications with cutting-edge technologies.",
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    icon: (
      <PanelTop className="w-16 h-16 mb-4 text-gray-800" />
    )
  },
  {
    title: "Social Media Automation",
    description: "Instantly reply to messages and comments on Instagram, Facebook, and Messenger so you never miss a lead.",
    backgroundImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    icon: (
      <Star className='w-16 h-16 mb-4 text-gray-800' />
    )
  },
  {
    title: "AI Content & Auto Posting",
    description: "Create and automatically post content across social media platforms without manual effort.",
    backgroundImage: "https://img.freepik.com/premium-photo/digital-workflow-diagram-with-automated-processes-clean-graphics_1260728-22291.jpg",
    icon: (
      <svg className="w-16 h-16 mb-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
      </svg>
    )
  },
  {
    title: "Lead Generation Automation",
    description: "Find potential clients, send personalized emails, and follow up automatically to grow your business.",
    backgroundImage: "https://img.freepik.com/premium-vector/sales-funnel-lead-generation-marketing-strategy_1324816-27357.jpg",
    icon: (
      <svg className="w-16 h-16 mb-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
      </svg>
    )
  }
];

const projectCards = [
  {
    title: "Website design",
    category: "Web Design | Digital Product | Website",
    defaultImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png",
    hoverImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png",
    description: "Mordern Website design for Medical Equipments Related Products",
    technologies: ["React Native", "Figma", "Adobe XD"],
    duration: "1 months",
    client: "Suswasthya International"
  },
  {
    title: "Whatsapp AI Assistance",
    category: "AI Automation",
    defaultImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png",
    hoverImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png",
    description: "AI Chatbot with Automated replies",
    technologies: ["AI Tools"],
    duration: "0.5 months",
    client: "Suswasthya  International"
    
  },
  // {
  //   title: "Brand Identity Design",
  //   category: "Branding | Logo Design | Marketing",
  //   defaultImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png",
  //   hoverImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png",
  //   description: "Comprehensive brand identity package including logo, guidelines, and marketing materials.",
  //   technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
  //   duration: "2 months",
  //   client: "Fashion Brand"
  // },
  {
    title: "Website Design",
    category: "Web Design | Corporate | Responsive",
    defaultImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png",
    hoverImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png",
    description: "Professional corporate website with modern design and comprehensive content management.",
    technologies: ["React", "Node.js", "Coding"],
    duration: "1 months",
    client: "Modi Graphics"
  }
  // {
  //   title: "Mobile App Development",
  //   category: "Mobile App | iOS/Android | Cross-platform",
  //   defaultImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png",
  //   hoverImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png",
  //   description: "Cross-platform mobile application with native performance and modern features.",
  //   technologies: ["Flutter", "Firebase", "Dart"],
  //   duration: "5 months",
  //   client: "Healthcare Provider"
  // },
  // {
  //   title: "3D Product Visualization",
  //   category: "3D Animation | Product Design | Visualization",
  //   defaultImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png",
  //   hoverImage: "https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png",
  //   description: "High-quality 3D product renders and animations for marketing and presentation.",
  //   technologies: ["Blender", "Cinema 4D", "V-Ray"],
  //   duration: "3 months",
  //   client: "Manufacturing Company"
  // }
];

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [openCard, setOpenCard] = useState<number>(0); // First card open by default
  const [isClient, setIsClient] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const speed = 80; // px per second

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleProjectClick = (index: number) => {
    setSelectedProject(index);
    setIsLoading(true);

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      // Here you could navigate to project detail page or open modal
      console.log(`Opening project: ${projectCards[index].title}`);
    }, 1500);
  };

  const handleProjectHover = (index: number) => {
    if (!isClient) return;
    // Add any hover-specific logic here
    try {
      gsap.to(`.project-card-${index}`, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    } catch (error) {
      console.error('GSAP hover error:', error)
    }
  };

  const handleProjectLeave = (index: number) => {
    if (!isClient) return;
    try {
      gsap.to(`.project-card-${index}`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    } catch (error) {
      console.error('GSAP leave error:', error)
    }
  };

  useEffect(() => {
    if (!isClient) return;
    
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const trackWidth = track.getBoundingClientRect().width;
    let start = performance.now();
    let pos = 0;
    let animationId: number;

    // Clone track to create seamless loop
    const clone = track.cloneNode(true) as HTMLDivElement;
    container.appendChild(clone);

    const animate = (timestamp: number) => {
      const elapsed = timestamp - start;
      pos = -(elapsed / 1000) * speed;

      if (Math.abs(pos) >= trackWidth) {
        start = timestamp;
        pos = 0;
      }

      container.style.transform = `translateX(${pos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      clone.remove();
      container.style.transform = "";
    };
  }, [isClient]);

  //Gsap animation 
  useGSAP(() => {
    if (!isClient) return;

    try {
      var tl1 = gsap.timeline();

      tl1.fromTo(
        '.welcome-web-agency',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.in' }
      )
        .fromTo(
          '.we-are-digital',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        )
        .fromTo(
          '.heros-para',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        );

      gsap.fromTo(
        '.Creative-professional',
        { opacity: 0, x: 1000 },
        { opacity: 1, x: 0, duration: 2, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.hero-circle-1',
        { scale: 0 },
        { scale: 1, duration: 1, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.hero-circle-2',
        { scale: 0 },
        { scale: 1, duration: 1, ease: 'power2.out' }
      );

      // About gsap

      gsap.fromTo(
        '.about-image',
        { opacity: 0, x: -400 },
        {
          opacity: 1, x: 0, duration: 1,
          scrollTrigger: {
            trigger: '.about-image',
            scroller: 'body',
            start: 'top 50%'
          }
        }
      );

      gsap.timeline({
        scrollTrigger: {
          trigger: '.about-mark',
          scroller: 'body',
          start: 'top 50%',
        }
      })
        .fromTo('.about-mark',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.2, ease: 'power2.in' }
        )
        .fromTo('.about-head',
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        )
        .fromTo('.about-para',
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        )
        .fromTo('.about-feature-1',
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.9, ease: 'power2.out' }, 'fea1'
        )
        .fromTo('.about-feature-2',
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.9, ease: 'power2.out' }, 'fea1'
        );

      // offer

      gsap.timeline({
        scrollTrigger: {
          trigger: '.offer-mark',
          scroller: 'body',
          start: 'top 80%',
        }
      })
        .fromTo('.offer-mark',
          { scale: 0 },
          { scale: 1, duration: 0.3, ease: 'power2.out' }
        )
        .fromTo('.offer-head',
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        )

      // Project section animations
      gsap.timeline({
        scrollTrigger: {
          trigger: '.project-section',
          scroller: 'body',
          start: 'top 80%',
        }
      })
        .fromTo('.project-badge',
          { scale: 0, rotation: -180 },
          { scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.7)' }
        )
        .fromTo('.project-title',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
        )
        .fromTo('.left-project-cards .project-card',
          { opacity: 0, x: -100, scale: 0.8 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.2
          }
        )
        .fromTo('.right-project-cards .project-card',
          { opacity: 0, x: 100, scale: 0.8 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.2
          },
          '-=0.4'
        );

      // Project card hover animations
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          try {
            gsap.to(card, {
              scale: 1.05,
              duration: 0.3,
              ease: 'power2.out'
            });
            gsap.to(card.querySelector('.project-image-hover'), {
              opacity: 1,
              duration: 0.3,
              ease: 'power2.out'
            });
            gsap.to(card.querySelector('.project-image-default'), {
              opacity: 0,
              duration: 0.3,
              ease: 'power2.out'
            });

            // Add floating animation to the card
            gsap.to(card, {
              y: -10,
              duration: 0.3,
              ease: 'power2.out'
            });
          } catch (error) {
            console.error('GSAP card hover error:', error)
          }
        });

        card.addEventListener('mouseleave', () => {
          try {
            gsap.to(card, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out'
            });
            gsap.to(card.querySelector('.project-image-hover'), {
              opacity: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
            gsap.to(card.querySelector('.project-image-default'), {
              opacity: 1,
              duration: 0.3,
              ease: 'power2.out'
            });

            // Reset floating animation
            gsap.to(card, {
              y: 0,
              duration: 0.3,
              ease: 'power2.out'
            });
          } catch (error) {
            console.error('GSAP card leave error:', error)
          }
        });
      });

    } catch (error) {
      console.error('GSAP animation error:', error)
    }
  }, { dependencies: [isClient] });

  return (
    <div id='main' className="overflow-x-hidden">
      <div id='cursor'></div>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-8 md:pt-0 bg-gradient-to-br from-gray-50 to-[#05ce9b]/10 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#14473b] to-[#039158] /10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#02ef91]/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-[#039bad] rounded-full opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center min-h-screen">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#05ce9b] font-medium">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#14473b] to-[#039158]  rotate-45"></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-[#14473b] to-[#039158]  rotate-45"></div>
                </div>
                <span className="text-xs sm:text-sm uppercase tracking-wider welcome-web-agency">AI AUTOMATION & WEB SOLUTIONS</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#14473b] to-[#039158]  rotate-45"></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-[#14473b] to-[#039158]  rotate-45"></div>
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight we-are-digital">
               Automate & Grow Your Business
                <br />
                <span className="text-gray-800"> with AI and Smart Websites </span>
                <br />
                <span className="text-gray-700"></span>
              </h1>

              <p className="text-base sm:text-lg text-gray-900 sm:text-gray-700 max-w-md mx-auto lg:mx-0 leading-relaxed heros-para">
                We help businesses generate leads, automate operations, and scale faster with AI-powered chatbots, WhatsApp automation, and high-converting websites.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
  href="/contact"
  className="inline-block bg-gradient-to-r from-[#14473b] to-[#039158] hover:from-[#039bad] hover:to-[#05ce9b] text-white px-6 sm:px-8 py-3 rounded-full"
>
  Book Free Demo
  
</Link>

                {/* <button className="flex items-center space-x-3 text-gray-700 hover:text-[#05ce9b] transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Play className="w-5 h-5 text-[#05ce9b] ml-1" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">Watch Video</span>
                </button> */}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative mt-10 lg:mt-0 flex justify-center items-center">
              <div className="absolute w-72 h-72 bg-green-400 opacity-20 blur-3xl rounded-full"></div>
              <div className="relative z-10">
                <Image
  src="/CEO/ceo.png"
  alt="AI Automation"
  width={600}
  height={600}
  className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain mix-blend-multiply"
  priority
/>
              </div>

              {/* Decorative green circle */}
              <div className="absolute -bottom-8 sm:-bottom-12 -right-8 sm:-right-12 w-32 sm:w-64 h-32 sm:h-64 border-8 border-[#05ce9b] rounded-full opacity-80 hero-circle-1"></div>
              <div className="absolute top-1/2 -left-4 sm:-left-8 w-12 sm:w-24 h-12 sm:h-24 bg-gradient-to-r from-[#14473b] to-[#039158]  rounded-full opacity-60 hero-circle-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Left Content - Team Image */}
            <div className="relative flex justify-center">
              <div className="relative z-10 about-image">
                <Image
                  src="/CEO/Home1.png"
                  alt="Creative team working together"
                  width={600}
                  height={700}
                  className="w-full max-w-xs sm:max-w-md md:max-w-lg h-[350px] sm:h-[500px] md:h-[600px] object-cover rounded-2xl shadow-2xl"
                />
              </div>

              {/* Decorative border */}
              <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 w-full h-full border-4 border-[#05ce9b] rounded-2xl -z-10"></div>
            </div>

            {/* Right Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#05ce9b] font-medium ">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#14473b] to-[#039158]  rotate-45"></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-[#14473b] to-[#039158]  rotate-45"></div>
                </div>
                <span className="text-xs sm:text-sm uppercase tracking-wide about-mark">ABOUT NICS AUTOMATION</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#14473b] to-[#039158]  rotate-45"></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-[#14473b] to-[#039158]  rotate-45"></div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight about-head">
               We Help Businesses Automate,
                <br />
                <span className="text-gray-800"> Scale & Grow Faster</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed about-para">
                 At NICS Automation, we build AI-powered automation systems, chatbots, and high-converting websites that help businesses generate leads, streamline operations, and improve customer engagement.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 about-feature-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#05ce9b]/20 to-[#02ef91]/20 rounded-lg flex items-center justify-center mx-auto md:mx-0">
                    <Palette className="w-6 h-6 text-[#05ce9b]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">AI Automation Solutions</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                   Automate customer interactions, lead generation, and daily tasks using smart AI tools.
                  </p>
                </div>

                <div className="space-y-4 about-feature-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#05ce9b]/20 to-[#02ef91]/20 rounded-lg flex items-center justify-center mx-auto md:mx-0">
                    <Lightbulb className="w-6 h-6 text-[#05ce9b]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Modern Web Development</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Build fast, responsive, and high-converting websites designed to grow your business.
                  </p>
                </div>
              </div>

              {/* CTA and Contact */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                <Link
  href="/about"
  className="inline-block bg-gradient-to-r from-[#14473b] to-[#039158] hover:from-[#039bad] hover:to-[#05ce9b] text-white px-6 sm:px-8 py-3 rounded-full"
>
  VIEW MORE
  
</Link>
                  
               

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* what we offer */}

      <section className="py-12 sm:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          {/* WHAT WE OFFER and Main Title */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#05ce9b]/20 to-[#02ef91]/20 text-[#05ce9b] text-xs sm:text-sm font-medium rounded-full mb-4 offer-mark">WHAT WE OFFER</div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 offer-head">
             Smart Solutions to 
              <br />
             Grow Your Business
            </h2>
            <Link
  href="/services"
  className="inline-block bg-gradient-to-r from-[#14473b] to-[#039158] hover:from-[#039bad] hover:to-[#05ce9b] text-white px-6 sm:px-8 py-3 rounded-full"
>
  VIEW MORE 
</Link>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-nowrap gap-4 sm:gap-6 overflow-x-auto pb-6">
            {offerCards.map((card, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center text-center group relative h-[400px] sm:h-[500px] transition-all duration-500 ease-in-out overflow-hidden cursor-pointer ${openCard === index
                  ? 'min-w-[300px] sm:min-w-[400px]'
                  : 'min-w-[180px] sm:min-w-[200px]'
                  }`}
                onClick={() => setOpenCard(index)}
                onMouseEnter={() => setOpenCard(index)}
              >
                {/* Background Image */}
                <div
                  className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out ${openCard === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{ backgroundImage: `url(${card.backgroundImage})` }}
                >
                  {/* Dark overlay for better text readability */}
                  <div className={`absolute inset-0 transition-all duration-500 ${openCard === index ? 'bg-black/70' : 'bg-black/60'
                    }`}></div>
                </div>

                {/* Default Content */}
                <div className={`transition-all duration-500 absolute inset-0 flex flex-col items-center justify-center z-10 ${openCard === index ? 'opacity-0' : 'opacity-100'
                  }`}>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-800 rotate-90 whitespace-nowrap origin-center flex items-center gap-2">
                    {card.icon}
                    {card.title}
                  </h3>
                </div>

                {/* Hover Content */}
                <div className={`absolute transition-all duration-500 text-white p-6 flex flex-col items-center justify-center h-full z-20 ${openCard === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                    {card.title}
                  </h3>
                  <p className="mb-4 text-white/90 leading-relaxed">
                    {card.description}
                  </p>
                  <Link
  href="/services"
  className="inline-block bg-gradient-to-r from-[#14473b] to-[#039158] hover:from-[#039bad] hover:to-[#05ce9b] text-white px-6 sm:px-8 py-3 rounded-full"
>
  Learn More 
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-section overflow-hidden">
        <div className='bg-[rgb(0,7,26)]'>
          <div className='flex flex-col py-10 justify-center items-center'>
            <div className="flex items-center pb-5 space-x-2 text-[#05ce9b] font-medium project-badge">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gradient-to-r from-[#14473b] to-[#039158]  rotate-45"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-[#14473b] to-[#039158]  rotate-45"></div>
              </div>
              <span className="text-xs sm:text-sm uppercase tracking-wider">Our works</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gradient-to-r from-[#14473b] to-[#039158]  rotate-45"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-[#14473b] to-[#039158]  rotate-45"></div>
              </div>
            </div>

            <h2 className="text-4xl mb-10 text-center lg:text-5xl font-bold text-white leading-tight project-title">
              Explore Our Best Recently
              <br />
              <span className="text-white">Completed Projects</span>
            </h2>
          </div>

          <div>
            <div className='flex md:flex-row flex-col justify-center items-center gap-20 pb-10 relative mx-auto'>
              <div className='flex flex-col w-full max-w-md md:max-w-none md:w-auto left-project-cards items-center'>
                {projectCards.slice(0, 3).map((card, index) => (
                  <div
                    key={index}
                    className={`my-12 project-card project-card-${index} cursor-pointer transform transition-all duration-500 hover:scale-105 group w-full max-w-xs md:max-w-none md:w-auto mx-auto`}
                  >
                    <div className="relative md:w-[450px] w-full h-[300px] overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 mx-auto">
                      <img
                        className='project-image-default rounded-xl absolute inset-0 md:w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110'
                        src={card.defaultImage}
                        alt="Default project image"
                      />
                      <img
                        className='project-image-hover rounded-xl absolute inset-0 md:w-full h-full object-cover opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-110'
                        src={card.hoverImage}
                        alt="Hover project image"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      {/* Project Info Overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <div className="space-y-3 mb-10">
                          <p className="text-white/90 text-sm leading-relaxed">{card.description}</p>
                          {/* Technology Tags */}
                          <div className="flex flex-wrap gap-2">
                            {card.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="bg-gradient-to-r from-[#14473b] to-[#039158] /20 text-[#05ce9b] px-2 py-1 rounded-full text-xs font-medium border border-[#05ce9b]/30 hover:bg-gradient-to-r from-[#14473b] to-[#039158] /30 transition-colors duration-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                          {/* Project Details */}
                          <div className="flex items-center justify-between text-white/80 text-xs">
                            <span>Duration: {card.duration}</span>
                            <span>Client: {card.client}</span>
                          </div>
                        </div>
                      </div>
                      {/* View Project Button */}
                      {/* <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <div className="bg-gradient-to-r from-[#14473b] to-[#039158]  text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#039bad] transition-colors duration-300 flex items-center space-x-2 group/btn">
                          <span>View Project</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div> */}

                    </div>
                    {/* Card Content */}
                    <div className="mt-5 space-y-2 text-center">
                      <h3 className='text-white text-3xl group-hover:text-[#05ce9b] transition-colors duration-300 font-bold'>
                        {card.title}
                      </h3>
                      <p className='text-gray-200 group-hover:text-gray-300 transition-colors duration-300'>
                        {card.category.split('|').map((cat, catIndex) => (
                          <span key={catIndex}>
                            {cat.trim()}
                            {catIndex < card.category.split('|').length - 1 && (
                              <span className='text-[#05ce9b] mx-2'>|</span>
                            )}
                          </span>
                        ))}
                      </p>

                    </div>
                  </div>
                ))}
              </div>
              {/* section 2 */}
              <div className='flex flex-col w-full max-w-md md:max-w-none md:w-auto right-project-cards items-center'>
                {projectCards.slice(3).map((card, index) => {
                  const actualIndex = index + 3; // Adjust index for right column
                  return (
                    <div
                      key={actualIndex}
                      className={`my-12 project-card project-card-${actualIndex} cursor-pointer transform transition-all duration-500 hover:scale-105 group w-full max-w-xs md:max-w-none md:w-auto mx-auto`}
                    >
                      <div className="relative md:w-[450px] w-full h-[300px] overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 mx-auto">
                        <img
                          className='project-image-default rounded-xl absolute inset-0 md:w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110'
                          src={card.defaultImage}
                          alt="Default project image"
                        />
                        <img
                          className='project-image-hover rounded-xl absolute inset-0 md:w-full h-full object-cover opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-110'
                          src={card.hoverImage}
                          alt="Hover project image"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        {/* Project Info Overlay */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="space-y-3 mb-10">
                            <p className="text-white/90 text-sm leading-relaxed">{card.description}</p>
                            {/* Technology Tags */}
                            <div className="flex flex-wrap gap-2">
                              {card.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="bg-gradient-to-r from-[#14473b] to-[#039158] /20 text-[#05ce9b] px-2 py-1 rounded-full text-xs font-medium border border-[#05ce9b]/30 hover:bg-gradient-to-r from-[#14473b] to-[#039158] /30 transition-colors duration-300">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            {/* Project Details */}
                            <div className="flex items-center justify-between text-white/80 text-xs">
                              <span>Duration: {card.duration}</span>
                              <span>Client: {card.client}</span>
                            </div>
                          </div>
                        </div>
                        {/* View Project Button */}
                        {/* <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="bg-gradient-to-r from-[#14473b] to-[#039158]  text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#039bad] transition-colors duration-300 flex items-center space-x-2 group/btn">
                            <span>View Project</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div> */}

                      </div>
                      {/* Card Content */}
                      <div className="mt-5 space-y-2 text-center">
                        <h3 className='text-white text-3xl group-hover:text-[#05ce9b] transition-colors duration-300 font-bold'>
                          {card.title}
                        </h3>
                        <p className='text-gray-200 group-hover:text-gray-300 transition-colors duration-300'>
                          {card.category.split('|').map((cat, catIndex) => (
                            <span key={catIndex}>
                              {cat.trim()}
                              {catIndex < card.category.split('|').length - 1 && (
                                <span className='text-[#05ce9b] mx-2'>|</span>
                              )}
                            </span>
                          ))}
                        </p>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <section className="py-20">
          <div className="relative overflow-hidden">
            {/* First Marquee */}
            <div className="flex overflow-hidden -skew-y-3 select-none">
              <div className="flex-shrink-0 flex items-center min-w-full animate-[scroll_60s_linear_infinite]">
                <div className="flex items-center">
                  <img
                    src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png"
                    alt="Marquee image 1"
                    className="max-w-[clamp(10rem,1rem+28vmin,20rem)] aspect-square object-cover rounded-2xl"
                  />
                  <p className="bg-gradient-to-r from-[#05ce9b] via-[#02ef91] to-[#039bad] bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap ml-8">
                   Whatsapp AI Assistance
                  </p>
                  <img
                    src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png"
                    alt="Marquee image 2"
                    className="max-w-[clamp(10rem,1rem+28vmin,20rem)] aspect-square object-cover rounded-2xl ml-8"
                  />
                  <p className="bg-gradient-to-r from-[#05ce9b] via-[#02ef91] to-[#039bad] bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap ml-8">
                  Automation Solutions
                  </p>
                </div>
                {/* Duplicate content for seamless loop */}
                <div className="flex items-center">
                  <img
                    src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png"
                    alt="Marquee image 1"
                    className="max-w-[clamp(10rem,1rem+28vmin,20rem)] aspect-square object-cover rounded-2xl"
                  />
                  <p className="bg-gradient-to-r from-[#05ce9b] via-[#02ef91] to-[#039bad] bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap ml-8">
                    Whatsapp AI Assistance
                  </p>
                  <img
                    src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png"
                    alt="Marquee image 2"
                    className="max-w-[clamp(10rem,1rem+28vmin,20rem)] aspect-square object-cover rounded-2xl ml-8"
                  />
                  <p className="bg-gradient-to-r from-[#05ce9b] via-[#02ef91] to-[#039bad] bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap ml-8">
                    Automation Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Second Marquee (Reverse) */}
            <div className="flex overflow-hidden -skew-y-3 select-none mt-8 border-y-4 border-[#05ce9b] py-3">
              <div className="flex-shrink-0 flex items-center min-w-full animate-[scroll_60s_linear_infinite_reverse]">
                <div className="flex items-center">
                  <p className="bg-gradient-to-r from-[#05ce9b] via-[#02ef91] to-[#039bad] bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap">
                    Web Development
                  </p>
                  <img
                    src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png"
                    alt="Marquee image 3"
                    className="max-w-[clamp(10rem,1rem+28vmin,20rem)] aspect-square object-cover rounded-2xl ml-8"
                  />
                  <p className="bg-gradient-to-r from-[#05ce9b] via-[#02ef91] to-[#039bad] bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap ml-8">
                    AI Content & Engagement
                  </p>
                  <img
                    src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png"
                    alt="Marquee image 4"
                    className="max-w-[clamp(10rem,1rem+28vmin,20rem)] aspect-square object-cover rounded-2xl ml-8"
                  />
                </div>
                {/* Duplicate content for seamless loop */}
                <div className="flex items-center">
                  <p className="bg-gradient-to-r from-[#05ce9b] via-[#02ef91] to-[#039bad] bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap">
                    Web Development
                  </p>
                  <img
                    src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-3.png"
                    alt="Marquee image 3"
                    className="max-w-[clamp(10rem,1rem+28vmin,20rem)] aspect-square object-cover rounded-2xl ml-8"
                  />
                  <p className="bg-gradient-to-r from-[#05ce9b] via-[#02ef91] to-[#039bad] bg-clip-text text-transparent text-2xl font-bold whitespace-nowrap ml-8">
                    AI Content & Engagement
                  </p>
                  <img
                    src="https://themexriver.com/wp/haptic-wp/wp-content/uploads/2023/09/project-img-2.png"
                    alt="Marquee image 4"
                    className="max-w-[clamp(10rem,1rem+28vmin,20rem)] aspect-square object-cover rounded-2xl ml-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <TestimonialSlider />
      </section>

      {/* <section className="overflow-hidden">
        <div className="grid place-content-center h-20 bg-gray-100">
          <div className="overflow-hidden relative w-full mask-marquee">
            <div ref={containerRef} className="flex w-max will-change-transform">
              <div ref={trackRef} className="flex">
                {logos.map((src, index) => (
                  <div key={index} className="flex-shrink-0 w-32 mr-12 flex justify-center items-center">
                    <img src={src} alt="LOGO" className="h-14 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="faq">
        <FAQ />
      </section>

      {/* <section>
        <ConnectUs />
      </section> */}

    </div>
  )
}