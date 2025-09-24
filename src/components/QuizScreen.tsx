import { OptionButton } from "./shared/OptionButton";
import { ProgressBar } from "./shared/ProgressBar";

export const QuizScreen = ({ 
  translate, 
  currentQuestion, 
  questions, 
  onAnswer, 
  isAnimating 
}) => (
  <div className="space-y-8">
    <div className="flex justify-between items-center mb-8">
      <ProgressBar current={currentQuestion} total={questions.length} />
      <span className="text-white/60 text-sm font-medium">
        {currentQuestion + 1} {translate('progressIndicator')} {questions.length}
      </span>
    </div>

    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-8 leading-relaxed">
        {questions[currentQuestion].text}
      </h2>
      
      <div className="space-y-3">
        {questions[currentQuestion].options.map((option, index) => (
          <OptionButton
            key={index}
            option={option}
            onClick={() => onAnswer(option)}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  </div>
);