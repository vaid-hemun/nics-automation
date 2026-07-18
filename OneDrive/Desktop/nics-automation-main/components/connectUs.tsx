import React, { useState, useEffect, useRef } from 'react';
import { Phone, ChevronRight } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, suffix, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/80 text-sm md:text-base font-medium">
        {label}
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    // Validate form fields
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields.');
      setSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setSubmitting(false);
      return;
    }

    // Simulate form submission (no backend)
    setTimeout(() => {
      setSuccess('Thank you! Your message has been received. We will contact you soon.');
      setName('');
      setEmail('');
      setMessage('');
      setSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-10 md:py-24">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative mb-8 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional woman working on computer"
                className="w-full h-56 xs:h-72 sm:h-80 md:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-r from-[#14473b] to-[#039158]  rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-16 sm:h-16 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#14473b] to-[#039158]  rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    <a href="tel:+918178099663" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#05ce9b] rounded">+91 9716689858</a>
                  </h2>
                </div>
              </div>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-lg">
                We believe in four pillars of influence that drive our growth. This is 
                ingrained in everything we do. We use technology to create a better and 
                smarter environment.
              </p>
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="mt-2 bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 space-y-4 border border-white/10">
                {success && (
                  <div className="rounded-lg bg-emerald-500/10 text-emerald-200 border border-emerald-400/30 px-4 py-3 text-sm">
                    {success}
                  </div>
                )}
                {error && (
                  <div className="rounded-lg bg-red-500/10 text-red-200 border border-red-400/30 px-4 py-3 text-sm">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-white/80 text-sm mb-1">Your Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#05ce9b]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-1">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#05ce9b]"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-1">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#05ce9b] resize-y"
                    placeholder="Tell us a bit about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="group bg-gradient-to-r from-[#05ce9b] hover:from-[#039bad] hover:to-[#05ce9b] disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 hover:gap-4 text-sm sm:text-base"
                >
                  {submitting ? 'SENDING...' : 'SEND MESSAGE'}
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-10 sm:mt-16 md:mt-24">
          <div className="bg-gradient-to-r from-[#14473b] to-[#039158]  rounded-2xl sm:rounded-3xl p-4 xs:p-6 md:p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-8 md:gap-12">
              <AnimatedCounter end={5} suffix="K+" label="Successful Project" />
              <AnimatedCounter end={10} suffix="K" label="Happy Customers" />
              <AnimatedCounter end={20} suffix="+" label="Happy Customers" />
              <AnimatedCounter end={22} suffix="+" label="Awards Won" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;