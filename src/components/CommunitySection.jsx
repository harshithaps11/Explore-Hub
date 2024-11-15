import React from 'react';
import { Users } from 'lucide-react';

const CommunitySection = () => {
  return (
    <div className="py-24 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Join Our Travel Community
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Connect with fellow travelers, share your experiences, and discover hidden gems around the world. Our community of passionate explorers is here to help you plan your next adventure.
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Share Your Stories</h4>
                  <p className="mt-1 text-gray-500">
                    Post photos, write reviews, and share tips with other travelers
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                  Join Community
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <img
                className="rounded-lg object-cover h-48 w-full"
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt="Community member traveling"
              />
              <img
                className="rounded-lg object-cover h-48 w-full"
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                alt="Travel photography"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;