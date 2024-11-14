import React from 'react';
import { Trophy, Calendar, Star, Clock } from 'lucide-react';

const challenges = [
  {
    type: 'daily',
    title: 'Perfect Scales',
    description: 'Play all major scales without mistakes',
    reward: '100 XP',
    icon: Clock,
  },
  {
    type: 'weekly',
    title: 'Classical Master',
    description: 'Complete 5 classical pieces',
    reward: '500 XP',
    icon: Calendar,
  },
  {
    type: 'monthly',
    title: 'Practice Champion',
    description: 'Practice for 30 days straight',
    reward: '2000 XP',
    icon: Trophy,
  },
];

export default function ChallengePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Challenges</h1>
          <div className="flex items-center text-yellow-500">
            <Star className="w-5 h-5 mr-1" />
            <span className="font-semibold">1,240 XP</span>
          </div>
        </div>

        {['Daily', 'Weekly', 'Monthly'].map((period) => (
          <div key={period} className="mb-8">
            <h2 className="text-lg font-semibold mb-4">{period} Challenges</h2>
            <div className="space-y-4">
              {challenges
                .filter((c) => c.type === period.toLowerCase())
                .map((challenge) => (
                  <div key={challenge.title} className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-3 rounded-lg">
                        <challenge.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-semibold mb-1">{challenge.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{challenge.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-indigo-600 font-semibold">
                            Reward: {challenge.reward}
                          </span>
                          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
                            Start Challenge
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}