import React from 'react';
import { Music, Check, Lock } from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
  progress: number;
}

const lessons: Lesson[] = [
  { id: 1, title: 'Piano Basics', description: 'Learn the fundamentals', completed: true, locked: false, progress: 100 },
  { id: 2, title: 'Simple Chords', description: 'Master basic chord patterns', completed: true, locked: false, progress: 100 },
  { id: 3, title: 'Major Scales', description: 'Explore the major scale', completed: false, locked: false, progress: 60 },
  { id: 4, title: 'Minor Scales', description: 'Discover minor scales', completed: false, locked: true, progress: 0 },
  { id: 5, title: 'Classical Pieces', description: 'Play your first classical piece', completed: false, locked: true, progress: 0 },
];

export default function LessonPath() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24">
      <div className="space-y-6">
        {lessons.map((lesson, index) => (
          <div key={lesson.id} className="relative">
            {index !== lessons.length - 1 && (
              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200" />
            )}
            <div className={`flex items-start space-x-4 ${lesson.locked ? 'opacity-50' : ''}`}>
              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    lesson.completed
                      ? 'bg-green-100'
                      : lesson.locked
                      ? 'bg-gray-100'
                      : 'bg-indigo-100'
                  }`}
                >
                  {lesson.completed ? (
                    <Check className="w-6 h-6 text-green-600" />
                  ) : lesson.locked ? (
                    <Lock className="w-6 h-6 text-gray-400" />
                  ) : (
                    <Music className="w-6 h-6 text-indigo-600" />
                  )}
                </div>
                {!lesson.locked && !lesson.completed && lesson.progress > 0 && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center">
                    <span className="text-xs font-bold text-indigo-600">{lesson.progress}%</span>
                  </div>
                )}
              </div>
              <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <h3 className="font-semibold text-lg text-gray-900">{lesson.title}</h3>
                <p className="text-gray-600">{lesson.description}</p>
                {!lesson.locked && !lesson.completed && (
                  <button className="mt-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                    Continue Learning →
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}