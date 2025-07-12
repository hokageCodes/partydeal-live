'use client';

import { motion } from 'framer-motion';

const packages = [
  {
    id: 'bronze',
    name: 'Bronze Package',
    guests: '20-50 Guests',
    price: '₦150,000 — ₦350,000',
    bestFor: 'Intimate family gatherings, small birthday parties, naming ceremonies',
    image: '/assets/img/office.jpg',
    includes: [
      'Choice of 2 rice dishes',
      '1 soup with swallow option',
      '2 protein selections',
      '1 side dish',
      'Soft drinks and water',
      'Basic serving setup'
    ],
    sampleMenu: 'Jollof Rice, Fried Rice, Egusi Soup, Peppered Chicken, Beef Stew, Plantain',
    color: 'from-amber-600 to-yellow-600'
  },
  {
    id: 'silver',
    name: 'Silver Package',
    guests: '50-100 Guests',
    price: '₦400,000 — ₦800,000',
    bestFor: 'Medium weddings, corporate events, significant birthdays',
    image: '/assets/wed.jpg',
    includes: [
      'Choice of 3 rice dishes',
      '2 soups with swallow options',
      '3 protein selections',
      '2 side dishes',
      'Assorted drinks including Zobo',
      'Professional serving staff'
    ],
    sampleMenu: 'Jollof Rice, Fried Rice, Ofada Rice, Egusi & Efo Riro, Peppered Chicken, Goat Meat, Beef, Plantain, Moin-Moin',
    color: 'from-gray-500 to-gray-600'
  },
  {
    id: 'gold',
    name: 'Gold Package',
    guests: '100-300+ Guests',
    price: '₦1,000,000+',
    bestFor: 'Grand weddings, large corporate events, major celebrations',
    image: '/assets/grande.jpeg',
    includes: [
      'Full menu access',
      'Multiple soup and swallow options',
      '5+ protein selections',
      'Variety of sides and appetizers',
      'Signature drinks bar',
      'Full service team',
      'Event coordination support'
    ],
    sampleMenu: 'Complete Nigerian feast with premium selections',
    color: 'from-yellow-500 to-orange-600'
  }
];

export default function CateringPackagesSection() {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4">
          <h2 className="text-4xl lg:text-[48px] font-[400] font-coolvetica text-center leading-[140%] mb-6">
            Package Options
          </h2>
  
          <div className="flex flex-col gap-24">
            {packages.map((pkg, idx) => (
              <div
                key={pkg.id}
                className={`flex flex-col lg:flex-row ${
                  idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                } items-start gap-12`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-[600px]">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-[300px] sm:h-[400px] lg:h-[490px] object-cover rounded-[24px]"
                  />
                </div>
  
                {/* Text Section */}
                <div className="w-full lg:w-[584px] space-y-6">
                  <h3 className="text-3xl font-semibold text-gray-900">{pkg.name}</h3>
                  <p className="text-lg font-bold text-gray-600">{pkg.guests}</p>
                  <p className="text-partyYellow font-black text-2xl">{pkg.price}</p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Best For:</span> {pkg.bestFor}
                  </p>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    {pkg.includes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-sm italic text-gray-500">
                    <span className="font-medium">Sample Menu:</span> {pkg.sampleMenu}
                  </p>
                  <div>
                    <button className="bg-partyYellow hover:bg-orange-600 text-black px-6 py-3 rounded-lg mt-4 font-medium transition-all">
                      Select {pkg.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  