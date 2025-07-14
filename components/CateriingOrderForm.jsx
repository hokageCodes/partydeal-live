'use client';
import React, { useState, useEffect } from 'react';
import {
  Calendar,
  ChevronDown,
  MapPin,
  Users,
  Package,
  Phone,
  Mail,
  Check,
  ChefHat,
  Star,
  Clock,
  DollarSign,
  AlertCircle,
  Utensils,
  Gift,
  Info
} from 'lucide-react';

export default function EnhancedCateringOrderForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    numberOfGuests: '',
    orderType: '',
    deliveryDate: '',
    deliveryLocation: '',
    menuSelection: '',
    customMenuItems: [],
    brandedPacks: false,
    additionalRequests: '',
  });

  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [suggestions, setSuggestions] = useState([]);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [errors, setErrors] = useState({});
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Menu data
  const menuCategories = [
    'All', 'Rice', 'Swallows', 'Soups', 'Proteins', 'Sides', 'Drinks'
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Jollof Rice',
      category: 'Rice',
      image: '/assets/selection1.webp',
      description: 'Traditional Nigerian jollof rice with spices and vegetables',
      price: 2500,
      popular: true,
      serves: '2-3 people'
    },
    {
      id: 2,
      name: 'Fried Rice',
      category: 'Rice',
      image: '/assets/selection1.webp',
      description: 'Colorful fried rice with mixed vegetables and protein',
      price: 2800,
      popular: false,
      serves: '2-3 people'
    },
    {
      id: 3,
      name: 'Prime Truffle Ribeye',
      category: 'Proteins',
      image: '/assets/selection1.webp',
      description: 'Premium ribeye steak with truffle seasoning',
      price: 8500,
      popular: true,
      serves: '1 person'
    },
    {
      id: 4,
      name: 'Chicken Peppersoup',
      category: 'Soups',
      image: '/assets/selection1.webp',
      description: 'Spicy chicken pepper soup with traditional spices',
      price: 3200,
      popular: false,
      serves: '2-3 people'
    },
    {
      id: 5,
      name: 'Coconut Rice',
      category: 'Rice',
      image: '/assets/selection1.png',
      description: 'Fragrant coconut rice with aromatic spices',
      price: 2700,
      popular: false,
      serves: '2-3 people'
    },
    {
      id: 6,
      name: 'Egusi Soup',
      category: 'Soups',
      image: '/assets/selection1.png',
      description: 'Traditional egusi soup with assorted meat',
      price: 3500,
      popular: true,
      serves: '3-4 people'
    },
    {
      id: 7,
      name: 'Pounded Yam',
      category: 'Swallows',
      image: '/assets/selection1.png',
      description: 'Smooth pounded yam served fresh',
      price: 1800,
      popular: true,
      serves: '2 people'
    },
    {
      id: 8,
      name: 'Grilled Chicken',
      category: 'Proteins',
      image: '/assets/selection1.png',
      description: 'Perfectly grilled chicken with special marinade',
      price: 4200,
      popular: true,
      serves: '2-3 people'
    },
    {
      id: 9,
      name: 'Eba',
      category: 'Swallows',
      image: '/assets/selection1.webp',
      description: 'Traditional cassava flour meal',
      price: 1200,
      popular: false,
      serves: '2 people'
    },
    {
      id: 10,
      name: 'Plantain',
      category: 'Sides',
      image: '/assets/selection1.png',
      description: 'Sweet fried plantain slices',
      price: 1500,
      popular: true,
      serves: '3-4 people'
    },
    {
      id: 11,
      name: 'Fresh Juice',
      category: 'Drinks',
      image: '/assets/selection1.webp',
      description: 'Fresh tropical fruit juice blend',
      price: 800,
      popular: false,
      serves: '1 person'
    },
    {
      id: 12,
      name: 'Soft Drinks',
      category: 'Drinks',
      image: '/assets/selection1.webp',
      description: 'Assorted soft drinks and beverages',
      price: 500,
      popular: false,
      serves: '1 person'
    }
  ];

  const eventTypes = [
    { value: 'wedding', label: 'Wedding', icon: '💒', suggestions: ['Jollof Rice', 'Grilled Chicken', 'Plantain'] },
    { value: 'corporate', label: 'Corporate Event', icon: '🏢', suggestions: ['Fried Rice', 'Grilled Chicken', 'Soft Drinks'] },
    { value: 'birthday', label: 'Birthday Party', icon: '🎂', suggestions: ['Jollof Rice', 'Plantain', 'Fresh Juice'] },
    { value: 'funeral', label: 'Funeral', icon: '🕊️', suggestions: ['Coconut Rice', 'Egusi Soup', 'Pounded Yam'] },
    { value: 'graduation', label: 'Graduation', icon: '🎓', suggestions: ['Jollof Rice', 'Grilled Chicken', 'Soft Drinks'] },
    { value: 'naming', label: 'Naming Ceremony', icon: '👶', suggestions: ['Jollof Rice', 'Chicken Peppersoup', 'Plantain'] },
    { value: 'other', label: 'Other', icon: '🎉', suggestions: ['Jollof Rice', 'Grilled Chicken', 'Plantain'] }
  ];

  // Smart suggestions based on event type and guest count
  const generateSuggestions = (eventType, guestCount) => {
    const event = eventTypes.find(e => e.value === eventType);
    if (!event) return [];

    const baseItems = event.suggestions;
    const count = parseInt(guestCount);
    
    if (count > 100) {
      return [...baseItems, 'Egusi Soup', 'Pounded Yam', 'Fresh Juice'];
    } else if (count > 50) {
      return [...baseItems, 'Coconut Rice', 'Soft Drinks'];
    } else if (count > 20) {
      return [...baseItems, 'Plantain'];
    }
    
    return baseItems;
  };

  // Calculate estimated price
  const calculateEstimatedPrice = () => {
    const guestCount = parseInt(formData.numberOfGuests) || 0;
    const basePrice = formData.menuSelection === 'custom' ? 0 : 2500;
    const customItemsPrice = formData.customMenuItems.reduce((total, itemId) => {
      const item = menuItems.find(m => m.id === itemId);
      return total + (item?.price || 0);
    }, 0);
    
    const brandingFee = formData.brandedPacks ? guestCount * 200 : 0;
    const eventMultiplier = formData.orderType === 'wedding' ? 1.2 : 1;
    
    return Math.round((basePrice + customItemsPrice) * guestCount * eventMultiplier + brandingFee);
  };

  // Form validation
  const validateStep = (stepNumber) => {
    const newErrors = {};
    
    switch (stepNumber) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
        if (!formData.emailAddress.trim()) newErrors.emailAddress = 'Email is required';
        if (formData.emailAddress && !/\S+@\S+\.\S+/.test(formData.emailAddress)) {
          newErrors.emailAddress = 'Please enter a valid email';
        }
        break;
      case 2:
        if (!formData.numberOfGuests) newErrors.numberOfGuests = 'Number of guests is required';
        if (!formData.orderType) newErrors.orderType = 'Event type is required';
        if (!formData.deliveryDate) newErrors.deliveryDate = 'Delivery date is required';
        if (!formData.deliveryLocation.trim()) newErrors.deliveryLocation = 'Delivery location is required';
        break;
      case 3:
        if (!formData.menuSelection) newErrors.menuSelection = 'Menu selection is required';
        if (formData.menuSelection === 'custom' && formData.customMenuItems.length === 0) {
          newErrors.customMenuItems = 'Please select at least one item for custom menu';
        }
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Effect hooks
  useEffect(() => {
    if (formData.orderType && formData.numberOfGuests) {
      const newSuggestions = generateSuggestions(formData.orderType, formData.numberOfGuests);
      setSuggestions(newSuggestions);
      setShowSuggestions(true);
    }
  }, [formData.orderType, formData.numberOfGuests]);

  useEffect(() => {
    const price = calculateEstimatedPrice();
    setEstimatedPrice(price);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCustomMenuToggle = (itemId) => {
    setFormData(prev => ({
      ...prev,
      customMenuItems: prev.customMenuItems.includes(itemId)
        ? prev.customMenuItems.filter(id => id !== itemId)
        : [...prev.customMenuItems, itemId]
    }));
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    if (validateStep(step)) {
      const customItems = formData.customMenuItems.length > 0 
        ? formData.customMenuItems.map(id => menuItems.find(item => item.id === id)?.name).join(', ')
        : 'None';

      const message = `Hello Party Deal Catering! 👋

I'd like to place a catering order. Here's the info:

👤 Name: ${formData.firstName} ${formData.lastName}
📞 Phone: ${formData.phoneNumber}
📧 Email: ${formData.emailAddress}

🎉 Event Type: ${formData.orderType}
👥 Number of Guests: ${formData.numberOfGuests}
📍 Location: ${formData.deliveryLocation}
📅 Delivery Date: ${formData.deliveryDate}

🍽️ Menu: ${formData.menuSelection}
${formData.menuSelection === 'custom' ? `Custom Items: ${customItems}` : ''}
🎁 Branded Packaging: ${formData.brandedPacks ? 'Yes' : 'No'}
💰 Estimated Price: ₦${estimatedPrice.toLocaleString()}

📝 Additional Requests:
${formData.additionalRequests || 'None'}

Looking forward to your response!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappNumber = '2349035104366';
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappLink, '_blank');
    }
  };

  const filteredMenuItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const stepTitles = [
    { title: 'Contact Information', icon: Phone },
    { title: 'Event Details', icon: Calendar },
    { title: 'Menu & Preferences', icon: ChefHat },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 px-4 py-8 sm:px-6 md:px-8 lg:px-40 lg:py-20">
      <div className="w-full max-w-4xl mx-auto">
        <div
          className="w-full bg-amber-900 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-14 shadow-2xl"
          style={{ backgroundColor: '#452013' }}
        >
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {stepTitles.map((stepInfo, index) => {
                const StepIcon = stepInfo.icon;
                const isActive = index + 1 === step;
                const isCompleted = index + 1 < step;

                return (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                        isCompleted
                          ? 'bg-green-500 text-white'
                          : isActive
                          ? 'bg-amber-400 text-amber-900'
                          : 'bg-amber-200 text-amber-600'
                      }`}
                    >
                      {isCompleted ? <Check className="w-5 h-5" /> : <StepIcon className="w-5 h-5" />}
                    </div>
                    <span
                      className={`text-xs sm:text-sm font-medium text-center ${
                        isActive ? 'text-amber-200' : 'text-amber-300'
                      }`}
                    >
                      {stepInfo.title}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="w-full bg-amber-800 rounded-full h-2">
              <div
                className="bg-amber-400 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Price Estimate */}
          {estimatedPrice > 0 && (
            <div className="mb-6 bg-green-100 border border-green-300 rounded-xl p-4">
              <div className="flex items-center gap-2 text-green-800">
                <DollarSign className="w-5 h-5" />
                <span className="font-semibold">Estimated Total: ₦{estimatedPrice.toLocaleString()}</span>
              </div>
            </div>
          )}

          <div
            className="w-full bg-amber-50 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 mb-6 shadow-inner"
            style={{ backgroundColor: '#FBF8F4' }}
          >
            <div className="space-y-6">
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-amber-900 mb-2">Contact Information</h2>
                    <p className="text-amber-700">Tell us how to reach you</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-amber-800 mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:ring-amber-300 ${
                          errors.firstName ? 'border-red-500' : 'border-amber-200'
                        }`}
                        required
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-amber-800 mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:ring-amber-300 ${
                          errors.lastName ? 'border-red-500' : 'border-amber-200'
                        }`}
                        required
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-amber-800 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="(555) 123-4567"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:ring-amber-300 ${
                          errors.phoneNumber ? 'border-red-500' : 'border-amber-200'
                        }`}
                        required
                      />
                      {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-amber-800 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="emailAddress"
                        placeholder="your.email@example.com"
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:ring-amber-300 ${
                          errors.emailAddress ? 'border-red-500' : 'border-amber-200'
                        }`}
                        required
                      />
                      {errors.emailAddress && <p className="text-red-500 text-sm mt-1">{errors.emailAddress}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-amber-900 mb-2">Event Details</h2>
                    <p className="text-amber-700">Tell us about your event</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-amber-800 mb-2">Number of Guests *</label>
                      <input
                        type="number"
                        name="numberOfGuests"
                        placeholder="How many people?"
                        value={formData.numberOfGuests}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:ring-amber-300 ${
                          errors.numberOfGuests ? 'border-red-500' : 'border-amber-200'
                        }`}
                        required
                      />
                      {errors.numberOfGuests && <p className="text-red-500 text-sm mt-1">{errors.numberOfGuests}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-amber-800 mb-2">Event Type *</label>
                      <select
                        name="orderType"
                        value={formData.orderType}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:ring-amber-300 ${
                          errors.orderType ? 'border-red-500' : 'border-amber-200'
                        }`}
                        required
                      >
                        <option value="">Select event type</option>
                        {eventTypes.map(type => (
                          <option key={type.value} value={type.value}>
                            {type.icon} {type.label}
                          </option>
                        ))}
                      </select>
                      {errors.orderType && <p className="text-red-500 text-sm mt-1">{errors.orderType}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-amber-800 mb-2">Delivery Date *</label>
                      <input
                        type="date"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:ring-amber-300 ${
                          errors.deliveryDate ? 'border-red-500' : 'border-amber-200'
                        }`}
                        required
                      />
                      {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-amber-800 mb-2">Delivery Location *</label>
                      <input
                        type="text"
                        name="deliveryLocation"
                        placeholder="Enter full address"
                        value={formData.deliveryLocation}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:ring-amber-300 ${
                          errors.deliveryLocation ? 'border-red-500' : 'border-amber-200'
                        }`}
                        required
                      />
                      {errors.deliveryLocation && <p className="text-red-500 text-sm mt-1">{errors.deliveryLocation}</p>}
                    </div>
                  </div>

                  {/* Smart Suggestions */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Info className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-blue-800">Recommended for your event:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {suggestions.map((suggestion, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {suggestion}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-amber-900 mb-2">Menu & Preferences</h2>
                    <p className="text-amber-700">Choose your perfect menu</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-amber-800 mb-2">Package Selection *</label>
                      <select
                        name="menuSelection"
                        value={formData.menuSelection}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white border-2 rounded-xl focus:ring-2 focus:ring-amber-300 ${
                          errors.menuSelection ? 'border-red-500' : 'border-amber-200'
                        }`}
                        required
                      >
                        <option value="">Choose your package</option>
                        <option value="bronze">Bronze Package</option>
                        <option value="silver">Silver Package</option>
                        <option value="gold">Gold Package</option>
                        <option value="snacks">🥤 Snacks & Beverages</option>
                        <option value="custom">👨‍🍳 Custom Menu</option>
                      </select>
                      {errors.menuSelection && <p className="text-red-500 text-sm mt-1">{errors.menuSelection}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-amber-800 mb-2">Branded Packaging</label>
                      <div
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, brandedPacks: !prev.brandedPacks }))
                        }
                        className="cursor-pointer flex items-center justify-between bg-white px-4 py-3 border-2 border-amber-200 rounded-xl hover:bg-amber-50 transition-colors"
                      >
                        <span className="text-amber-900 font-medium">
                          Add branded packaging (+₦200/person)
                        </span>
                        <div
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
                            formData.brandedPacks ? 'bg-amber-400' : 'bg-amber-200'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                              formData.brandedPacks ? 'translate-x-6' : ''
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Custom Menu Selection */}
                  {formData.menuSelection === 'custom' && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Utensils className="w-5 h-5 text-amber-800" />
                        <span className="font-semibold text-amber-800">Select Custom Menu Items</span>
                      </div>
                      
                      {/* Category Filter */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {menuCategories.map(category => (
                          <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                              selectedCategory === category
                                ? 'bg-amber-400 text-amber-900'
                                : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>

                      {/* Menu Items Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                        {filteredMenuItems.map(item => (
                          <div
                            key={item.id}
                            onClick={() => handleCustomMenuToggle(item.id)}
                            className={`cursor-pointer p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                              formData.customMenuItems.includes(item.id)
                                ? 'border-green-500 bg-green-50'
                                : 'border-amber-200 bg-white hover:border-amber-300'
                            }`}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-amber-900">{item.name}</span>
                                {item.popular && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                              </div>
                              {formData.customMenuItems.includes(item.id) && (
                                <Check className="w-5 h-5 text-green-600" />
                              )}
                            </div>
                            <p className="text-sm text-amber-700 mb-2">{item.description}</p>
                            <div className="flex justify-between items-center text-sm">
                              <span className="font-semibold text-amber-900">₦{item.price.toLocaleString()}</span>
                              <span className="text-amber-600">{item.serves}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      {errors.customMenuItems && <p className="text-red-500 text-sm mt-1">{errors.customMenuItems}</p>}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-amber-800 mb-2">Additional Requests</label>
                    <textarea
                      name="additionalRequests"
                      value={formData.additionalRequests}
                      onChange={handleInputChange}
                      rows="5"
                      placeholder="Any dietary needs, setup requests, or notes?"
                      className="w-full px-4 py-3 bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300 resize-none"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Step Navigation */}
          <div className="flex justify-between gap-4">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex-1 bg-white border-2 border-amber-300 text-amber-800 font-semibold py-4 px-6 rounded-xl hover:shadow-md hover:bg-amber-50 transition-all duration-200 flex items-center justify-center gap-2"
              >
                ← Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={handleNext}
                className="flex-1 bg-amber-400 text-amber-900 font-semibold py-4 px-6 rounded-xl hover:shadow-md hover:bg-amber-500 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                📱 Submit via WhatsApp
              </button>
            )}
          </div>

          {/* Order Summary */}
          {step === 3 && (
            <div className="mt-6 bg-amber-100 rounded-xl p-4">
              <h3 className="font-semibold text-amber-900 mb-2">Order Summary</h3>
              <div className="space-y-1 text-sm text-amber-800">
                <div className="flex justify-between">
                  <span>Event: {formData.orderType}</span>
                  <span>{formData.numberOfGuests} guests</span>
                </div>
                <div className="flex justify-between">
                  <span>Date: {formData.deliveryDate}</span>
                  <span>Branded: {formData.brandedPacks ? 'Yes' : 'No'}</span>
                </div>
                {formData.customMenuItems.length > 0 && (
                  <div className="mt-2">
                    <span className="font-medium">Custom Items:</span>
                    <div className="ml-2">
                      {formData.customMenuItems.map(itemId => {
                        const item = menuItems.find(m => m.id === itemId);
                        return item ? (
                          <div key={itemId} className="flex justify-between">
                            <span>• {item.name}</span>
                            <span>₦{item.price.toLocaleString()}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}