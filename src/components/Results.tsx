import React, { useState, useEffect } from 'react';
import { Share2, RotateCcw, Grab as Grass } from 'lucide-react';
import { QuizResult } from '../types/quiz';
import { ShareModal } from './ShareModal';
import { TouchGrassModal } from './TouchGrassModal';

interface ResultsProps {
  result: QuizResult;
  onRetakeQuiz: () => void;
}

export function Results({ result, onRetakeQuiz }: ResultsProps) {
  const [showFlags, setShowFlags] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showTouchGrassModal, setShowTouchGrassModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFlags(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const renderRedFlags = () => {
    const flags = [];
    for (let i = 0; i < result.totalRedFlags; i++) {
      flags.push(
        <div
          key={i}
          className={`text-6xl animate-flag-wave ${showFlags ? 'animate-scale-in' : 'opacity-0'}`}
          style={{ animationDelay: `${i * 100}ms` }}
        >
          🚩
        </div>
      );
    }
    return flags;
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-danger/10 via-white to-warning/10 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full text-center">
          {/* Results Header */}
          <div className="mb-12 animate-fade-in">
            <div className="text-8xl mb-6">{result.emoji}</div>
            <h1 className="font-mono text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {result.title}
            </h1>
            <p className="font-mono text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {result.description}
            </p>
          </div>

          {/* Red Flags Display */}
          <div className="mb-12">
            <h2 className="font-mono text-2xl font-bold text-gray-800 mb-6">
              Your Red Flag Count: {result.totalRedFlags}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {renderRedFlags()}
            </div>
          </div>

          {/* Advice Section */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-xl animate-slide-in">
            <h3 className="font-mono text-2xl font-bold text-gray-800 mb-6">
              Your Personalized Roast:
            </h3>
            <div className="space-y-4">
              {result.advice.map((advice, index) => (
                <div
                  key={index}
                  className="font-mono text-lg text-gray-700 p-4 bg-gray-50 rounded-xl 
                           animate-fade-in hover:bg-gray-100 transition-colors duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {advice}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <button
              onClick={onRetakeQuiz}
              className="group flex items-center space-x-3 font-mono text-lg font-bold px-8 py-4 
                       bg-primary text-white rounded-lg shadow-lg hover:shadow-xl 
                       transform hover:scale-105 transition-all duration-300 hover:bg-primary/90"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Retake Quiz</span>
            </button>

            <button
              onClick={() => setShowShareModal(true)}
              className="group flex items-center space-x-3 font-mono text-lg font-bold px-8 py-4 
                       bg-accent text-white rounded-lg shadow-lg hover:shadow-xl 
                       transform hover:scale-105 transition-all duration-300 hover:bg-accent/90"
            >
              <Share2 className="w-5 h-5" />
              <span>Share Your Results</span>
            </button>

            <button
              onClick={() => setShowTouchGrassModal(true)}
              className="group flex items-center space-x-3 font-mono text-lg font-bold px-8 py-4 
                       bg-success text-white rounded-lg shadow-lg hover:shadow-xl 
                       transform hover:scale-105 transition-all duration-300 hover:bg-success/90"
            >
              <Grass className="w-5 h-5" />
              <span>Touch Grass</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-12 animate-fade-in">
            <p className="font-mono text-gray-500 text-sm">
              Results are for entertainment purposes only 😉
            </p>
            <p className="font-mono text-gray-400 text-xs mt-2">
              Made with questionable judgment at shitbruh.wtf
            </p>
          </div>
        </div>
      </div>

      <ShareModal 
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        result={result}
      />

      <TouchGrassModal
        isOpen={showTouchGrassModal}
        onClose={() => setShowTouchGrassModal(false)}
      />
    </>
  );
}