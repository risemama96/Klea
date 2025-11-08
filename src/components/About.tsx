import { useContent } from '../hooks/useContent';
import { Heart, Users, BookOpen } from 'lucide-react';

export function About() {
  const { content } = useContent();

  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-rose-50 to-pink-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
            {content.about?.title}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-12 rounded-full"></div>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-16 max-w-3xl mx-auto">
            {content.about?.description}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-rose-400 to-pink-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
                {content.about?.title === 'About Us' ? 'Care' : 'Kujdes'}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {content.about?.title === 'About Us'
                  ? 'Providing compassionate support at every stage of motherhood'
                  : 'Ofrimi i mbështetjes me dashuri në çdo fazë të amësisë'}
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-rose-400 to-pink-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
                {content.about?.title === 'About Us' ? 'Community' : 'Komuniteti'}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {content.about?.title === 'About Us'
                  ? 'Building a warm, understanding community of mothers'
                  : 'Ndërtimi i një komuniteti të ngrohtë dhe të kuptueshëm të nënave'}
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-rose-400 to-pink-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <BookOpen size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
                {content.about?.title === 'About Us' ? 'Knowledge' : 'Njohuri'}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {content.about?.title === 'About Us'
                  ? 'Sharing trusted advice and information for mothers'
                  : 'Ndarja e këshillave dhe informacionit të besueshëm për nënat'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
