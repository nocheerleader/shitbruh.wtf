import React from 'react';
import { useQuiz } from './hooks/useQuiz';
import { Hero } from './components/Hero';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';

function App() {
  const { quizState, startQuiz, answerQuestion, resetQuiz } = useQuiz();

  const renderCurrentView = () => {
    if (quizState.isComplete && quizState.result) {
      return (
        <Results 
          result={quizState.result}
          onRetakeQuiz={resetQuiz}
        />
      );
    }

    if (quizState.selectedQuestions.length > 0) {
      return (
        <Quiz 
          quizState={quizState}
          onAnswerQuestion={answerQuestion}
        />
      );
    }

    return <Hero onStartQuiz={startQuiz} />;
  };

  return (
    <div className="font-mono">
      {renderCurrentView()}
    </div>
  );
}

export default App;