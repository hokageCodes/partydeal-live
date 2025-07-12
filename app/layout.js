import './globals.css';
import Footer from '@/components/Footer';
import ReservationParallaxSection from '@/components/sections/ReservationSection';
import Loader from '@/components/Loader'; // ✅ Add this

export const metadata = {
  title: 'Party Deal Catering',
  description: "Nigeria's Premier Catering Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Loader /> {/* ✅ Add before everything else */}
        {children}
        <ReservationParallaxSection />
        <Footer />
      </body>
    </html>
  );
}
