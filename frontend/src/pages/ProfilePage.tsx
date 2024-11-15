import React from 'react';
import { User, Award, Clock, Music, Settings } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-indigo-600" />
            </div>
            <div className="ml-6">
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-gray-600">Piano Enthusiast</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold">120</div>
              <div className="text-sm text-gray-600">Days Streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1,240</div>
              <div className="text-sm text-gray-600">Total XP</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Gold</div>
              <div className="text-sm text-gray-600">League</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Recent Achievements</h2>
          <div className="space-y-4">
            {[
              { icon: Award, title: 'Perfect Week', desc: 'Completed all daily challenges' },
              { icon: Clock, title: '30 Day Streak', desc: 'Practiced for 30 days straight' },
              { icon: Music, title: 'Scale Master', desc: 'Mastered all major scales' },
            ].map((achievement) => (
              <div key={achievement.title} className="flex items-center">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <achievement.icon className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold">{achievement.title}</div>
                  <div className="text-sm text-gray-600">{achievement.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Settings</h2>
          <div className="space-y-4">
            {['Account', 'Notifications', 'Privacy', 'Help & Support'].map((setting) => (
              <div key={setting} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <span>{setting}</span>
                <Settings className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}