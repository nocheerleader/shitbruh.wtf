import { useState, useCallback } from 'react';
import { QuizState, Question } from '../types/quiz';
import { getRandomQuestions } from '../data/questions';
import { calculateResult } from '../data/results';

export function useQuiz() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedQuestions: [],
    answers: [],
    isComplete: false,
    result: null,
  });

  const startQuiz = useCallback(() => {
    const questions = getRandomQuestions(6);
    setQuizState({
      currentQuestionIndex: 0,
      selectedQuestions: questions,
      answers: [],
      isComplete: false,
      result: null,
    });
  }, []);

  const answerQuestion = useCallback((answerIndex: number) => {
    setQuizState(prev => {
      const newAnswers = [...prev.answers, answerIndex];
      const nextIndex = prev.currentQuestionIndex + 1;
      
      if (nextIndex >= prev.selectedQuestions.length) {
        // Quiz complete, calculate result
        const totalRedFlags = newAnswers.reduce((sum, answerIdx, questionIdx) => {
          return sum + prev.selectedQuestions[questionIdx].answers[answerIdx].redFlags;
        }, 0);
        
        const result = calculateResult(totalRedFlags);
        
        return {
          ...prev,
          answers: newAnswers,
          isComplete: true,
          result,
        };
      }
      
      return {
        ...prev,
        currentQuestionIndex: nextIndex,
        answers: newAnswers,
      };
    });
  }, []);

  const resetQuiz = useCallback(() => {
    setQuizState({
      currentQuestionIndex: 0,
      selectedQuestions: [],
      answers: [],
      isComplete: false,
      result: null,
    });
  }, []);

  return {
    quizState,
    startQuiz,
    answerQuestion,
    resetQuiz,
  };
}