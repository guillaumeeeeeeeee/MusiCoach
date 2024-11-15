import React from 'react';
import ProgressHeader from './ProgressHeader';
import LessonPath from './LessonPath';

export default function LessonLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProgressHeader />
      <LessonPath />
    </div>
  );
}