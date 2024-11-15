import React from 'react';
import { Music2, Award, BarChart2, Brain } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Musicoach?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our innovative platform combines technology and music education to provide you with the best learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center">
                <Music2 className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Library</h3>
              <p className="text-gray-600">Access a vast collection of songs and exercises, carefully curated for all skill levels.</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Feedback</h3>
              <p className="text-gray-600">Get instant, accurate feedback on your playing through advanced machine learning.</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Gamified Learning</h3>
              <p className="text-gray-600">Stay motivated with achievements, daily streaks, and competitive leaderboards.</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center">
                <BarChart2 className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Monitor your improvement with detailed analytics and performance insights.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}