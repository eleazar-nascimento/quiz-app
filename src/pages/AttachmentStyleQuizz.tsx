import { QuizScreen } from "../components/QuizScreen";
import { ResultScreen } from "../components/ResultScreen";
import { WelcomeScreen } from "../components/WelcomeScreen";
import { useLocalization } from "../hooks/useLocalization";
import { useQuizData } from "../hooks/useQuizData";
import { useQuizLogic } from "../hooks/useQuizLogic";

const AttachmentStyleQuiz = () => {
  const { translate } = useLocalization();
  const { questions, attachmentStyles } = useQuizData(translate);
  const {
    currentScreen,
    currentQuestion,
    result,
    isAnimating,
    handleAnswer,
    resetQuiz,
    startQuiz
  } = useQuizLogic();

  const handleAnswerWithContext = (option) => {
    handleAnswer(option, questions.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className={`transition-all duration-500 transform ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
          {currentScreen === 'welcome' && (
            <WelcomeScreen translate={translate} onStart={startQuiz} />
          )}

          {currentScreen === 'quiz' && (
            <QuizScreen
              translate={translate}
              currentQuestion={currentQuestion}
              questions={questions}
              onAnswer={handleAnswerWithContext}
              isAnimating={isAnimating}
            />
          )}

          {currentScreen === 'result' && result && (
            <ResultScreen
              translate={translate}
              result={result}
              attachmentStyles={attachmentStyles}
              onRestart={resetQuiz}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AttachmentStyleQuiz;