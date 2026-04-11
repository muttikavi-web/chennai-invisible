export default function StructuredData() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://falconinvisiblegrill.com/#website',
    url: 'https://falconinvisiblegrill.com',
    name: 'Falcon Invisible Grills',
    description: 'Premium invisible grill solutions for windows and doors with expert installation',
    publisher: {
      '@type': 'LocalBusiness',
      name: 'Falcon Invisible Grills',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://falconinvisiblegrill.com?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://falconinvisiblegrill.com/#organization',
    name: 'Falcon Invisible Grills',
    alternateName: ['Falcon Grills', 'Invisible Grills', 'Falcon Invisible Grills India'],
    description:
      'Premium invisible grill solutions for windows and doors with expert installation across India',
    url: 'https://falconinvisiblegrill.com',
    telephone: '+91-8008430800',
    email: 'info@falconinvisiblegrill.com',
    image: 'https://falconinvisiblegrill.com/og-image.jpg',
    logo: {
      '@type': 'ImageObject',
      url: 'https://falconinvisiblegrill.com/logo.png',
      width: 250,
      height: 60,
    },
    sameAs: [
      'https://www.facebook.com/falconinvisiblegrills',
      'https://www.instagram.com/falconinvisiblegrills',
      'https://www.youtube.com/@falconinvisiblegrills',
      'https://www.linkedin.com/company/falconinvisiblegrills',
      'https://www.twitter.com/falconinvisiblegrills',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Address',
      addressLocality: 'Chennai',
      postalCode: 'XXXXXX',
      addressCountry: 'IN',
      addressRegion: 'Tamil Nadu',
    },
    areaServed: [
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'City', name: 'Bangalore' },
      { '@type': 'City', name: 'Bengaluru' },
       { '@type': 'City', name: 'Konark' },
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'New Delhi' },
      { '@type': 'City', name: 'Gurugram' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Gurgaon' },
      { '@type': 'City', name: 'Pune' },
      { '@type': 'City', name: 'Kolkata' },
      { '@type': 'City', name: 'Jaipur' },
      { '@type': 'City', name: 'Ahmedabad' },
      { '@type': 'City', name: 'Surat' },
      { '@type': 'State', name: 'India' },
    ],
    priceRange: '₹₹₹',
    knowsAbout: [
      'Invisible Grills',
      'Invisible Grills Chennai',
      'Invisible Window Grills',
      'Balcony Invisible Grills',
      'Invisible Grill Price',
      'Window Safety',
      'Door Safety',
      'Frameless Grills',
      'Grill Installation',
      'Child Safety Grills',
      'Stainless Steel Grills',
      'Custom Invisible Grills',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: 500,
      bestRating: '5',
      worstRating: '1',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-8008430800',
        contactType: 'Sales',
        availableLanguage: ['en', 'hi'],
      },
      {
        '@type': 'ContactPoint',
        email: 'info@falconinvisiblegrill.com',
        contactType: 'Customer Support',
        availableLanguage: ['en', 'hi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-8008430800',
        contactType: 'Installation & Service',
        availableLanguage: ['en', 'hi'],
      },
    ],
  };

  const productsSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://falconinvisiblegrill.com/#products',
    name: 'Invisible Grills',
    description: 'Premium invisible grill solutions for windows and doors',
    image: 'https://falconinvisiblegrill.com/assets/image-1.jpeg',
    brand: {
      '@type': 'Brand',
      name: 'Falcon',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: 500,
      bestRating: '5',
      worstRating: '1',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Invisible Window Grills',
        description: 'Premium invisible grills for windows - child safe, unobstructed view, durable stainless steel',
        priceCurrency: 'INR',
        price: '0',
        availability: 'https://schema.org/InStock',
        url: 'https://falconinvisiblegrill.com#services',
        areaServed: [
          { '@type': 'City', name: 'Delhi' },
          { '@type': 'City', name: 'Mumbai' },
          { '@type': 'City', name: 'Bangalore' },
          { '@type': 'City', name: 'Hyderabad' },
        ],
      },
      {
        '@type': 'Offer',
        name: 'Invisible Door Grills',
        description: 'Durable invisible grills for doors and balconies - premium protection',
        priceCurrency: 'INR',
        price: '0',
        availability: 'https://schema.org/InStock',
        url: 'https://falconinvisiblegrill.com#services',
        areaServed: [
          { '@type': 'City', name: 'Delhi' },
          { '@type': 'City', name: 'Mumbai' },
          { '@type': 'City', name: 'Bangalore' },
          { '@type': 'City', name: 'Hyderabad' },
        ],
      },
      {
        '@type': 'Offer',
        name: 'Frameless Grills',
        description: 'Modern frameless grill solutions - contemporary design meets safety',
        priceCurrency: 'INR',
        price: '0',
        availability: 'https://schema.org/InStock',
        url: 'https://falconinvisiblegrill.com#services',
        areaServed: [
          { '@type': 'City', name: 'Delhi' },
          { '@type': 'City', name: 'Mumbai' },
          { '@type': 'City', name: 'Bangalore' },
          { '@type': 'City', name: 'Hyderabad' },
        ],
      },
    ],
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://falconinvisiblegrill.com/#services',
    name: 'Invisible Grill Installation & Services',
    description: 'Professional invisible grill installation and maintenance services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Falcon Invisible Grills',
      url: 'https://falconinvisiblegrill.com',
    },
    hasOfferingDetails: [
      {
        '@type': 'OfferingDetails',
        offers: {
          '@type': 'Offer',
          name: 'Invisible Window Grill Installation',
          description: 'Professional installation of invisible window grills',
          category: 'Installation',
        },
        eligibleRegion: 'IN',
      },
      {
        '@type': 'OfferingDetails',
        offers: {
          '@type': 'Offer',
          name: 'Invisible Door Grill Installation',
          description: 'Expert installation of invisible door and balcony grills',
          category: 'Installation',
        },
        eligibleRegion: 'IN',
      },
      {
        '@type': 'OfferingDetails',
        offers: {
          '@type': 'Offer',
          name: 'Grill Repair & Maintenance',
          description: 'Grill repair, cleaning, and maintenance services',
          category: 'Maintenance',
        },
        eligibleRegion: 'IN',
      },
      {
        '@type': 'OfferingDetails',
        offers: {
          '@type': 'Offer',
          name: 'Custom Grill Design',
          description: 'Customized invisible grill solutions for your home',
          category: 'Design',
        },
        eligibleRegion: 'IN',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://falconinvisiblegrill.com/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are invisible grills?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Invisible grills are modern window and door solutions made from high-strength steel that are virtually transparent. They provide safety without obstructing your view, perfect for child and elderly safety.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are invisible grills safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, invisible grills are highly safe. They are made from durable stainless steel and can prevent falls from windows and doors. They also protect against intrusion while maintaining your view.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the cost of invisible grills?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The cost of invisible grills depends on window size, number of grills, and optional features. We offer free consultation and customized quotes based on your requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do invisible grills block the view?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, invisible grills are designed to be transparent and virtually unnoticeable. They maintain your clear view while providing safety and protection.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long do invisible grills last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'High-quality invisible grills made from stainless steel can last 15-20 years or more with proper maintenance. Falcon grills come with a comprehensive warranty.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are invisible grills good for child safety?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, invisible grills are specifically designed for child safety. They prevent children from falling out of windows while maintaining an unobstructed view.',
        },
      },
      {
        '@type': 'Question',
        name: 'What cities do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve major cities including Delhi, Mumbai, Bangalore, Hyderabad, Pune, Chennai, Kolkata, Gurugram, and many other cities across India with professional installation services.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are invisible grills installed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our professionals install invisible grills securely into the window or door frame. The installation is clean, non-invasive, and typically completed within a few hours.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://falconinvisiblegrill.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://falconinvisiblegrill.com#services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Gallery',
        item: 'https://falconinvisiblegrill.com#gallery',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: 'https://falconinvisiblegrill.com#contact',
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': 'https://falconinvisiblegrill.com/#howto',
    name: 'How to Install Invisible Grills',
    description: 'Professional step-by-step guide to invisible grill installation by Falcon',
    image: 'https://falconinvisiblegrill.com/assets/image-1.jpeg',
    prepTime: 'PT0H30M',
    totalTime: 'PT4H',
    tool: ['Drill', 'Measuring Tape', 'Level', 'Wrench', 'Installation Kit'],
    supply: ['Invisible Grill Frame', 'Steel Cables', 'Mounting Hardware', 'Connector Boxes'],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Window Measurement',
        text: 'Measure the window frame dimensions accurately. Use a measuring tape to get height and width at multiple points.',
        image: 'https://falconinvisiblegrill.com/assets/image-2.jpeg',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Frame Preparation',
        text: 'Clean the window frame and ensure it is level. Mark drilling points using the measurement guide.',
        image: 'https://falconinvisiblegrill.com/assets/image-3.jpeg',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Frame Installation',
        text: 'Install the grill frame into the window opening using the provided mounting hardware. Ensure it is securely fastened.',
        image: 'https://falconinvisiblegrill.com/assets/image-4.jpeg',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Cable Configuration',
        text: 'Thread the steel cables through the frame and connect them to the connector boxes and handle mechanism.',
        image: 'https://falconinvisiblegrill.com/assets/image-5.jpeg',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Testing & Adjustment',
        text: 'Test the grill functionality, adjust cable tension if needed, and verify smooth operation.',
        image: 'https://falconinvisiblegrill.com/assets/image-6.jpeg',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Final Inspection',
        text: 'Perform final safety checks, ensure all connections are secure, and clean the installed grill.',
        image: 'https://falconinvisiblegrill.com/assets/image-7.jpeg',
      },
    ],
  };

  const videoObjectSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': 'https://falconinvisiblegrill.com/#video',
    name: 'Falcon Invisible Grills Installation Demo',
    description: 'Professional invisible grill installation video showcase. See how Falcon installs premium invisible grills in homes and offices.',
    thumbnailUrl: ['https://falconinvisiblegrill.com/assets/image-1.jpeg'],
    uploadDate: new Date().toISOString(),
    duration: 'PT5M30S',
    contentUrl: 'https://falconinvisiblegrill.com/video/installation-demonstration.mp4',
    embedUrl: 'https://falconinvisiblegrill.com/video/installation-demonstration.mp4',
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/WatchAction',
      userInteractionCount: 5000,
    },
    author: {
      '@type': 'LocalBusiness',
      name: 'Falcon Invisible Grills',
    },
  };

  const videosCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://falconinvisiblegrill.com/#videos',
    name: 'Falcon Invisible Grills - Video Gallery',
    description: 'Watch professional videos of invisible grill installations, features, benefits and customer testimonials',
    hasPart: [
      {
        '@type': 'VideoObject',
        '@id': 'https://falconinvisiblegrill.com/#video-1',
        name: 'Invisible Window Grills Installation - Part 1',
        description: 'Professional installation of invisible window grills showing preparation, measurement and frame installation',
        thumbnailUrl: ['https://falconinvisiblegrill.com/assets/image-2.jpeg'],
        uploadDate: new Date().toISOString(),
        duration: 'PT4M15S',
        contentUrl: 'https://falconinvisiblegrill.com/assets/WhatsApp Video 2026-04-09 at 2.41.37 PM.mp4',
        embedUrl: 'https://falconinvisiblegrill.com/assets/WhatsApp Video 2026-04-09 at 2.41.37 PM.mp4',
        interactionStatistic: {
          '@type': 'InteractionCounter',
          interactionType: 'https://schema.org/WatchAction',
          userInteractionCount: 2500,
        },
        author: {
          '@type': 'LocalBusiness',
          name: 'Falcon Invisible Grills',
        },
      },
      {
        '@type': 'VideoObject',
        '@id': 'https://falconinvisiblegrill.com/#video-2',
        name: 'Invisible Door Grills Installation - Part 2',
        description: 'Complete installation guide for invisible door and balcony grills with cable threading and connection',
        thumbnailUrl: ['https://falconinvisiblegrill.com/assets/image-3.jpeg'],
        uploadDate: new Date().toISOString(),
        duration: 'PT4M22S',
        contentUrl: 'https://falconinvisiblegrill.com/assets/WhatsApp Video 2026-04-09 at 2.41.42 PM.mp4',
        embedUrl: 'https://falconinvisiblegrill.com/assets/WhatsApp Video 2026-04-09 at 2.41.42 PM.mp4',
        interactionStatistic: {
          '@type': 'InteractionCounter',
          interactionType: 'https://schema.org/WatchAction',
          userInteractionCount: 2300,
        },
        author: {
          '@type': 'LocalBusiness',
          name: 'Falcon Invisible Grills',
        },
      },
      {
        '@type': 'VideoObject',
        '@id': 'https://falconinvisiblegrill.com/#video-3',
        name: 'Frameless Grills Features & Benefits - Part 3',
        description: 'Exclusive walkthrough of frameless grill features, child safety mechanisms and aesthetic benefits',
        thumbnailUrl: ['https://falconinvisiblegrill.com/assets/image-4.jpeg'],
        uploadDate: new Date().toISOString(),
        duration: 'PT3M50S',
        contentUrl: 'https://falconinvisiblegrill.com/assets/WhatsApp Video 2026-04-09 at 2.41.48 PM.mp4',
        embedUrl: 'https://falconinvisiblegrill.com/assets/WhatsApp Video 2026-04-09 at 2.41.48 PM.mp4',
        interactionStatistic: {
          '@type': 'InteractionCounter',
          interactionType: 'https://schema.org/WatchAction',
          userInteractionCount: 2100,
        },
        author: {
          '@type': 'LocalBusiness',
          name: 'Falcon Invisible Grills',
        },
      },
      {
        '@type': 'VideoObject',
        '@id': 'https://falconinvisiblegrill.com/#video-4',
        name: 'Customer Testimonials & Real Installations - Part 4',
        description: 'Real customer testimonials, installation results and before-after showcasing invisible grills in homes',
        thumbnailUrl: ['https://falconinvisiblegrill.com/assets/image-5.jpeg'],
        uploadDate: new Date().toISOString(),
        duration: 'PT3M45S',
        contentUrl: 'https://falconinvisiblegrill.com/assets/WhatsApp Video 2026-04-09 at 2.41.49 PM.mp4',
        embedUrl: 'https://falconinvisiblegrill.com/assets/WhatsApp Video 2026-04-09 at 2.41.49 PM.mp4',
        interactionStatistic: {
          '@type': 'InteractionCounter',
          interactionType: 'https://schema.org/WatchAction',
          userInteractionCount: 2800,
        },
        author: {
          '@type': 'LocalBusiness',
          name: 'Falcon Invisible Grills',
        },
      },
    ],
  };

  const contactPointSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://falconinvisiblegrill.com/#contact',
    name: 'Falcon Invisible Grills - Customer Support',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        telephone: '+91-8008430800',
        email: 'sales@falconinvisiblegrill.com',
        areaServed: ['IN'],
        availableLanguage: ['en', 'hi'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Support',
        telephone: '+91-8008430800',
        email: 'support@falconinvisiblegrill.com',
        areaServed: ['IN'],
        availableLanguage: ['en', 'hi'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Installation Request',
        telephone: '+91-8008430800',
        url: 'https://falconinvisiblegrill.com#contact',
        areaServed: ['IN'],
      },
    ],
  };

  const citySpecificBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://falconinvisiblegrill.com/#locations',
    name: 'Falcon Invisible Grills India',
    description: 'Premium invisible grill installation services across major Indian cities',
    hasMultipleLocations: true,
    locations: [
      {
        '@type': 'LocalBusiness',
        name: 'Falcon Invisible Grills - Chennai',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Chennai',
          addressCountry: 'IN',
        },
        areaServed: ['Chennai', 'Tambaram', 'Kanchipuram'],
      },
      {
        '@type': 'LocalBusiness',
        name: 'Falcon Invisible Grills - Bangalore',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bangalore',
          addressCountry: 'IN',
        },
        areaServed: ['Bangalore', 'Bengaluru'],
      },
      {
        '@type': 'LocalBusiness',
        name: 'Falcon Invisible Grills - Hyderabad',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Hyderabad',
          addressCountry: 'IN',
        },
        areaServed: ['Hyderabad', 'Secunderabad'],
      },
      {
        '@type': 'LocalBusiness',
        name: 'Falcon Invisible Grills - Mumbai',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mumbai',
          addressCountry: 'IN',
        },
        areaServed: ['Mumbai', 'Navi Mumbai', 'Thane'],
      },
      {
        '@type': 'LocalBusiness',
        name: 'Falcon Invisible Grills - Delhi',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Delhi',
          addressCountry: 'IN',
        },
        areaServed: ['Delhi', 'New Delhi', 'Gurugram', 'Noida'],
      },
      {
        '@type': 'LocalBusiness',
        name: 'Falcon Invisible Grills - Pune',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Pune',
          addressCountry: 'IN',
        },
        areaServed: ['Pune', 'Pimpri-Chinchwad'],
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://falconinvisiblegrill.com/#article',
    headline: 'Complete Guide to Invisible Grills - Installation, Benefits & Safety',
    description: 'Comprehensive guide to invisible grills including types, benefits, installation process, safety features, and maintenance tips',
    image: 'https://falconinvisiblegrill.com/assets/image-1.jpeg',
    author: {
      '@type': 'Organization',
      name: 'Falcon Invisible Grills',
      url: 'https://falconinvisiblegrill.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Falcon Invisible Grills',
      logo: {
        '@type': 'ImageObject',
        url: 'https://falconinvisiblegrill.com/logo.png',
      },
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    articleSection: 'Product Guide',
    keywords:
      'invisible grills, window grills, door grills, child safety, frameless grills, grill installation',
  };

  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    '@id': 'https://falconinvisiblegrill.com/#reviews',
    ratingValue: '4.8',
    reviewCount: 500,
    bestRating: '5',
    worstRating: '1',
    ratingExplanation: 'Average rating based on 500+ verified customer reviews',
  };

  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': 'https://falconinvisiblegrill.com/#gallery',
    name: 'Falcon Invisible Grills Photo Gallery',
    description: 'Premium photo collection of invisible grills installations in homes, offices and commercial spaces',
    associatedMedia: [
      {
        '@type': 'ImageObject',
        url: 'https://falconinvisiblegrill.com/assets/image-1.jpeg',
        name: 'Invisible Window Grills Installation',
        description: 'Professional installation of invisible window grills',
      },
      {
        '@type': 'ImageObject',
        url: 'https://falconinvisiblegrill.com/assets/image-2.jpeg',
        name: 'Frameless Door Grills',
        description: 'Modern frameless grill design for doors',
      },
      {
        '@type': 'ImageObject',
        url: 'https://falconinvisiblegrill.com/assets/image-3.jpeg',
        name: 'Balcony Invisible Grills',
        description: 'Premium invisible grills for balcony safety',
      },
      {
        '@type': 'ImageObject',
        url: 'https://falconinvisiblegrill.com/assets/image-4.jpeg',
        name: 'Child Safe Grills',
        description: 'Transparent grills for child safety',
      },
    ],
  };

  const priceSpecificationSchema = {
    '@context': 'https://schema.org',
    '@type': 'AggregateOffer',
    '@id': 'https://falconinvisiblegrill.com/#pricing',
    priceCurrency: 'INR',
    price: 'Contact for Quote',
    pricingCategory: 'Service',
    availability: 'https://schema.org/InStock',
    offeredBy: {
      '@type': 'LocalBusiness',
      name: 'Falcon Invisible Grills',
    },
    description: 'Custom pricing for invisible grills based on window/door size and specifications',
  };

  const testimonialSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': 'https://falconinvisiblegrill.com/#testimonials',
    itemReviewed: {
      '@type': 'Product',
      name: 'Falcon Invisible Grills',
      image: 'https://falconinvisiblegrill.com/assets/image-1.jpeg',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: 500,
        bestRating: '5',
        worstRating: '1',
      },
    },
    reviewRating: [
      {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      {
        '@type': 'Rating',
        ratingValue: '4.8',
        bestRating: '5',
        worstRating: '1',
      },
      {
        '@type': 'Rating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
      },
    ],
    author: [
      {
        '@type': 'Person',
        name: 'Verified Customer - Delhi',
        jobTitle: 'Business Owner',
      },
      {
        '@type': 'Person',
        name: 'Verified Customer - Mumbai',
        jobTitle: 'Home Owner',
      },
      {
        '@type': 'Person',
        name: 'Verified Customer - Bangalore',
        jobTitle: 'Parent',
      },
    ],
    reviewBody: 'High quality invisible grills with professional installation service. Highly recommended.',
    datePublished: new Date().toISOString(),
  };

  const guaranteeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WarrantyPromise',
    '@id': 'https://falconinvisiblegrill.com/#warranty',
    name: 'Falcon Invisible Grills Warranty & Guarantee',
    description: 'Comprehensive warranty covering manufacturing defects and professional installation',
    warrantyScope: 'https://schema.org/WarrantyScope_Parts_And_Labor',
    durationOfWarranty: {
      '@type': 'QuantitativeValue',
      value: 5,
      unitCode: 'ANN',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySpecificBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videosCollectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSpecificationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guaranteeSchema) }}
      />
    </>
  );
}
