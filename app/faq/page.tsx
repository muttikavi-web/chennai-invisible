import { Metadata } from 'next';
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Invisible Grills FAQ | Answers to Common Questions',
  description:
    'Frequently asked questions about invisible grills - safety, price, installation, durability, maintenance. Get expert answers about frameless window grills and door safety solutions.',
  keywords: [
    'invisible grill faq',
    'are invisible grills safe',
    'invisible grill price',
    'how long do invisible grills last',
    'invisible grill cost',
  ],
  alternates: {
    canonical: 'https://www.falconinvisiblegrill.com/faq',
  },
};

export default function FAQPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <FAQ />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
