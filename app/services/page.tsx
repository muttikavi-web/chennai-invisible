import { Metadata } from 'next';
import Header from '@/components/Header';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import TrustBadges from '@/components/TrustBadges';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Invisible Grills Services | Professional Installation Across India',
  description:
    'Professional invisible grill installation services across India. Frameless window grills, door grills, balcony grills with expert installation in Chennai, Delhi, Mumbai, Bangalore and more. Safety meets elegance.',
  keywords: [
    'invisible grills installation',
    'window grill installation service',
    'door grill installation',
    'safety invisible grills',
    'frameless grills installation',
    'invisible grills in chennai',
    'invisible grills in delhi',
  ],
  alternates: {
    canonical: 'https://www.falconinvisiblegrill.com/services',
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Services />
        <WhyChooseUs />
        <TrustBadges />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
