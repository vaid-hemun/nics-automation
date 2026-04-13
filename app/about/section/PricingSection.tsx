"use client"
import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(1); // Default to Young Plans
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const plans = ["Starting Plans", "Young Plans", "Unlimited Plans"];

  const pricingData = {
    0: {
      price: "$9.99",
      title: "Starting Plans",
      description: "Perfect for small businesses getting started with digital presence.",
      features: [
        "Basic website design",
        "5 pages included",
        "Mobile responsive",
        "Basic SEO setup"
      ]
    },
    1: {
      price: "$16.00",
      title: "Young Plans",
      description: "Set up your business analytics dashboard to increase your business profit.",
      features: [
        "Professional website design",
        "10 pages included",
        "Advanced SEO optimization",
        "Content management system",
        "Social media integration"
      ]
    },
    2: {
      price: "$29.99",
      title: "Unlimited Plans",
      description: "Complete digital solution for growing businesses with unlimited possibilities.",
      features: [
        "Custom website development",
        "Unlimited pages",
        "E-commerce integration",
        "Advanced analytics",
        "Priority support",
        "Custom domain setup"
      ]
    }
  };

  const currentPlan = pricingData[selectedPlan as keyof typeof pricingData];

  // Handle plan switching with loading state
  const handlePlanChange = (index: number) => {
    if (index === selectedPlan) return;
    
    setIsLoading(true);
    setSelectedPlan(index);
    
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Initial setup
    gsap.set([cardRef.current, featuresRef.current], { opacity: 0, y: 50 });
    gsap.set(buttonRef.current, { opacity: 0, scale: 0.8 });

    // Main animation sequence
    tl.to(cardRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    })
    .to(featuresRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.5')
    .to(buttonRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.3');

    // Card hover effect
    gsap.to(cardRef.current, {
      scale: 1.01,
      duration: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1
      }
    });

  }, { scope: sectionRef });

  // Animation for plan switching
  useGSAP(() => {
    if (cardRef.current && featuresRef.current) {
      const tl = gsap.timeline();
      
      if (isLoading) {
        // Show skeleton animation
        tl.to([cardRef.current, featuresRef.current], {
          opacity: 0.3,
          duration: 0.2,
          ease: 'power2.in'
        });
      } else {
        // Show content animation
        tl.to([cardRef.current, featuresRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        });

        // Animate features list
        gsap.fromTo(featuresRef.current?.children || [], 
          { opacity: 0, x: -20 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.4, 
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.3
          }
        );
      }
    }
  }, [selectedPlan, isLoading]);

  // Skeleton components
  const CardSkeleton = () => (
    <div className="bg-gradient-to-r from-[#14473b] to-[#03a564] rounded-2xl p-8 text-white relative overflow-hidden">
      <div className="absolute top-4 right-4">
        <div className="w-6 h-6 bg-yellow-400/30 rounded animate-pulse"></div>
      </div>
      
      <div className="w-full h-48 bg-white/20 rounded-xl mb-6 animate-pulse"></div>
      
      <div className="mb-4">
        <div className="h-8 bg-white/30 rounded mb-2 animate-pulse"></div>
        <div className="h-4 bg-white/20 rounded w-20 animate-pulse"></div>
      </div>
      
      <div className="h-6 bg-white/30 rounded mb-4 animate-pulse"></div>
      <div className="h-4 bg-white/20 rounded animate-pulse"></div>
    </div>
  );

  const FeaturesSkeleton = () => (
    <div className="space-y-6">
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className="flex items-center space-x-4 p-4 rounded-xl">
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse"></div>
        </div>
      ))}
      
      <div className="pt-6">
        <div className="h-12 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#05ce9b] text-sm font-semibold mb-2 tracking-wider uppercase">
            WEB DESIGN & DEVELOPMENT
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            AFFORDABLE PRICING.<br />
            EASY SCALING.
          </h2>
          
          <div className="flex justify-center space-x-8 mt-8">
            {plans.map((plan, index) => (
              <button 
                key={index}
                onClick={() => handlePlanChange(index)}
                disabled={isLoading}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === selectedPlan
                    ? 'bg-gradient-to-r from-[#14473b] to-[#039158] text-white shadow-lg' 
                    : 'text-gray-600 hover:text-[#05ce9b] hover:bg-gray-100'
                } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {plan}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={cardRef} className="relative">
            {isLoading ? (
              <CardSkeleton />
            ) : (
              <div className="bg-gradient-to-r from-[#14473b] to-[#03a564] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </div>
                
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Strategy planning"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                
                <div className="mb-4">
                  <div className="text-3xl font-bold mb-2">{currentPlan.price}</div>
                  <div className="text-[#30ffcb] text-sm">Monthly</div>
                </div>
                
                <h3 className="text-xl font-bold mb-4">{currentPlan.title}</h3>
                <p className="text-purple-100 text-sm">
                  {currentPlan.description}
                </p>
              </div>
            )}
          </div>
          
          <div ref={featuresRef} className="space-y-6">
            {isLoading ? (
              <FeaturesSkeleton />
            ) : (
              <>
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                    <div className="w-8 h-8 bg-[#05ce9c33] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#05ce9b]" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
                
                <div className="pt-6">
                  <button ref={buttonRef} className="bg-gradient-to-r from-[#14473b] to-[#039158] hover:from-[#05ce9b] hover:to-[#039158] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    GET STARTED
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;