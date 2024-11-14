import React from 'react';
import { Trophy, Crown, Medal } from 'lucide-react';

const leagues = [
  {
    name: 'Diamond League',
    color: 'bg-blue-500',
    players: [
      { name: 'Sarah M.', points: 12500, position: 1 },
      { name: 'John D.', points: 12100, position: 2 },
      { name: 'Mike R.', points: 11800, position: 3 },
    ],
  },
  {
    name: 'Gold League',
    color: 'bg-yellow-500',
    players: [
      { name: 'Emma S.', points: 8900, position: 1 },
      { name: 'David K.', points: 8700, position: 2 },
      { name: 'Lisa P.', points: 8500, position: 3 },
    ],
  },
  {
    name: 'Silver League',
    color: 'bg-gray-400',
    players: [
      { name: 'Tom H.', points: 5600, position: 1 },
      { name: 'Anna W.', points: 5400, position: 2 },
      { name: 'James L.', points: 5200, position: 3 },
    ],
  },
];

export default function RankingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Rankings</h1>
          <div className="flex items-center">
            <Trophy className="w-5 h-5 text-yellow-500 mr-1" />
            <span className="font-semibold">Gold League</span>
          </div>
        </div>

        <div className="space-y-8">
          {leagues.map((league) => (
            <div key={league.name} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className={`${league.color} px-6 py-4 text-white flex items-center`}>
                <Crown className="w-6 h-6 mr-2" />
                <span className="font-semibold">{league.name}</span>
              </div>
              <div className="p-4">
                {league.players.map((player) => (
                  <div
                    key={player.name}
                    className="flex items-center justify-between py-3 border-b last:border-0"
                  >
                    <div className="flex items-center">
                      <span className="w-8 text-center font-semibold">{player.position}</span>
                      <span className="ml-4">{player.name}</span>
                    </div>
                    <div className="flex items-center">
                      <Medal className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="font-semibold">{player.points}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}