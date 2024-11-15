import React from 'react';
import { Users, MessageSquare, Image, Heart } from 'lucide-react';

// TravelStory Component
const TravelStory = ({ username, location, image, likes, comments }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={location} className="w-full h-64 object-cover" />
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
          <span className="text-indigo-600 font-semibold">{username[0]}</span>
        </div>
        <div className="ml-3">
          <p className="font-semibold text-gray-900">{username}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-gray-500">
        <div className="flex items-center space-x-2">
          <Heart className="w-5 h-5" />
          <span>{likes}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-5 h-5" />
          <span>{comments}</span>
        </div>
      </div>
    </div>
  </div>
);

// Community Component
const Community = () => {
  const stories = [
    {
      username: "Sarah Parker",
      location: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      likes: 234,
      comments: 45
    },
    {
      username: "Mike Ross",
      location: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      likes: 567,
      comments: 89
    },
    {
      username: "Emma Wilson",
      location: "Machu Picchu, Peru",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      likes: 789,
      comments: 123
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Travel Community</h1>
          <p className="mt-4 text-xl text-gray-600">Share your adventures and connect with fellow travelers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">15K+ Members</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">50K+ Photos</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <MessageSquare className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">100K+ Stories</h3>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Latest Stories</h2>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Share Your Story
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <TravelStory key={index} {...story} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
