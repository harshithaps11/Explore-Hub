import React from 'react';
import { Globe2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <Globe2 className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">Explore Hub</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Discover the world's hidden gems and create unforgettable memories with our comprehensive travel platform.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Features</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Itinerary Planner</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">AR Tours</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Travel Maps</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Budget Tools</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Community</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Travel Stories</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Photo Gallery</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Travel Tips</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Forums</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} Explore Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;