import React from 'react';
import { Piano, Music, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Master Piano with
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {' '}AI-Powered{' '}
          </span>
          Learning
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Learn piano through gamified lessons, get real-time feedback, and track your progress with advanced AI technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
            Start Learning Now
          </button>
          <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors">
            Watch Demo
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Piano className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Interactive Lessons</h3>
            <p className="text-gray-600">Learn at your own pace with personalized feedback</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Music className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Evaluation</h3>
            <p className="text-gray-600">Get instant feedback on your performance</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Trophy className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600">Earn rewards and track your improvement</p>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2">
        <div className="w-[800px] h-[400px] bg-gradient-to-b from-indigo-600/20 to-purple-600/20 blur-3xl rounded-full" />
      </div>
    </div>
  );
}