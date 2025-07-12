'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How far in advance should I book my event, and can you handle last-minute requests?",
      answer: "We recommend booking your event at least 2-3 weeks in advance to ensure availability and proper planning. However, we understand that sometimes events come up unexpectedly. We do our best to accommodate last-minute requests when possible, though availability may be limited. For urgent bookings, please call us directly and we'll work with you to find a solution that meets your needs."
    },
    {
      question: "What's included in your pricing, and what are your payment terms?",
      answer: "Our pricing includes menu planning, food preparation, professional presentation, serving utensils, and basic setup. We also provide staff for service during your event. Payment terms are typically 50% deposit upon booking confirmation and the remaining 50% due 24 hours before your event. We accept cash, bank transfers, and major mobile payment platforms. Additional services like premium tableware, decorations, or extended service hours may incur extra charges."
    },
    {
      question: "How flexible are your menus?",
      answer: "We pride ourselves on flexibility! Our menus can be customized to accommodate dietary restrictions, cultural preferences, and specific requests. Whether you need vegetarian, vegan, gluten-free options, or traditional Nigerian dishes with a modern twist, we work closely with you to create the perfect menu. We can also adjust portion sizes and create hybrid menus that combine different cuisines to suit your guests' tastes."
    },
    {
      question: "Where do you deliver, and what's included in your service?",
      answer: "We deliver throughout Lagos and surrounding areas. Our full-service package includes menu consultation, food preparation, delivery, professional setup, serving during the event, and cleanup afterward. We bring our own serving equipment, warmers, and professional staff. For locations outside our standard delivery area, additional transportation fees may apply. We also offer pickup options from our kitchen if you prefer to handle your own service."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 w-full">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-center justify-between group"
              >
                <span className="text-[24px] font-medium text-black pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-gray-400 transition-colors duration-200">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-gray-600" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-4 pr-12">
                  <p className="text-black font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? We'd love to help!
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8 py-3 rounded-lg transition-colors duration-200">
            <a href="/contact">Contact Us</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;