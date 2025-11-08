import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
      aria-label="Toggle language"
    >
      <Globe size={18} className="text-rose-400" />
      <span className="text-sm font-medium text-gray-700">
        {language === 'sq' ? 'EN' : 'SQ'}
      </span>
    </button>
  );
}
