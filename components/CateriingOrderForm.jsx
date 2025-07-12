'use client';
import React, { useState } from 'react';
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
} from 'lucide-react';

export default function CateringOrderForm() {
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
    brandedPacks: false,
    additionalRequests: '',
  });

  const [step, setStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
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
🎁 Branded Packaging: ${formData.brandedPacks ? 'Yes' : 'No'}

📝 Additional Requests:
${formData.additionalRequests || 'None'}

Looking forward to your response!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '2349035104366'; // replace with your WhatsApp number
    const whatsappLink = `https://wa.me/message/BEVJAMHNAW2QJ1/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

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
                        className="w-full px-4 py-3 bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-amber-800 mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300"
                        required
                      />
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
                        className="w-full px-4 py-3 bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-amber-800 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="emailAddress"
                        placeholder="your.email@example.com"
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300"
                        required
                      />
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
                        className="w-full px-4 py-3 bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-amber-800 mb-2">Event Type *</label>
                      <input
                        type="text"
                        name="orderType"
                        placeholder="Wedding, Corporate, Birthday..."
                        value={formData.orderType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300"
                        required
                      />
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
                        className="w-full px-4 py-3 bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-amber-800 mb-2">Delivery Location *</label>
                      <input
                        type="text"
                        name="deliveryLocation"
                        placeholder="Enter full address"
                        value={formData.deliveryLocation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300"
                        required
                      />
                    </div>
                  </div>
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
                      <label className="block text-sm font-semibold text-amber-800 mb-2">Menu Selection *</label>
                      <select
                        name="menuSelection"
                        value={formData.menuSelection}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300"
                        required
                      >
                        <option value="">Choose your menu</option>
                        <option value="breakfast">🍳 Breakfast Package</option>
                        <option value="lunch">🥗 Lunch Package</option>
                        <option value="dinner">🍽️ Dinner Package</option>
                        <option value="snacks">🥤 Snacks & Beverages</option>
                        <option value="custom">👨‍🍳 Custom Menu</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-amber-800 mb-2">Branded Packaging</label>
                      <div
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, brandedPacks: !prev.brandedPacks }))
                        }
                        className="cursor-pointer flex items-center justify-between bg-white px-4 py-3 border-2 border-amber-200 rounded-xl"
                      >
                        <span className="text-amber-900 font-medium">
                          Add branded packaging
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
                  <div>
                    <label className="block text-sm font-semibold text-amber-800 mb-2">Additional Requests</label>
                    <textarea
                      name="additionalRequests"
                      value={formData.additionalRequests}
                      onChange={handleInputChange}
                      rows="5"
                      placeholder="Any dietary needs, setup requests, or notes?"
                      className="w-full px-4 py-3 bg-white border-2 border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-300"
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
                className="flex-1 bg-white border-2 border-amber-300 text-amber-800 font-semibold py-4 px-6 rounded-xl hover:shadow-md transition"
              >
                ← Back
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={handleNext}
                className="flex-1 bg-amber-400 text-amber-900 font-semibold py-4 px-6 rounded-xl hover:shadow-md transition"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-md transition"
              >
                📱 Submit via WhatsApp
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
