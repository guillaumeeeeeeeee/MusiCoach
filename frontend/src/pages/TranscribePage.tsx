import React from 'react';
import { Mic, Music2, Upload } from 'lucide-react';

export default function TranscribePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Audio to Sheet Music</h1>
        
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Drop your audio file here or click to upload</p>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Select File
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center mb-4">
            <Mic className="w-6 h-6 text-indigo-600 mr-2" />
            <h2 className="text-lg font-semibold">Record Audio</h2>
          </div>
          <button className="w-full bg-indigo-100 text-indigo-600 py-3 rounded-lg hover:bg-indigo-200 transition-colors flex items-center justify-center">
            <Music2 className="w-5 h-5 mr-2" />
            Start Recording
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Transcriptions</h2>
          <div className="space-y-4">
            {['Moonlight Sonata', 'Für Elise', 'River Flows in You'].map((title) => (
              <div key={title} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span>{title}</span>
                <button className="text-indigo-600 text-sm">View Score</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}