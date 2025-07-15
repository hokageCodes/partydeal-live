import CateringOrderForm from '@/components/CateriingOrderForm'
import Navbar from '@/components/Navbar'
import FAQSection from '@/components/sections/FAQSection'
import PageHeader from '@/components/sections/PageHeader'
import React from 'react'

export default function page() {
  return (
    <div>
        <section
        className="relative w-full min-h-[400px] bg-cover bg-center flex items-center justify-center px-4 sm:px-10 md:px-20 lg:px-32 xl:px-60"
        style={{
          backgroundImage: "url('/assets/order.webp')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Floating Navbar */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar />
        </div>

        {/* Overlay Text */}
        <h1
          className="relative z-10 text-white text-center leading-none"
          style={{
            fontFamily: 'Coolvetica, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: 'clamp(2rem, 6vw, 80px)',
            letterSpacing: '-0.01em',
          }}
        >
          Place Custom Order
        </h1>
      </section>
        <CateringOrderForm />
        <FAQSection />
    </div>
  )
}
