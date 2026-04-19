import { Metadata } from 'next';
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import TrustBadges from '@/components/TrustBadges';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Customer Testimonials | Real Reviews of Invisible Grill Installations',
  description:
    'Read genuine customer testimonials about our invisible grill installations. See why thousands of happy customers trust Falcon for premium window grills and safety solutions.',
  keywords: [
    'invisible grill reviews',
    'customer testimonials',
    'falcon grills reviews',
    'grill installation reviews',
    'customer satisfaction',
  ],
  alternates: {
    canonical: 'https://www.falconinvisiblegrill.com/testimonials',
  },
};

export default function TestimonialsPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Testimonials />
        <TrustBadges />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
