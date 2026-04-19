import { Metadata } from 'next';
import Header from '@/components/Header';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Invisible Grill Installation Process | Step-by-Step Guide',
  description:
    'Learn our professional invisible grill installation process. From measurement to final inspection, see how Falcon installs premium safety grills. Get expert installation for your home or office.',
  keywords: [
    'grill installation process',
    'invisible grill installation step by step',
    'how to install invisible grills',
    'professional grill installation',
    'window grill installation process',
  ],
  alternates: {
    canonical: 'https://www.falconinvisiblegrill.com/process',
  },
};

export default function ProcessPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Process />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
