import React from 'react';
import { QuizState } from '../types/quiz';

interface QuizProps {
  quizState: QuizState;
  onAnswerQuestion: (answerIndex: number) => void;
}

export function Quiz({ quizState, onAnswerQuestion }: QuizProps) {
  const { currentQuestionIndex, selectedQuestions } = quizState;
  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/5 via-white to-primary/5 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-mono text-sm text-gray-500">
              Question {currentQuestionIndex + 1} of {selectedQuestions.length}
            </span>
            <span className="font-mono text-sm text-gray-500">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-slide-in">
          <h2 className="font-mono text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
            {currentQuestion.question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-4">
            {currentQuestion.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => onAnswerQuestion(index)}
                className="group w-full p-6 bg-gray-50 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 
                         rounded-xl border-2 border-gray-200 hover:border-primary/30 
                         transition-all duration-300 text-left
                         transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{answer.emoji}</span>
                  <span className="font-mono text-lg text-gray-800 group-hover:text-gray-900 font-medium">
                    {answer.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Fun Encouragement */}
        <div className="text-center">
          <p className="font-mono text-gray-500 text-sm animate-fade-in">
            Choose wisely... or don't 🤷‍♂️
          </p>
        </div>
      </div>
    </div>
  );
}