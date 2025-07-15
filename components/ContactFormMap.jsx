'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import Navbar from './Navbar';
import Link from 'next/link';

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
          backgroundImage: "url('/assets/menny.webp')",
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

            <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <legend className="sr-only">Personal Information</legend>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent w-full"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent w-full"
                  required
                  aria-required="true"
                />
              </div>
            </fieldset>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                required
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                required
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                aria-describedby="message-hint"
              />
              <p id="message-hint" className="text-xs text-gray-500 mt-1">
                Optional: Tell us more about your catering needs
              </p>
            </div>

            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>

          {/* LOCATION */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-black mb-2">Location</h3>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <MapPin size={18} aria-hidden="true" />
                <span>Yaba, Lagos, Nigeria</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-black mb-2">Contact</h3>
              <div className="flex flex-col space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Phone size={18} aria-hidden="true" />
                  <a href="tel:+2348023022936" className="hover:text-yellow-600 transition-colors">
                    +234 802 302 2936
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} aria-hidden="true" />
                  <a href="mailto:partydealng@gmail.com" className="hover:text-yellow-600 transition-colors">
                    partydealng@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full h-64 rounded-md overflow-hidden">
              <iframe
                title="Google Map showing Party Deal Catering location in Yaba, Lagos, Nigeria"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.295998048906!2d3.3792059999999997!3d6.517466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d4b7617c38d%3A0x52f4f14de1096d69!2sYaba%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1628355886459!5m2!1sen!2sng"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}