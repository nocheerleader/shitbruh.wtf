export interface Question {
  id: string;
  question: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  emoji: string;
  redFlags: number;
}

export interface QuizResult {
  totalRedFlags: number;
  title: string;
  description: string;
  emoji: string;
  advice: string[];
}

export interface QuizState {
  currentQuestionIndex: number;
  selectedQuestions: Question[];
  answers: number[];
  isComplete: boolean;
  result: QuizResult | null;
}