'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  duration: string;
  views: string;
}

const VIDEOS: Video[] = [
  {
    id: 1,
    title: 'Invisible Window Grills Installation - Part 1',
    description: 'Professional installation of invisible window grills showing preparation, measurement and frame installation',
    videoUrl: '/assets/invisible-window-grills-installation-part-1.mp4',
    thumbnail: '/assets/image-2.jpeg',
    duration: '4:15',
    views: '2.5K',
  },
  {
    id: 2,
    title: 'Invisible Door Grills Installation - Part 2',
    description: 'Complete installation guide for invisible door and balcony grills with cable threading and connection',
    videoUrl: '/assets/invisible-door-grills-installation-part-2.mp4',
    thumbnail: '/assets/image-3.jpeg',
    duration: '4:22',
    views: '2.3K',
  },
  {
    id: 3,
    title: 'Frameless Grills Features & Benefits - Part 3',
    description: 'Exclusive walkthrough of frameless grill features, child safety mechanisms and aesthetic benefits',
    videoUrl: '/assets/frameless-grills-features-benefits-part-3.mp4',
    thumbnail: '/assets/image-4.jpeg',
    duration: '3:50',
    views: '2.1K',
  },
  {
    id: 4,
    title: 'Customer Testimonials & Real Installations - Part 4',
    description: 'Real customer testimonials, installation results and before-after showcasing invisible grills in homes',
    videoUrl: '/assets/customer-testimonials-installations-part-4.mp4',
    thumbnail: '/assets/image-5.jpeg',
    duration: '3:45',
    views: '2.8K',
  },
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8" id="videos">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Watch Our Installation Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See professional invisible grill installations in action. Learn about our process, features, and hear from satisfied customers.
          </p>
        </div>

        {/* Main Video Player */}
        {selectedVideo && (
          <div className="mb-12">
            <div className="relative bg-black rounded-lg overflow-hidden aspect-video mb-6 group">
              <video
                key={selectedVideo.id}
                src={selectedVideo.videoUrl}
                controls
                autoPlay={isPlaying}
                className="w-full h-full object-cover"
                poster={selectedVideo.thumbnail}
              >
                Your browser does not support the video tag.
              </video>
              
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors cursor-pointer"
                  onClick={() => setIsPlaying(true)}>
                  <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 transition-all transform group-hover:scale-110">
                    <Play size={32} fill="currentColor" />
                  </button>
                </div>
              )}
            </div>

            {/* Video Info */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-3">{selectedVideo.title}</h3>
              <p className="text-gray-300 text-lg mb-4">{selectedVideo.description}</p>
              <div className="flex gap-6 text-gray-400">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 4a1 1 0 112 0v4a1 1 0 11-2 0V4z" />
                  </svg>
                  {selectedVideo.duration}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  {selectedVideo.views} views
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEOS.map((video) => (
            <button
              key={video.id}
              onClick={() => {
                setSelectedVideo(video);
                setIsPlaying(true);
              }}
              className={`group cursor-pointer transition-all duration-300 rounded-lg overflow-hidden ${
                selectedVideo?.id === video.id
                  ? 'ring-2 ring-blue-500 md:col-span-1'
                  : 'hover:scale-105'
              }`}
            >
              {/* Video Thumbnail */}
              <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <div className="bg-red-600 group-hover:bg-red-700 text-white rounded-full p-3 transition-all">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs font-semibold px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Video Title */}
              <div className="bg-gray-800/50 p-4 border-t border-gray-700">
                <h4 className="text-white font-semibold text-sm line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {video.title}
                </h4>
                <p className="text-gray-400 text-xs mt-2">{video.views} views</p>
              </div>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-lg mb-6">
            Want to see more? Subscribe to our YouTube channel for exclusive content and updates.
          </p>
          <a
            href="https://www.youtube.com/@falconinvisiblegrills"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Visit Our YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
}

