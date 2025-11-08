import { LanguageToggle } from './LanguageToggle';
import { Heart } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="bg-gradient-to-br from-rose-400 to-pink-400 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Heart size={24} className="text-white" fill="white" />
            </div>
            <span className="text-xl font-bold text-gray-800">RiseMama</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-700 hover:text-rose-400 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-rose-400 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-rose-400 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
