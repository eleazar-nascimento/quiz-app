import { ActionButton } from "./shared/ActionButton";

export const WelcomeScreen = ({ translate, onStart }: any) => (
  <div className="text-center space-y-8">
    <div className="relative">
      <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-500 to-violet-600 opacity-30 rounded-full"></div>
      <h1 className="relative text-6xl font-bold text-white mb-4 tracking-tight">
        {translate('discoverTitle')}
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
          {translate('attachmentStyleTitle')}
        </span>
      </h1>
    </div>
    
    <p className="text-xl text-gray-200 max-w-md mx-auto leading-relaxed">
      {translate('welcomeDescription')}
    </p>
    
    <ActionButton onClick={onStart}>
      {translate('beginJourneyButton')}
    </ActionButton>
  </div>
);
