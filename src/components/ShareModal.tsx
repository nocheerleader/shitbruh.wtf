import React from 'react';
import { X, Twitter, Instagram, Copy } from 'lucide-react';
import { QuizResult } from '../types/quiz';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: QuizResult;
}

export function ShareModal({ isOpen, onClose, result }: ShareModalProps) {
  if (!isOpen) return null;

  const shareText = `I just took the "Are You a Shit Bro?" quiz and got: ${result.title} 💀 Find out your red flag count at shitbruh.wtf`;

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(twitterUrl, '_blank');
  };

  const handleInstagramShare = () => {
    // Instagram doesn't support direct text sharing, so we'll copy to clipboard
    navigator.clipboard.writeText(shareText);
    alert('Caption copied! Now paste it in your Instagram story 📸');
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(shareText);
    alert('Copied to clipboard! 📋');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-scale-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-mono text-2xl font-bold text-gray-900">Share Your Results</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <div className="bg-gray-50 p-4 rounded-xl mb-4">
            <div className="text-center mb-3">
              <div className="text-4xl mb-2">{result.emoji}</div>
              <div className="font-mono font-bold text-lg">{result.title}</div>
              <div className="font-mono text-sm text-gray-600">
                {result.totalRedFlags} Red Flags 🚩
              </div>
            </div>
          </div>
          
          <p className="font-mono text-sm text-gray-600 text-center">
            Time to roast your friends (and yourself) 😈
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleTwitterShare}
            className="w-full flex items-center justify-center space-x-3 p-4 bg-blue-500 text-white 
                     rounded-xl hover:bg-blue-600 transition-colors duration-300 font-mono font-bold"
          >
            <Twitter className="w-5 h-5" />
            <span>Share on Twitter</span>
          </button>

          <button
            onClick={handleInstagramShare}
            className="w-full flex items-center justify-center space-x-3 p-4 bg-gradient-to-r from-purple-500 to-pink-500 
                     text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-mono font-bold"
          >
            <Instagram className="w-5 h-5" />
            <span>Copy for Instagram</span>
          </button>

          <button
            onClick={handleCopyToClipboard}
            className="w-full flex items-center justify-center space-x-3 p-4 bg-gray-600 text-white 
                     rounded-xl hover:bg-gray-700 transition-colors duration-300 font-mono font-bold"
          >
            <Copy className="w-5 h-5" />
            <span>Copy to Clipboard</span>
          </button>
        </div>

        <p className="font-mono text-xs text-gray-400 text-center mt-4">
          Prepare for your friends to roast you back 🔥
        </p>
      </div>
    </div>
  );
}