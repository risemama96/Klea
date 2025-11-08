import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../contexts/LanguageContext';

interface ContentItem {
  section: string;
  key: string;
  value_sq: string;
  value_en: string;
}

interface Content {
  [section: string]: {
    [key: string]: string;
  };
}

export function useContent() {
  const { language } = useLanguage();
  const [content, setContent] = useState<Content>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('*');

      if (error) throw error;

      const organized: Content = {};
      data?.forEach((item: ContentItem) => {
        if (!organized[item.section]) {
          organized[item.section] = {};
        }
        organized[item.section][item.key] = language === 'sq' ? item.value_sq : item.value_en;
      });

      setContent(organized);
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, [language]);

  return { content, loading };
}
