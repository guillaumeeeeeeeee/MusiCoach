import React from 'react';
import AuthCard from './AuthCard';

export default function SignIn() {
  return (
    <AuthCard>
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Welcome back!</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Sign In
        </button>
      </form>
      <div className="mt-6 text-center">
        <a href="/signup" className="text-indigo-600 hover:text-indigo-700 text-sm">
          Don't have an account? Sign up
        </a>
      </div>
    </AuthCard>
  );
}