import './globals.css';
import Footer from '@/components/Footer';
import ReservationParallaxSection from '@/components/sections/ReservationSection';
import Loader from '@/components/Loader';

export const metadata = {
  title: "Party Deal - Mouth watering food",
  description:
    "Nigeria\'s #1 premium catering company serving Lagos, Abuja & nationwide. Expert event catering, corporate meals, wedding catering, birthday parties & special occasions. Book now for unforgettable culinary experiences.",
  authors: [{ name: "Hokage Creative Labs" }],
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
  openGraph: {
    title: "Party Deal - Mouth watering food",
    description:
      "Nigeria\'s #1 premium catering company serving Lagos, Abuja & nationwide. Expert event catering, corporate meals, wedding catering, birthday parties & special occasions. Book now for unforgettable culinary experiences.",
    url: "https://partydeal-live.vercel.app",
    siteName: "Mfon Usoro Books",
    images: [
      {
        url: "https://partydeal-live.vercel.app/assets/og-image.jpg",
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
    images: ["https://partydeal-live.vercel.app/assets/og-image.jpg"],
  },
  metadataBase: new URL("https://partydeal-live.vercel.app"),
  alternates: {
    canonical: "https://partydeal-live.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};


