import { ChevronRight } from "lucide-react";

export const ActionButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="group relative inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl shadow-lg"
  >
    <span>{children}</span>
    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
  </button>
);