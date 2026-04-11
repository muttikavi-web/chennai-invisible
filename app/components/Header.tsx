import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <h1 className="font-bold text-xl text-gray-900">Falcon</h1>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <Link href="#features" className="text-gray-700 hover:text-blue-600">
              Features
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="#process" className="text-gray-700 hover:text-blue-600">
              Process
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4 text-sm">
            <a href="tel:+918008430800" className="hidden sm:flex items-center gap-1 text-gray-700 hover:text-blue-600">
              <Phone size={16} />
              <span>+91 8008 430 800</span>
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
