'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import Navbar from './Navbar';

export default function ContactFormWithMap() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent.');
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
    <section
        className="relative w-full min-h-[400px] bg-cover bg-center flex items-center justify-center px-4 sm:px-10 md:px-20 lg:px-32 xl:px-60"
        style={{
          backgroundImage: "url('/assets/cater2.jpg')",
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
          Contact Us
        </h1>
      </section>

        <div className="max-w-6xl mx-auto px-4 py-16">
        {/* FORM */}
        <div className="grid md:grid-cols-2 gap-16">
            <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-black">Send us a message</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                required
                />
                <input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                required
                />
            </div>

            <input
                name="phone"
                placeholder="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                required
            />

            <input
                name="email"
                placeholder="Email Address"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                required
            />

            <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-black"
            />

            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8 py-3 rounded-lg transition-colors duration-200">
                <a href="/order">Contact Us</a>
            </button>
            </form>

            {/* LOCATION */}
            <div className="space-y-6">
            <div>
                <h3 className="text-lg font-bold text-black mb-2">Location</h3>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                <MapPin size={18} />
                <span>Yaba, Lagos, Nigeria</span>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-bold text-black mb-2">Contact</h3>
                <div className="flex flex-col space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                    <Phone size={18} />
                    <span>+234 802 302 2936</span>
                </div>
                <div className="flex items-center gap-2">
                    <Mail size={18} />
                    <span>partydealng@gmail.com</span>
                </div>
                </div>
            </div>

            <div className="w-full h-64 rounded-md overflow-hidden">
    <iframe
        title="Google Map - Yaba Lagos"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.295998048906!2d3.3792059999999997!3d6.517466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d4b7617c38d%3A0x52f4f14de1096d69!2sYaba%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1628355886459!5m2!1sen!2sng"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 w-full h-full"
    ></iframe>
    </div>

            </div>
        </div>
        </div>
    </>
  );
}
