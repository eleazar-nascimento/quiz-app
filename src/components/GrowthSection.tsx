export const GrowthSection = ({ title, growth }: any) => (
  <div>
    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-gray-200 leading-relaxed">{growth}</p>
  </div>
);