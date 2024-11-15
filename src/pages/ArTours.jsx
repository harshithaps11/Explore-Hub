import React from 'react';
import { Compass, Map, Camera, Smartphone } from 'lucide-react';

// Feature Component
const Feature = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Tour Component
const Tour = ({ image, title, location, duration, rating }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold">
        ⭐ {rating}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{location}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-500">{duration}</span>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Start Tour
        </button>
      </div>
    </div>
  </div>
);

// ArTours Component
const ArTours = () => {
  const features = [
    {
      icon: <Compass className="w-6 h-6 text-indigo-600" />,
      title: "Interactive Navigation",
      description: "Follow AR markers to navigate through historical sites and landmarks"
    },
    {
      icon: <Map className="w-6 h-6 text-indigo-600" />,
      title: "3D Mapping",
      description: "Experience locations in 3D with detailed historical reconstructions"
    },
    {
      icon: <Camera className="w-6 h-6 text-indigo-600" />,
      title: "Live Information",
      description: "Point your camera to get instant information about monuments and artifacts"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
      title: "Offline Access",
      description: "Download tours for offline access in areas with limited connectivity"
    }
  ];

  const tours = [
    {
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Ancient Kyoto Tour",
      location: "Kyoto, Japan",
      duration: "2 hours",
      rating: 4.8
    },
    {
      image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Roman Forum Experience",
      location: "Rome, Italy",
      duration: "3 hours",
      rating: 4.9
    },
    {
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Machu Picchu Discovery",
      location: "Cusco, Peru",
      duration: "4 hours",
      rating: 4.7
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">AR Tours</h1>
          <p className="mt-4 text-xl text-gray-600">Experience history come alive with our augmented reality tours</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured AR Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Tour key={index} {...tour} />
            ))}
          </div>
        </div>

        <div className="bg-indigo-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your AR Journey?</h2>
          <p className="mb-6">Download our mobile app to access AR tours anywhere, anytime.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-gray-100">
              Download for iOS
            </button>
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-gray-100">
              Download for Android
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArTours;
