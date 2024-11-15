import React from 'react';
import { Map, Users, Compass, History, Camera, DollarSign } from 'lucide-react';

const features = [
  {
    icon: <Map className="h-6 w-6" />,
    title: 'Personalized Itineraries',
    description: 'Create custom travel plans tailored to your interests and preferences.'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Community Insights',
    description: 'Connect with fellow travelers and share experiences through user-generated content.'
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: 'Interactive Maps',
    description: 'Explore destinations visually with detailed maps showing attractions and routes.'
  },
  {
    icon: <History className="h-6 w-6" />,
    title: 'AR Historical Tours',
    description: 'Experience guided tours with augmented reality at historical sites.'
  },
  {
    icon: <Camera className="h-6 w-6" />,
    title: 'Live Updates',
    description: 'Get real-time recommendations based on your location and current trends.'
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: 'Smart Budgeting',
    description: 'Find the best travel deals and manage your trip expenses efficiently.'
  }
];

const Features = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need for the perfect trip
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive tools and features to make your travel experience extraordinary
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100">
                  {feature.icon}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;