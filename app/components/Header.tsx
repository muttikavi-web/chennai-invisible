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
            <h1 className="font-bold text-xl text-gray-900">Falcon Invisible Grills</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="#features" className="text-gray-700 hover:text-blue-600">Features</Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link href="#process" className="text-gray-700 hover:text-blue-600">Process</Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link href="#chennai" className="text-gray-700 hover:text-blue-600">Chennai</Link>
          </nav>
          <div className="flex flex-col items-end gap-1 text-xs md:text-sm">
            <span className="text-gray-700 font-semibold">Chennai: <a href="tel:+918008430800" className="hover:text-blue-600">+91 8008 430 800</a></span>
            <span className="text-gray-700">3/855A, Maniammai St, Gandhi Nagar, Palavakkam, Chennai, TN 600041</span>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-1">Get Quote</button>
          </div>
        </div>
      </div>
    </header>
  );
}

