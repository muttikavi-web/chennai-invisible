'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const galleryItems = [
    {
      id: 1,
      title: 'Modern Living Room with Invisible Grills',
      category: 'Residential',
      image: '/assets/image-2.jpeg',
      location: 'Delhi',
      alt: 'Premium invisible window grills installed in modern living room - Falcon Grills Delhi. Child-safe, unobstructed view',
      description: 'Beautiful invisible grill installation in residential living room',
    },
    {
      id: 2,
      title: 'Balcony Safety Protection System',
      category: 'Residential',
      image: '/assets/image-3.jpeg',
      location: 'Mumbai',
      alt: 'Frameless invisible balcony grills for child safety - Professional installation by Falcon Grills Mumbai',
      description: 'Safe balcony protection with invisible grills',
    },
    {
      id: 3,
      title: 'Commercial Office Glass Installation',
      category: 'Commercial',
      image: '/assets/image-4.jpeg',
      location: 'Bangalore',
      alt: 'Commercial invisible grills for office windows - Professional grade installation Bangalore',
      description: 'Commercial invisible grill solution for office spaces',
    },
    {
      id: 4,
      title: 'Bedroom Safety Grills Installation',
      category: 'Residential',
      image: '/assets/image-5.jpeg',
      location: 'Hyderabad',
      alt: 'Invisible bedroom window grills for child and elderly safety - Falcon Grills Hyderabad',
      description: 'Secure yet elegant invisible grill for bedrooms',
    },
    {
      id: 5,
      title: 'Kitchen Window Invisible Grills',
      category: 'Residential',
      image: '/assets/image-6.jpeg',
      location: 'Pune',
      alt: 'Kitchen window invisible grills with maximum visibility - Premium installation Pune',
      description: 'Invisible grills perfect for kitchen windows',
    },
    {
      id: 6,
      title: 'Glass Door Safety Installation',
      category: 'Commercial',
      image: '/assets/image-7.jpeg',
      location: 'Gurugram',
      alt: 'Commercial glass door invisible grills - Professional safety solution Gurugram',
      description: 'Professional invisible grills for commercial glass doors',
    },
  ];

  const categories = ['All', 'Residential', 'Commercial'];
  const filteredItems =
    selectedCategory === 'All' ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="section-padding bg-gray-50" id="gallery">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            See our completed projects and installations showcasing premium invisible grill solutions across residential and commercial spaces
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                itemProp="url"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2" itemProp="name">
                  {item.title}
                </h3>
                <p className="text-sm font-medium opacity-90 mb-2">{item.category}</p>
                <p className="text-xs opacity-75 mb-4">Location: {item.location}</p>
                <p className="text-sm opacity-90 mb-4" itemProp="description">
                  {item.description}
                </p>
                <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-200">
                  View Project
                </button>
              </div>

              {/* Hidden Schema Metadata */}
              <meta itemProp="image" content={item.image} />
            </article>
          ))}
        </div>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No projects found in this category</p>
          </div>
        )}

        {/* Gallery Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-600 mb-2">{galleryItems.length}+</p>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600 mb-2">
              {galleryItems.filter((i) => i.category === 'Residential').length}+
            </p>
            <p className="text-gray-600">Residential Installations</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600 mb-2">
              {galleryItems.filter((i) => i.category === 'Commercial').length}+
            </p>
            <p className="text-gray-600">Commercial Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

