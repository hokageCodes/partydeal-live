// import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Party Deal Catering",
  description: "Nigeria's Premier Catering Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
