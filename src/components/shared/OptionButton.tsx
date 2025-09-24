export const OptionButton = ({ option, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-full text-left p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <span className="text-lg leading-relaxed">{option.text}</span>
  </button>
);