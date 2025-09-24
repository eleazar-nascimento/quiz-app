export const StrengthsSection = ({ title, traits }: any) => (
  <div>
    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
    <div className="grid grid-cols-2 gap-3">
      {traits.map((trait: any, index: any) => (
        <div
          key={index}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white/90 text-center"
        >
          {trait}
        </div>
      ))}
    </div>
  </div>
);