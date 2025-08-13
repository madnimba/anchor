"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/images/anchorio-logo.png"
              alt="Anchorio Logo"
              className="h-10 w-auto group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-300 hover:text-teal-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/product" className="text-slate-300 hover:text-teal-400 transition-colors font-medium">
              Product
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-teal-400 transition-colors font-medium">
              About & Contact
            </Link>
            <Button className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-6">Get Quote</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-teal-400"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-slate-300 hover:text-teal-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/product"
                className="block px-3 py-2 text-slate-300 hover:text-teal-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Product
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-slate-300 hover:text-teal-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About & Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-teal-600 hover:bg-teal-500 text-white">Get Quote</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
