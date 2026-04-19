'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = Array.from({ length: 10 }, (_, i) => `/assets/image-${i + 1}.jpeg`);

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  return (
    <section id="gallery" className="w-full bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Our Work
        </h2>

        {/* Main Carousel */}
        <div className="relative w-full h-96 md:h-[500px] bg-black rounded-lg overflow-hidden group">
          {/* Image */}
          <Image
            src={IMAGES[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            fill
            className="object-cover transition-opacity duration-500"
            priority
          />

          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white p-2 ml-2 rounded-full transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/75 text-white p-2 mr-2 rounded-full transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/75 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {IMAGES.length}
          </div>

          {/* Play/Pause */}
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="absolute bottom-4 left-4 bg-black/75 hover:bg-black text-white px-3 py-1 rounded-full text-sm transition-all"
          >
            {autoPlay ? 'Pause' : 'Play'}
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 justify-center">
          {IMAGES.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex ? 'border-blue-500 scale-105' : 'border-gray-600'
              }`}
              aria-label={`Go to image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Dot Navigation */}
        <div className="mt-6 flex justify-center gap-2 flex-wrap">
          {IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-blue-500 w-8' : 'bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

