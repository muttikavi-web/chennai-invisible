export default function StructuredData() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://falcongrillschennai.com/#website',
    url: 'https://falcongrillschennai.com',
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
        urlTemplate: 'https://falcongrillschennai.com?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://falcongrillschennai.com/#organization',
    name: 'Falcon Invisible Grills',
    alternateName: ['Falcon Grills', 'Invisible Grills', 'Falcon Invisible Grills India'],
    description:
      'Premium invisible grill solutions for windows and doors with expert installation across India',
    url: 'https://falcongrillschennai.com',
    telephone: '+91-XXXXXXXXXX',
    email: 'info@falcongrillschennai.com',
    image: 'https://falcongrillschennai.com/og-image.jpg',
    logo: {
      '@type': 'ImageObject',
      url: 'https://falcongrillschennai.com/logo.png',
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
      'Window Safety',
      'Door Safety',
      'Frameless Grills',
      'Grill Installation',
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
        telephone: '+91-XXXXXXXXXX',
        contactType: 'Sales',
        availableLanguage: ['en', 'hi'],
      },
      {
        '@type': 'ContactPoint',
        email: 'info@falcongrillschennai.com',
        contactType: 'Customer Support',
        availableLanguage: ['en', 'hi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-XXXXXXXXXX',
        contactType: 'Installation & Service',
        availableLanguage: ['en', 'hi'],
      },
    ],
  };

  const productsSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://falcongrillschennai.com/#products',
    name: 'Invisible Grills',
    description: 'Premium invisible grill solutions for windows and doors',
    image: 'https://falcongrillschennai.com/assets/image-1.jpeg',
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
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'INR',
        },
        availability: 'https://schema.org/InStock',
        url: 'https://falcongrillschennai.com#services',
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
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'INR',
        },
        availability: 'https://schema.org/InStock',
        url: 'https://falcongrillschennai.com#services',
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
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'INR',
        },
        availability: 'https://schema.org/InStock',
        url: 'https://falcongrillschennai.com#services',
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
    '@id': 'https://falcongrillschennai.com/#services',
    name: 'Invisible Grill Installation & Services',
    description: 'Professional invisible grill installation and maintenance services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Falcon Invisible Grills',
      url: 'https://falcongrillschennai.com',
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
    '@id': 'https://falcongrillschennai.com/#faq',
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
        item: 'https://falcongrillschennai.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://falcongrillschennai.com#services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Gallery',
        item: 'https://falcongrillschennai.com#gallery',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: 'https://falcongrillschennai.com#contact',
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': 'https://falcongrillschennai.com/#howto',
    name: 'How to Install Invisible Grills',
    description: 'Professional step-by-step guide to invisible grill installation by Falcon',
    image: 'https://falcongrillschennai.com/assets/image-1.jpeg',
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
        image: 'https://falcongrillschennai.com/assets/image-2.jpeg',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Frame Preparation',
        text: 'Clean the window frame and ensure it is level. Mark drilling points using the measurement guide.',
        image: 'https://falcongrillschennai.com/assets/image-3.jpeg',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Frame Installation',
        text: 'Install the grill frame into the window opening using the provided mounting hardware. Ensure it is securely fastened.',
        image: 'https://falcongrillschennai.com/assets/image-4.jpeg',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Cable Configuration',
        text: 'Thread the steel cables through the frame and connect them to the connector boxes and handle mechanism.',
        image: 'https://falcongrillschennai.com/assets/image-5.jpeg',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Testing & Adjustment',
        text: 'Test the grill functionality, adjust cable tension if needed, and verify smooth operation.',
        image: 'https://falcongrillschennai.com/assets/image-6.jpeg',
      },
      {
        '@type': 'HowToStep',
        position: 6,
        name: 'Final Inspection',
        text: 'Perform final safety checks, ensure all connections are secure, and clean the installed grill.',
        image: 'https://falcongrillschennai.com/assets/image-7.jpeg',
      },
    ],
  };

  const videoObjectSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': 'https://falcongrillschennai.com/#video',
    name: 'Falcon Invisible Grills Installation Demo',
    description: 'Professional invisible grill installation video showcase. See how Falcon installs premium invisible grills in homes and offices.',
    thumbnailUrl: ['https://falcongrillschennai.com/assets/image-1.jpeg'],
    uploadDate: new Date().toISOString(),
    duration: 'PT5M30S',
    contentUrl: 'https://falcongrillschennai.com/video/installation-demonstration.mp4',
    embedUrl: 'https://falcongrillschennai.com/video/installation-demonstration.mp4',
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

  const contactPointSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://falcongrillschennai.com/#contact',
    name: 'Falcon Invisible Grills - Customer Support',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        telephone: '+91-XXXXXXXXXX',
        email: 'sales@falcongrillschennai.com',
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
        telephone: '+91-XXXXXXXXXX',
        email: 'support@falcongrillschennai.com',
        areaServed: ['IN'],
        availableLanguage: ['en', 'hi'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Installation Request',
        telephone: '+91-XXXXXXXXXX',
        url: 'https://falcongrillschennai.com#contact',
        areaServed: ['IN'],
      },
    ],
  };

  const citySpecificBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://falcongrillschennai.com/#locations',
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
    '@id': 'https://falcongrillschennai.com/#article',
    headline: 'Complete Guide to Invisible Grills - Installation, Benefits & Safety',
    description: 'Comprehensive guide to invisible grills including types, benefits, installation process, safety features, and maintenance tips',
    image: 'https://falcongrillschennai.com/assets/image-1.jpeg',
    author: {
      '@type': 'Organization',
      name: 'Falcon Invisible Grills',
      url: 'https://falcongrillschennai.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Falcon Invisible Grills',
      logo: {
        '@type': 'ImageObject',
        url: 'https://falcongrillschennai.com/logo.png',
      },
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    articleSection: 'Product Guide',
    keywords:
      'invisible grills, window grills, door grills, child safety, frameless grills, grill installation',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
