import { Metadata } from 'next';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import TrustBadges from '@/components/TrustBadges';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact Falcon Invisible Grills | Get Free Quote & Consultation',
  description:
    'Contact Falcon Invisible Grills for free consultation and quote. Call now or fill our contact form to discuss your invisible grill installation needs in your city.',
  keywords: [
    'contact invisible grills',
    'grill price quote',
    'free consultation',
    'invisible grill cost',
    'get grill quote online',
  ],
  alternates: {
    canonical: 'https://www.chennaiinvisiblegrill.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Contact />
        <TrustBadges />
      </div>
      <Footer />
    </main>
  );
}

