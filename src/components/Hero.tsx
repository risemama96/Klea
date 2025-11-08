import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../hooks/useContent';
import { Heart } from 'lucide-react';

export function Hero() {
  const { language } = useLanguage();
  const { content } = useContent();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-rose-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-pulse">
            <div className="bg-gradient-to-br from-rose-400 to-pink-400 p-6 rounded-full shadow-lg">
              <Heart size={48} className="text-white" fill="white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 leading-tight">
            {content.home?.title || 'RiseMama'}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            {content.home?.subtitle}
          </p>

          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {content.home?.cta}
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
