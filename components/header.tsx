'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 relative flex-shrink-0">
              <Image
                src="/logo.png"
                alt="B.D. Public School Logo"
                width={56}
                height={56}
                className="rounded-full object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-slate-900">B.D. Public School</h1>
              <p className="text-xs text-slate-600">Ara, Bihar</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-blue-600 font-medium transition">
              About
            </button>
            <button onClick={() => scrollToSection('facilities')} className="text-slate-700 hover:text-blue-600 font-medium transition">
              Facilities
            </button>
            <button onClick={() => scrollToSection('infrastructure')} className="text-slate-700 hover:text-blue-600 font-medium transition">
              Infrastructure
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-slate-700 hover:text-blue-600 font-medium transition">
              Gallery
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-blue-50 rounded">
              About
            </button>
            <button onClick={() => scrollToSection('facilities')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-blue-50 rounded">
              Facilities
            </button>
            <button onClick={() => scrollToSection('infrastructure')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-blue-50 rounded">
              Infrastructure
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-blue-50 rounded">
              Gallery
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
