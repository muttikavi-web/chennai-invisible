import { Metadata } from 'next';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import VideoGallery from '@/components/VideoGallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Invisible Grills Gallery | Real Installation Photos & Videos',
  description:
    'Browse our gallery of invisible grill installations. See real before-and-after photos and professional installation videos of frameless window grills, door grills, and safety solutions.',
  keywords: [
    'invisible grill gallery',
    'invisible grill photos',
    'installation gallery',
    'before after invisible grills',
    'frameless grill designs',
  ],
  alternates: {
    canonical: 'https://www.chennaiinvisiblegrill.com/gallery',
  },
};

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Gallery />
        <VideoGallery />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

