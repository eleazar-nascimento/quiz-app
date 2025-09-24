import { ActionButton } from "./shared/ActionButton";
import { GrowthSection } from "./GrowthSection";
import { StrengthsSection } from "./StrengthsSection";

export const ResultScreen = ({ translate, result, attachmentStyles, onRestart }) => (
  <div className="space-y-8">
    <div className="text-center">
      <div className={`inline-flex p-6 rounded-full bg-gradient-to-br ${attachmentStyles[result].color} text-white mb-6 shadow-2xl`}>
        {attachmentStyles[result].icon}
      </div>
      
      <h2 className="text-5xl font-bold text-white mb-4">
        {attachmentStyles[result].title}
      </h2>
      
      <p className="text-xl text-gray-200 max-w-lg mx-auto leading-relaxed mb-8">
        {attachmentStyles[result].description}
      </p>
    </div>

    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl space-y-6">
      <StrengthsSection 
        title={translate('yourStrengthsTitle')}
        traits={attachmentStyles[result].traits}
      />
      
      <GrowthSection
        title={translate('growthPathTitle')}
        growth={attachmentStyles[result].growth}
      />
    </div>

    <div className="text-center">
      <ActionButton onClick={onRestart}>
        {translate('takeQuizAgainButton')}
      </ActionButton>
    </div>
  </div>
);
