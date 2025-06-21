import React from 'react';
import { Beer, Dumbbell, Gamepad2, Trophy } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
}

export function Hero({ onStartQuiz }: HeroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-accent/10 flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Beer className="absolute top-20 left-20 text-secondary animate-float text-4xl opacity-20" />
        <Dumbbell className="absolute top-32 right-32 text-primary animate-bounce-slow text-3xl opacity-20" />
        <Gamepad2 className="absolute bottom-40 left-40 text-accent animate-pulse-slow text-3xl opacity-20" />
        <Trophy className="absolute bottom-20 right-20 text-warning animate-float text-4xl opacity-20" />
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-secondary/20 rounded-full animate-bounce-slow" />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary/20 rounded-full animate-float" />
        <div className="absolute bottom-1/3 left-1/2 w-10 h-10 bg-accent/20 rounded-full animate-pulse-slow" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="font-mono text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="inline-block animate-slide-in">ARE</span>{' '}
            <span className="inline-block animate-slide-in animation-delay-100">YOU</span>{' '}
            <span className="inline-block animate-slide-in animation-delay-200">A</span>
            <br />
            <span className="text-primary inline-block animate-slide-in animation-delay-300">SHIT</span>{' '}
            <span className="text-accent inline-block animate-slide-in animation-delay-400">BRO</span>
            <span className="text-warning inline-block animate-slide-in animation-delay-500">?</span>
          </h1>
          
          <p className="font-mono text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            One brutally honest quiz 
          </p>
          
          <p className="font-mono text-lg text-gray-500 mb-12 animate-fade-in">
            Six questions • Zero chill
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={onStartQuiz}
          className="group relative font-mono text-xl font-bold px-12 py-6 bg-primary text-white rounded-lg 
                   shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300
                   hover:bg-primary/90 active:scale-95 animate-scale-in"
        >
          <span className="relative z-10">Find Out, Bro</span>
          <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Subtitle */}
        <p className="font-mono text-sm text-gray-400 mt-6 animate-fade-in">
          Prepare for emotional damage 💀
        </p>
      </div>
    </div>
  );
}