import React from 'react';
import { Flame, Star, User } from 'lucide-react';

export default function ProgressHeader() {
  return (
    <div className="bg-white shadow-sm border-b border-gray-100 py-4 fixed top-0 w-full z-50">
      <div className="max-w-2xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="ml-1 font-semibold">7 Day Streak</span>
          </div>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="ml-1 font-semibold">1,240 XP</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Level 4</span>
          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-indigo-600" />
          </div>
        </div>
      </div>
    </div>
  );
}