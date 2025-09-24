export const ProgressBar = ({ current, total }) => (
  <div className="flex gap-2">
    {Array.from({ length: total }, (_, index) => (
      <div
        key={index}
        className={`h-2 rounded-full transition-all duration-500 ${
          index < current
            ? 'w-12 bg-gradient-to-r from-pink-400 to-violet-400'
            : index === current
            ? 'w-16 bg-white/50'
            : 'w-8 bg-white/20'
        }`}
      />
    ))}
  </div>
);