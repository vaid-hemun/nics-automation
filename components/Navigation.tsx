'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'

export default function Navigation() {
  const pathname = usePathname()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isClient, setIsClient] = useState(false)

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClient])

  useEffect(() => {
    if (!isClient) return

    try {
      var tl1 = gsap.timeline()
      tl1.fromTo(
        '.mobile-navbar',
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          '.nav-logo',
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 }
        )
        .fromTo(
          '.mobile-navbar3 li',
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }
        )
    } catch (error) {
      console.error('GSAP animation error:', error)
    }
  }, [isClient])

  useEffect(() => {
    if (!isClient || !mobileOpen) return

    try {
      const tl = gsap.timeline()
      tl.fromTo(
        '.mobile-navbar2',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
      gsap.fromTo(
        '.mobile-navbar2 ul li',
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15 }
      )
    } catch (error) {
      console.error('GSAP mobile animation error:', error)
    }
  }, [mobileOpen, isClient])

  if (!isClient) {
    return (
      <div className="fixed left-0 right-0 top-0 z-50 bg-white shadow-md">
        <nav className="w-full md:max-w-screen-xl md:mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/logo/Nicslogo.png"
                alt="logo"
                className="h-16 md:h-20 w-auto object-contain scale-125 origin-left"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-10 text-base font-semibold">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Service</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <button className="md:hidden p-2 rounded-lg">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>
    )
  }

 return (
  <>
    {/* NAVBAR */}
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-md"
      }`}
    >
      <nav className="w-full md:max-w-screen-xl md:mx-auto px-4 sm:px-6 lg:px-8">

        {/* NAVBAR INNER */}
        <div className="flex items-center justify-between h-20 md:h-24 relative">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo/Nicslogo.png"
              alt="logo"
              className="h-14 md:h-16 w-auto object-contain"
            />
             {/* Text */}
  <div className="leading-tight">
    <span className="text-lg md:text-2xl font-bold text-[#0f172a]">
    NICS Automation
  </span>
  </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center space-x-10 text-base font-semibold">
            <li>
              <Link href="/" className="hover:text-[#05ce9b] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#05ce9b] transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#05ce9b] transition">
                Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#05ce9b] transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* HAMBURGER BUTTON */}
          <button
            className="md:hidden p-2 rounded-lg z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
    </div>

    {/* MOBILE MENU (SLIDE FROM TOP) */}
    <div
      className={`fixed top-16 left-0 w-full bg-white shadow-lg z-40 transform transition-transform duration-300 md:hidden ${
        mobileOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ul className="flex flex-col text-base font-semibold py-4">

        <li>
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="block px-6 py-3 border-b"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="block px-6 py-3 border-b"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/services"
            onClick={() => setMobileOpen(false)}
            className="block px-6 py-3 border-b"
          >
            Service
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block px-6 py-3"
          >
            Contact
          </Link>
        </li>

      </ul>
    </div>
  </>
);
}