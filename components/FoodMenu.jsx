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
      image: '/assets/selection1.webp',
      description: 'Traditional Nigerian jollof rice with spices and vegetables'
    },
    {
      id: 2,
      name: 'Fried Rice',
      category: 'Rice',
      image: '/assets/selection1.webp',
      description: 'Colorful fried rice with mixed vegetables and protein'
    },
    {
      id: 3,
      name: 'Prime Truffle Ribeye',
      category: 'Proteins',
      image: '/assets/selection1.webp',
      description: 'Premium ribeye steak with truffle seasoning'
    },
    {
      id: 4,
      name: 'Chicken Peppersoup',
      category: 'Soups',
      image: '/assets/selection1.webp',
      description: 'Spicy chicken pepper soup with traditional spices'
    },
    {
      id: 5,
      name: 'Coconut Rice',
      category: 'Rice',
      image: '/assets/selection1.webp',
      description: 'Fragrant coconut rice with aromatic spices'
    },
    {
      id: 6,
      name: 'Egusi Soup',
      category: 'Soups',
      image: '/assets/selection1.webp',
      description: 'Traditional egusi soup with assorted meat'
    },
    {
      id: 7,
      name: 'Pounded Yam',
      category: 'Swallows',
      image: '/assets/selection1.webp',
      description: 'Smooth pounded yam served fresh'
    },
    {
      id: 8,
      name: 'Grilled Chicken',
      category: 'Proteins',
      image: '/assets/selection1.webp',
      description: 'Perfectly grilled chicken with special marinade'
    },
    {
      id: 9,
      name: 'Eba',
      category: 'Swallows',
      image: '/assets/selection1.webp',
      description: 'Traditional cassava flour meal'
    },
    {
      id: 10,
      name: 'Plantain',
      category: 'Sides',
      image: '/assets/selection1.webp',
      description: 'Sweet fried plantain slices'
    },
    {
      id: 11,
      name: 'Fresh Juice',
      category: 'Drinks',
      image: '/assets/selection1.webp',
      description: 'Fresh tropical fruit juice blend'
    },
    {
      id: 12,
      name: 'Soft Drinks',
      category: 'Drinks',
      image: '/assets/selection1.webp',
      description: 'Assorted soft drinks and beverages'
    }
  ];

  const filteredItems =
    activeFilter === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

      return ( 
        <div className="w-full bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {menuCategories.map((category) => (
                <button
                aria-label='category'
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-amber-700 border border-amber-300 hover:bg-amber-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
      
            {/* Menu Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col"
                >
                  <div className="h-[90%] w-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-[10%] px-4 py-3 bg-white">
                    <h3 className="text-center text-base font-semibold text-amber-900 truncate">
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
      
            {/* No Items Message */}
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-amber-600">
                  No items found in this category.
                </p>
              </div>
            )}
      
            {/* CTA */}
            <div className="text-center mt-20">
              <button aria-label='Plac Order' className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors duration-300">
                Place Your Order
              </button>
            </div>
          </div>
        </div>
      );
      
}
