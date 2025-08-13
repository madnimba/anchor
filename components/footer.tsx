import Link from "next/link"
import { Anchor, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <Anchor className="w-5 h-5 text-slate-900" />
              </div>
              <span className="font-heading font-bold text-xl text-slate-100">Anchorio</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Premium marine anchors engineered for maximum holding power. Steady in every storm, trusted by
              professionals worldwide.
            </p>
            <p className="text-sm text-slate-500">© 2024 Anchorio. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-slate-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-teal-400 transition-colors">
                  About & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-slate-100 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-slate-400">
                <Mail className="w-4 h-4" />
                <span>info@anchorio.com</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>Maritime District, Harbor City</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
