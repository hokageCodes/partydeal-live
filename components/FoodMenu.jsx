'use client';

import React, { useState } from 'react';

export default function CateringMenuComponent() {
  const [activeFilter, setActiveFilter] = useState('All');

  const menuCategories = [
    'All', 'Rice', 'Swallows', 'Soups', 'Proteins', 'Sides', 'Drinks'
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Jollof Rice',
      category: 'Rice',
      description: 'Traditional Nigerian jollof rice with spices and vegetables'
    },
    {
      id: 2,
      name: 'Fried Rice',
      category: 'Rice',
      description: 'Colorful fried rice with mixed vegetables and protein'
    },
    {
      id: 3,
      name: 'Basmati Rice',
      category: 'Rice',
      description: 'Long grain basmati rice with aromatic spices'
    },
    {
      id: 4,
      name: 'Eba',
      category: 'Swallows',
      description: 'Eba with your favourite soup'
    },
    {
      id: 5,
      name: 'Amala',
      category: 'Swallows',
      description: 'Hot, light Amala with nice soup'
    },
    {
      id: 6,
      name: 'Semovita',
      category: 'Swallows',
      description: 'Smooth semovita served fresh'
    },
    {
      id: 7,
      name: 'Pounded Yam',
      category: 'Swallows',
      description: 'Smooth pounded yam served fresh'
    },
    {
      id: 8,
      name: 'Grilled Chicken',
      category: 'Proteins',
      description: 'Perfectly grilled chicken with special marinade'
    },
    {
      id: 9,
      name: 'Beef Stew',
      category: 'Proteins',
      description: 'Tender beef in rich tomato stew'
    },
    {
      id: 10,
      name: 'Plantain',
      category: 'Sides',
      description: 'Sweet fried plantain slices'
    },
    {
      id: 11,
      name: 'Fresh Juice',
      category: 'Drinks',
      description: 'Fresh tropical fruit juice blend'
    },
    {
      id: 12,
      name: 'Soft Drinks',
      category: 'Drinks',
      description: 'Assorted soft drinks and beverages'
    }
  ];

  const filteredItems =
    activeFilter === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  return (
    <div className="w-full bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-stone-600 text-lg">Fresh, authentic Nigerian cuisine</span>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-stone-200">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 mx-2 mb-2 font-medium transition-all duration-200 border-b-2 ${
                activeFilter === category
                  ? 'text-amber-700 border-amber-700'
                  : 'text-stone-500 border-transparent hover:text-stone-700 hover:border-stone-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu List */}
        <div className="space-y-1">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row md:items-start justify-between py-6 px-4 hover:bg-white transition-colors duration-200 ${
                index !== filteredItems.length - 1 ? 'border-b border-stone-100' : ''
              }`}
            >
              <div className="flex-1 md:flex md:items-start md:justify-between">
                <h3 className="text-5xl font-semibold text-stone-800 mb-2 md:mb-0 md:flex-shrink-0 md:w-1/2">{item.name}</h3>
                <p className="text-stone-400 text-2xl leading-relaxed md:w-1/2 md:text-right">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No Items Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-stone-500">
              No items found in this category.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-20">
          <button 
          aria-label='place order'
            className="bg-partyYellow text-black py-4 px-12 text-lg duration-300"
          >
            Place Your Order
          </button>
        </div>
      </div>
    </div>
  );
}