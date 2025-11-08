import { useState, FormEvent } from 'react';
import { useContent } from '../hooks/useContent';
import { supabase } from '../lib/supabase';
import { Instagram, Facebook, Mail, Send } from 'lucide-react';

export function Contact() {
  const { content } = useContent();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
            {content.contact?.title}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-8 rounded-full"></div>

          <p className="text-lg text-gray-700 text-center mb-12">
            {content.contact?.description}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <Mail className="text-rose-400" size={24} />
                  {content.contact?.title === 'Contact Us' ? 'Get in Touch' : 'Na Kontaktoni'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {content.contact?.name_label}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {content.contact?.email_label}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {content.contact?.message_label}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 outline-none transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <span>{content.contact?.title === 'Contact Us' ? 'Sending...' : 'Duke dërguar...'}</span>
                    ) : (
                      <>
                        {content.contact?.submit}
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  {status === 'success' && (
                    <p className="text-green-600 text-center text-sm">{content.contact?.success}</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-600 text-center text-sm">
                      {content.contact?.title === 'Contact Us' ? 'Something went wrong. Please try again.' : 'Diçka shkoi gabim. Ju lutem provoni përsëri.'}
                    </p>
                  )}
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  {content.contact?.title === 'Contact Us' ? 'Follow Us' : 'Na Ndiqni'}
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://instagram.com/risemama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-rose-50 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-rose-400 to-pink-400 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Instagram size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Instagram</p>
                      <p className="text-sm text-gray-600">@risemama</p>
                    </div>
                  </a>
                  <a
                    href="https://facebook.com/risemama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-rose-50 transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-rose-400 to-pink-400 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Facebook size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Facebook</p>
                      <p className="text-sm text-gray-600">RiseMama</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-rose-400 to-pink-400 rounded-3xl p-8 shadow-lg text-white">
                <h3 className="text-xl font-semibold mb-3">
                  {content.contact?.title === 'Contact Us' ? 'Join Our Community' : 'Bashkohu me Komunitetin Tonë'}
                </h3>
                <p className="text-rose-50 leading-relaxed">
                  {content.contact?.title === 'Contact Us'
                    ? 'Connect with other mothers, share experiences, and receive support throughout your journey.'
                    : 'Lidhuni me nëna të tjera, ndani përvoja dhe merrni mbështetje gjatë gjithë udhëtimit tuaj.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
