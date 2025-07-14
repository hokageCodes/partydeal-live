import './globals.css';
import Footer from '@/components/Footer';
import ReservationParallaxSection from '@/components/sections/ReservationSection';
// import Loader from '@/components/Loader'; 
import Head from 'next/head';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Party Deal - Mouth watering food",
  description:
    "Nigeria\'s #1 premium catering company serving Lagos, Abuja & nationwide.",
  authors: [{ name: "Hokage Creative Labs" }],
  keywords: [
    'catering company Nigeria',
    'Top-rated catering service in Nigeria offering delicious Nigerian dishes for events, parties, and corporate gatherings. ',
    'We provide quality food and excellent service to make your event unforgettable. Bringing the taste of Nigeria to your table! Our catering service offers authentic Nigerian cuisine and flawless service for events, parties, and corporate gatherings. Delight your guests with premium Nigerian dishes! Our catering service guarantees quality, flavor, and professionalism for events that leave a lasting impression.',
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
    'suya catering Lagos',
    ' Expert event catering, corporate meals, wedding catering, birthday parties & special occasions. Book now for unforgettable culinary experiences.'
  ],
  openGraph: {
    title: "Party Deal - Mouth watering food",
    description:
      "Nigeria\'s #1 premium catering company serving Lagos, Abuja & nationwide.",
    url: "https://partydeal.ng",
    siteName: "Mfon Usoro Books",
    images: [
      {
        url: "https://partydeal.ng/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Party Deal logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@partydealng",
    creator: "@partydealng",
    images: ["https://partydeal.ng/assets/og-image.jpg"],
  },
  metadataBase: new URL("https://partydeal.ng"),
  alternates: {
    canonical: "https://partydeal.ng",
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://www.partydeal.ng" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Party Deal Catering",
            "image": "https://www.partydealcatering.com/assets/seo-banner.jpg",
            "url": "https://www.partydealcatering.com",
            "telephone": "+2348012345678",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lagos",
              "addressCountry": "NG"
            },
            "priceRange": "$$",
            "servesCuisine": ["Nigerian", "African", "Continental"]
          }
          `}
          </script>
          <link
  rel="preload"
  href="/assets/fonts/Coolvetica-Regular.otf"
  as="font"
  type="font/otf"
  crossOrigin="anonymous"
/>
<link
  rel="preload"
  href="/assets/fonts/Satoshi-Regular.otf"
  as="font"
  type="font/otf"
  crossOrigin="anonymous"
/>

        </Head> 
      <body>
        {/* <Loader /> */}
        {children}
        <ReservationParallaxSection />
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
