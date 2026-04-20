import Link from 'next/link';
import { Share2, MessageSquare, Image, Briefcase } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Falcon Invisible Grills</h3>
            <p className="text-sm text-gray-400">
              Premium invisible grill solutions for modern homes and offices in Chennai and beyond.
            </p>
            <div className="mt-2 text-xs text-gray-400">
              <span className="block">3/855A, Maniammai St, Gandhi Nagar, Palavakkam, Chennai, TN 600041</span>
              <span className="block">Phone: <a href="tel:+918008430800" className="hover:text-white">+91 8008 430 800</a></span>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#process" className="hover:text-white transition-colors">Process</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#chennai" className="hover:text-white transition-colors">Chennai</Link></li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/falconinvisiblegrills" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Share2 size={20} /></a>
              <a href="https://www.instagram.com/falconinvisiblegrills" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Image size={20} /></a>
              <a href="https://www.linkedin.com/company/falconinvisiblegrills" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"><Briefcase size={20} /></a>
            </div>
            <div className="mt-2 text-xs text-gray-400">Email: <a href="mailto:info@chennaiinvisiblegrill.com" className="hover:text-white">info@chennaiinvisiblegrill.com</a></div>
          </div>
        </div>
        {/* CTAs */}
        <div className="bg-blue-800 rounded-lg p-6 text-center text-white mb-8">
          <h4 className="text-2xl font-bold mb-2">Free Installation & Free Inspection</h4>
          <p className="mb-2">Enhance your home's safety and aesthetics with our invisible grill services! Enjoy free installation and a complimentary inspection to ensure your peace of mind.</p>
          <span className="font-semibold">Quality Warranty Assured</span>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Falcon Invisible Grills. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

