import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Plane, Hotel, Coffee, Camera } from 'lucide-react';

const TripPlanner = () => {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    destination: '',
    dates: { start: '', end: '' },
    travelers: 1,
    interests: []
  });

  const interests = [
    { icon: <Coffee className="w-6 h-6" />, label: 'Food & Dining' },
    { icon: <Camera className="w-6 h-6" />, label: 'Photography' },
    { icon: <Hotel className="w-6 h-6" />, label: 'Luxury Stays' },
    { icon: <Plane className="w-6 h-6" />, label: 'Adventure' }
  ];

  return (
    <div className="pt-16 min-h-screen bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800">Plan Your Perfect Trip</h1>
          <p className="mt-4 text-xl text-gray-600">Tell us about your dream vacation</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`flex items-center ${num < 3 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= num ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {num}
                </div>
                {num < 3 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      step > num ? 'bg-indigo-600' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Basic Details */}
          {step === 1 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Where would you like to go?</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-5 h-5 inline-block mr-2" />
                    Destination
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter city or country"
                    value={preferences.destination}
                    onChange={(e) => setPreferences({ ...preferences, destination: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-5 h-5 inline-block mr-2" />
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      value={preferences.dates.start}
                      onChange={(e) => setPreferences({
                        ...preferences,
                        dates: { ...preferences.dates, start: e.target.value }
                      })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-5 h-5 inline-block mr-2" />
                      End Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      value={preferences.dates.end}
                      onChange={(e) => setPreferences({
                        ...preferences,
                        dates: { ...preferences.dates, end: e.target.value }
                      })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="w-5 h-5 inline-block mr-2" />
                    Number of Travelers
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    value={preferences.travelers}
                    onChange={(e) => setPreferences({ ...preferences, travelers: parseInt(e.target.value) })}
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Interests */}
          {step === 2 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">What interests you?</h2>
              
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const newInterests = preferences.interests.includes(interest.label)
                        ? preferences.interests.filter(i => i !== interest.label)
                        : [...preferences.interests, interest.label];
                      setPreferences({ ...preferences, interests: newInterests });
                    }}
                    className={`p-4 border rounded-lg flex items-center space-x-3 ${
                      preferences.interests.includes(interest.label)
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-600'
                    }`}
                  >
                    {interest.icon}
                    <span>{interest.label}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-600 px-6 py-2 rounded-md hover:text-gray-900"
                >
                  Previous
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Summary */}
          {step === 3 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Trip Summary</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="text-sm text-gray-500">Destination</p>
                    <p className="font-medium">{preferences.destination}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="text-sm text-gray-500">Dates</p>
                    <p className="font-medium">
                      {preferences.dates.start} to {preferences.dates.end}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="text-sm text-gray-500">Travelers</p>
                    <p className="font-medium">{preferences.travelers}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Interests</p>
                  <div className="flex flex-wrap gap-2">
                    {preferences.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="text-gray-600 px-6 py-2 rounded-md hover:text-gray-900"
                >
                  Previous
                </button>
                <button
                  onClick={() => {
                    // Handle trip planning submission
                    alert('Your trip plan has been created!');
                  }}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
                >
                  Create Trip Plan
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
