import './globals.css';
import Footer from '@/components/Footer';
import ReservationParallaxSection from '@/components/sections/ReservationSection';
import Loader from '@/components/Loader';

export const metadata = {
  // Basic SEO
  title: {
    default: 'Party Deal Catering - Nigeria\'s Premier Catering Company | Lagos & Abuja',
    template: '%s | Party Deal Catering'
  },
  description: 'Nigeria\'s #1 premium catering company serving Lagos, Abuja & nationwide. Expert event catering, corporate meals, wedding catering, birthday parties & special occasions. Book now for unforgettable culinary experiences.',
  
  // Keywords for Nigerian market
  keywords: [
    'catering company Nigeria',
    'Lagos catering services',
    'Abuja catering',
    'Nigerian food catering',
    'event catering Lagos',
    'wedding catering Nigeria',
    'corporate catering Lagos',
    'party catering services',
    'birthday party catering',
    'premium catering Nigeria',
    'professional catering Lagos',
    'event planning Nigeria',
    'food delivery Lagos',
    'catering near me',
    'Nigerian cuisine catering',
    'buffet catering Lagos',
    'small chops catering',
    'jollof rice catering',
    'pepper soup catering',
    'suya catering Lagos'
  ],
  
  // Author and company info
  authors: [{ name: 'Party Deal Catering Team' }],
  creator: 'Party Deal Catering',
  publisher: 'Party Deal Catering',
  
  // Geographic targeting
  applicationName: 'Party Deal Catering',
  category: 'Food & Catering Services',
  classification: 'Business',
  
  // Social Media - Open Graph
  openGraph: {
    title: 'Party Deal Catering - Nigeria\'s Premier Catering Company',
    description: 'Transform your events with Nigeria\'s most trusted catering company. Premium food, exceptional service, unforgettable experiences across Lagos, Abuja & nationwide.',
    url: 'https://partydeal-live.vercel.app/',
    siteName: 'Party Deal Catering',
    type: 'website',
    locale: 'en_NG',
    images: [
      {
        url: '/assets/logo-icon.png',
        width: 1200,
        height: 630,
        alt: 'Party Deal Catering - Premium Nigerian catering services with beautifully presented dishes',
        type: 'image/jpeg'
      },
      {
        url: '/assets/logo-icon.png',
        width: 1080,
        height: 1080,
        alt: 'Party Deal Catering - Elegant food presentation and professional service',
        type: 'image/jpeg'
      },
      {
        url: 'https://partydeal-live.vercel.app/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Party Deal Catering - Premium Nigerian Catering Services',
        type: 'image/jpeg'
      }
    ],
    videos: [
      {
        url: '/assets/catering-showcase.mp4',
        width: 1280,  
        height: 720,
        type: 'video/mp4'
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Party Deal Catering - Nigeria\'s Premier Catering Company',
    description: 'Transform your events with Nigeria\'s most trusted catering company. Premium food, exceptional service, unforgettable experiences.',
    site: '@partydealcatering',
    creator: '@partydealcatering',
    images: [
      {
        url: '/assets/logo-icon.png',
        width: 1200,
        height: 600,
        alt: 'Party Deal Catering - Premium Nigerian catering services'
      }
    ]
  },
  
  // Facebook specific
  facebook: {
    admins: ['your-facebook-admin-id'],
    appId: 'your-facebook-app-id'
  },
  
  // WhatsApp sharing
  whatsapp: {
    image: '/assets/logo-icon.png'
  },
  
  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  
  // Additional meta tags
  other: {
    // Geographic targeting
    'geo.region': 'NG-LA',
    'geo.placename': 'Lagos, Nigeria',
    'geo.position': '6.5244;3.3792',
    'ICBM': '6.5244, 3.3792',
    
    // Business info
    'business:contact_data:locality': 'Lagos',
    'business:contact_data:region': 'Lagos State',
    'business:contact_data:country_name': 'Nigeria',
    'business:contact_data:phone_number': '+234-802-302-2936',
    'business:contact_data:website': 'https://partydeal-live.vercel.app',
    
    // Apple specific
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Party Deal Catering',
    
    // Microsoft specific
    'msapplication-TileColor': '#000000',
    'msapplication-TileImage': '/assets/ms-icon-144x144.png',
    
    // Theme colors
    'theme-color': '#000000',
    'msapplication-navbutton-color': '#000000',
    'apple-mobile-web-app-status-bar-style': '#000000',
    
    // Content language
    'content-language': 'en-NG',
    'language': 'English',
    
    // Rating and reviews
    'rating': 'General',
    'distribution': 'Global',
    
    // Cache control
    'cache-control': 'public, max-age=31536000',
    
    // Security
    'referrer': 'origin-when-cross-origin',
    
    // Nigerian business specific
    'business-type': 'Catering Services',
    'service-area': 'Lagos, Abuja, Port Harcourt, Kano, Ibadan, Nigeria',
    'cuisine-type': 'Nigerian, Continental, African',
    'event-types': 'Weddings, Corporate Events, Birthday Parties, Conferences',
    
    // Rich snippets preparation
    'restaurant:menu': 'https://partydeal-live.vercel.app/menu',
    'restaurant:contact': '+234-802-302-2936',
    'restaurant:price_range': '₦₦₦',
    'restaurant:serves_cuisine': 'Nigerian',
    'restaurant:location': 'Lagos, Nigeria'
  },
  
  // Manifest
  manifest: '/manifest.json',
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '96x96', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-icon-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-icon-512x512.png' }
    ]
  },
  
  // Verification codes
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'p:domain_verify': 'pinterest-verification-code',
      'facebook-domain-verification': 'facebook-verification-code'
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-NG">
      <head>
        {/* Additional structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              "name": "Party Deal Catering",
              "description": "Nigeria's Premier Catering Company serving Lagos, Abuja and nationwide",
              "url": "https://partydeal-live.vercel.app",
              "logo": "https://partydeal-live.vercel.app/assets/logo-icon.png",
              "image": "https://partydeal-live.vercel.app/assets/logo-icon.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lagos",
                "addressRegion": "Lagos State",
                "addressCountry": "Nigeria"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "6.5244",
                "longitude": "3.3792"
              },
              "telephone": "+234-XXX-XXX-XXXX",
              "email": "info@partydealcatering.com",
              "priceRange": "₦₦₦",
              "servesCuisine": ["Nigerian", "Continental", "African"],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "6.5244",
                  "longitude": "3.3792"
                },
                "geoRadius": "1000000"
              },
              "areaServed": ["Lagos", "Abuja", "Port Harcourt", "Nigeria"],
              "hasMenu": "https://partydealcatering.com/menu",
              "acceptsReservations": true,
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
              "openingHours": "Mo-Su 08:00-22:00",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": "Sarah Johnson",
                  "datePublished": "2024-01-15",
                  "description": "Amazing catering service! The food was exceptional and the service was professional.",
                  "name": "Outstanding Catering Experience",
                  "reviewRating": {
                    "@type": "Rating",
                    "bestRating": "5",
                    "ratingValue": "5",
                    "worstRating": "1"
                  }
                }
              ],
              "sameAs": [
                "https://www.facebook.com/partydealcatering",
                "https://www.instagram.com/partydealcatering",
                "https://www.twitter.com/partydealcatering",
                "https://www.linkedin.com/company/partydealcatering"
              ]
            })
          }}
        />
        
        {/* Breadcrumb structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://partydeal-live.vercel.app"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://partydeal-live.vercel.app/catering"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Menu",
                  "item": "https://partydeal-live.vercel.app/order"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Menu",
                  "item": "https://partydeal-live.vercel.app/menu"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Menu",
                  "item": "https://partydeal-live.vercel.app/contact"
                }
              ]
            })
          }}
        />
        
        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Party Deal Catering",
              "alternateName": "Party Deal",
              "url": "https://partydealcatering.com",
              "logo": "https://partydealcatering.com/assets/logo-icon.png",
              "foundingDate": "2020",
              "founder": "Party Deal Team",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lagos",
                "addressRegion": "Lagos State",
                "addressCountry": "Nigeria"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+234-XXX-XXX-XXXX",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "Yoruba", "Igbo", "Hausa"]
              },
              "sameAs": [
                "https://www.facebook.com/partydealcatering",
                "https://www.instagram.com/partydealcatering",
                "https://www.twitter.com/partydealcatering"
              ]
            })
          }}
        />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/assets/logo.png" as="image" />
        <link rel="preload" href="/assets/og-image.jpg" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://partydealcatering.com" />
        
        {/* Alternate language versions */}
        <link rel="alternate" hrefLang="en-ng" href="https://partydealcatering.com" />
        <link rel="alternate" hrefLang="en" href="https://partydealcatering.com" />
      </head>
      <body>
        <Loader />
        {children}
        <ReservationParallaxSection />
        <Footer />
      </body>
    </html>
  );
}