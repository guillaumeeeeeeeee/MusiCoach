import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Music, Trophy, User, Mic } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Mic, label: 'Transcribe', path: '/transcribe' },
  { icon: Trophy, label: 'Challenges', path: '/challenges' },
  { icon: Music, label: 'Ranking', path: '/ranking' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export default function BottomNav() {
  const location = useLocation(); 
  const activePath = location.pathname; 

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-100 px-4 py-2 z-50">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center p-2 ${
              activePath === item.path ? 'text-indigo-600' : 'text-gray-600'
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}