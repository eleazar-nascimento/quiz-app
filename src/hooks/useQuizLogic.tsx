import { useState } from "react";

export const useQuizLogic = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [currentQuestion, setCurrentQuestion] = useState<any>(0);
  const [answers, setAnswers] = useState<Array<any>>([]);
  const [result, setResult] = useState<any>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const calculateResult = () => {
    const scores: any = { secure: 0, anxious: 0, avoidant: 0, fearful: 0 };
    
    answers.forEach(answer => {
      Object.keys(scores).forEach(style => {
        scores[style] += answer.score[style];
      });
    });

    const maxScore = Math.max(...Object.values(scores) as any);
    return Object.keys(scores).find(key => scores[key] === maxScore);
  };

  const handleAnswer = (option: any, questionsLength: any) => {
    setIsAnimating(true);
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < questionsLength - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        const style = calculateResult();
        setResult(style);
        setCurrentScreen('result');
      }
      setIsAnimating(false);
    }, 300);
  };

  const resetQuiz = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen('welcome');
      setCurrentQuestion(0);
      setAnswers([]);
      setResult(null);
      setIsAnimating(false);
    }, 300);
  };

  const startQuiz = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen('quiz');
      setIsAnimating(false);
    }, 300);
  };

  return {
    currentScreen,
    currentQuestion,
    result,
    isAnimating,
    handleAnswer,
    resetQuiz,
    startQuiz
  };
};