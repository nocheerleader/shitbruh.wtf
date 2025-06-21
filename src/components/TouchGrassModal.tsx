import React from 'react';
import { X, Grab as Grass, Heart, Ear } from 'lucide-react';

interface TouchGrassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const grassAdvice = [
  {
    icon: Heart,
    text: "Don't be afraid to express your own needs",
    emoji: "🗣️"
  },
  {
    icon: Ear,
    text: "Try listening without planning your comeback",
    emoji: "👂"
  },
  {
    icon: Grass,
    text: "Consider that your opinion isn't always needed",
    emoji: "🤐"
  }
];

export function TouchGrassModal({ isOpen, onClose }: TouchGrassModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full animate-scale-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-mono text-2xl font-bold text-gray-900">Touch Grass Resources</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🌱</div>
          <p className="font-mono text-lg text-gray-600">
            How to become less of a shit bro:
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {grassAdvice.map((advice, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 bg-success/5 rounded-xl border border-success/20
                       animate-fade-in hover:bg-success/10 transition-colors duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-3xl">{advice.emoji}</div>
              <advice.icon className="w-6 h-6 text-success" />
              <span className="font-mono text-gray-800 font-medium">
                {advice.text}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-mono text-sm text-gray-500 mb-4">
            Small steps toward not being terrible 👍
          </p>
          
          <button
            onClick={onClose}
            className="font-mono font-bold px-6 py-3 bg-success text-white rounded-lg
                     hover:bg-success/90 transition-colors duration-300"
          >
            I'll Try (Maybe)
          </button>
        </div>

        <p className="font-mono text-xs text-gray-400 text-center mt-4">
          Disclaimer: Results may vary. Side effects include becoming tolerable.
        </p>
      </div>
    </div>
  );
}