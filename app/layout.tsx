import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
// import StructuredData from '@/components/StructuredData';
import './globals.css';
import StructuredData from './components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://falconinvisiblegrill.com'),
  title: {
    default: 'Invisible Grills | Premium Window & Door Grills Solution | Falcon Grills',
    template: '%s | Falcon Invisible Grills',
  },
  description:
    'Falcon Invisible Grills - #1 invisible grill provider in Delhi, Mumbai, Bangalore, Hyderabad. Premium invisible window grills, door grills, frameless grills with professional installation. Safe, durable, elegant grill solutions for your home. Shop now!',
  keywords: [
    // Core keywords
    'invisible grills',
    'invisible grill',
    'grills',
    'grill',
    'invisible',
    'invisible near me',
    'invisible grills near me',
    'grills near me',
    'grill installation near me',
    'invisible grill installation near me',
    'invisible grill company',
    'invisible grill supplier',
    'invisible grill dealer',
    'invisible grill manufacturer',
    'invisible grill service',
    'invisible grill solutions',
    'invisible grill experts',
    'invisible grill professionals',
    'invisible grill price',
    'invisible grills price',
    'invisible grills cost',
    'invisible grills for sale',
    'invisible grills online',
    'invisible grills chennai',
    'invisible grills in chennai',
    'chennai invisible grills',
    'invisible grills delhi',
    'invisible grills in delhi',
    'delhi invisible grills', 
    'grills invisible best',
    'best invisible grills',
    'premium invisible grills',
    'high quality invisible grills',
    'durable invisible grills',
    'modern invisible grills',
    'elegant invisible grills',
    'invisible grills for windows',
    'invisible grills for doors',
    'invisible grills for balconies',
    'invisible grills for home',
    'invisible grills for office',
    'invisible grills for commercial spaces',
    'invisible grills for restaurants',
    'invisible grills for schools',
    'invisible grills for hospitals',
    'invisible grills for apartments',
    'invisible grills for hotels',
    'invisible grills for balconies',
    'invisible grills for terraces',
    'invisible grills for staircases',
    'invisible grills for balconies',
    'invisible grills for windows and doors',
    'invisible grills for safety',
    'invisible grills for child safety',
    'invisible grills for pet safety',
    'invisible grills for fall prevention',
    'invisible grills for balcony safety',
    'invisible grills for home security',
    'invisible grills for office security',
    'invisible grills for commercial security',
    'invisible grills for schools',
    'invisible grills for hospitals',
    'invisible grills for apartments',
    'invisible grills for hotels',
    
    // Window & Door focused
    'invisible window grills',
    'invisible door grills',
    'balcony invisible grills',
    'invisible balcony grills',
    'window grills',
    'door grills',
    'window grill',
    'door grill',
    'frameless window grills',
    'frameless grills',
    'frameless door grills',
    'invisible window grill installation',
    'invisible door grill installation',
    
    // Safety & Features
    'safety grills',
    'safety grills for windows',
    'child safety grills',
    'window safety grills',
    'door safety grills',
    'invisible safety net',
    'invisible mosquito net',
    'mosquito net grills',
    
    // Quality & Material
    'stainless steel invisible grills',
    'premium grills',
    'premium invisible grills',
    'best invisible grills',
    'high quality grills',
    'durable grills',
    'modern window grills',
    'contemporary grills',
    'elegant grills',
    
    // Installation & Services
    'grill installation',
    'invisible grill installation',
    'professional grill installation',
    'grill installation near me',
    'invisible grill repair',
    'grill maintenance',
    'custom grills',
    'custom invisible grills',
    
    // Location - Major Cities (with all variations)
    // Delhi NCR
    'invisible grills delhi',
    'invisible grills in delhi',
    'delhi invisible grills',
    'delhi grills',
    'window grills delhi',
    'door grills delhi',
    'invisible grills new delhi',
    'invisible grills gurugram',
    'invisible grills gurgaon',
    'invisible grills noida',
    'invisible grills faridabad',
    'invisible grills greater noida',
    
    // Mumbai
    'invisible grills mumbai',
    'invisible grills in mumbai',
    'mumbai invisible grills',
    'mumbai grills',
    'window grills mumbai',
    'door grills mumbai',
    'invisible grills pune',
    'invisible grills nagpur',
    
    // Bangalore
    'invisible grills bangalore',
    'invisible grills in bangalore',
    'bangalore invisible grills',
    'bangalore grills',
    'window grills bangalore',
    'door grills bangalore',
    'invisible grills bengaluru',
    'invisible grills whitefield',
    'invisible grills koramangala',
    
    // Hyderabad
    'invisible grills hyderabad',
    'invisible grills in hyderabad',
    'hyderabad invisible grills',
    'hyderabad grills',
    'window grills hyderabad',
    'door grills hyderabad',
    'invisible grills telangana',
    
    // Other Major Cities
    'invisible grills pune',
    'invisible grills chennai',
    'invisible grills kolkata',
    'invisible grills gurugram',
    'invisible grills gurgaon',
    'invisible grills jaipur',
    'invisible grills ahmedabad',
    'invisible grills surat',
    'invisible grills lucknow',
    'invisible grills indore',
    
    // Type/Style specific
    'frameless grills for windows',
    'unobstructed view grills',
    'transparent grills',
    'minimalist window grills',
    'sleek invisible grills',
    'modern safety grills',
    'designer grills',
    
    // Problem-solution keywords
    'grills that dont block view',
    'invisible window protection',
    'fall prevention grills',
    'balcony safety grills',
    'child proof window grills',
    'pet safe grills',
    'transparent window protection',
    
    // Buying keywords
    'buy invisible grills',
    'invisible grills online',
    'invisible grill price',
    'invisible grills price',
    'invisible grills cost',
    'invisible grills for sale',
    'affordable invisible grills',
    'invisible grills installation cost',
    'invisible grills dealer',
    'invisible grills supplier',
    'invisible grills manufacturer',
    
    // Comparison keywords
    'invisible vs traditional grills',
    'invisible grills vs bars',
    'best grills for windows',
    'alternatives to window bars',
    
    // Long tail variations
    'how to install invisible grills',
    'invisible grills maintenance tips',
    'best invisible grill brand',
    'invisible grills review',
    'invisible grills pros and cons',
    'invisible grills durability',
    'invisible grills warranty',
  ],
  authors: [{ name: 'Falcon Invisible Grills' }],
  creator: 'Falcon Invisible Grills',
  publisher: 'Falcon Invisible Grills',
  category: 'Home Improvement',
  verification: {
    google: 'google-site-verification-code', // Add your Google verification code
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://falconinvisiblegrill.com',
    title: 'Invisible Grills | Premium Window & Door Grills | #1 Grill Solution',
    description:
      'Falcon Invisible Grills offers premium invisible window grills, door grills & frameless grills in Delhi, Mumbai, Bangalore, Hyderabad. Safe, elegant & durable solutions. Professional installation available nationwide.',
    siteName: 'Falcon Invisible Grills',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Falcon Premium Invisible Grills - Safe & Elegant Window Protection',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invisible Grills | Premium Grill Solutions | Falcon Grills',
    description:
      'Premium invisible window & door grills with professional installation. Safe, elegant, and durable. Available in major Indian cities.',
    images: ['/twitter-image.jpg'],
    creator: '@falconinvisiblegrills',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://falconinvisiblegrill.com',
    languages: {
      'en-US': 'https://falconinvisiblegrill.com',
    },
  },
  referrer: 'strict-origin-when-cross-origin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1f2937" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google-site-verification" content="google-verification-code" />
        <meta name="msvalidate.01" content="bing-verification-code" />
        <meta name="yandex-verification" content="yandex-verification-code" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googleadservices.com" />
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
