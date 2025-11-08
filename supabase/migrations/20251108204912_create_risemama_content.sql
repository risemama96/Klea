/*
  # RiseMama Content Management Schema

  1. New Tables
    - `site_content`
      - `id` (uuid, primary key)
      - `section` (text) - identifies which section (home, about, contact)
      - `key` (text) - specific content key
      - `value_sq` (text) - Albanian content
      - `value_en` (text) - English content
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Public read access for site_content
    - Public insert access for contact_submissions
*/

CREATE TABLE IF NOT EXISTS site_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section text NOT NULL,
  key text NOT NULL,
  value_sq text NOT NULL,
  value_en text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(section, key)
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view site content"
  ON site_content FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO public
  WITH CHECK (true);

INSERT INTO site_content (section, key, value_sq, value_en) VALUES
('home', 'title', 'Mirë se vini në RiseMama', 'Welcome to RiseMama'),
('home', 'subtitle', 'Fuqizimi dhe mbështetja e çdo nëne, përpara, gjatë dhe pas shtatzënisë', 'Empowering and supporting every mother, before, during, and after pregnancy'),
('home', 'cta', 'Bashkohu me RiseMama', 'Join RiseMama'),
('about', 'title', 'Rreth Nesh', 'About Us'),
('about', 'description', 'RiseMama është një hapësirë e sigurt dhe mbështetëse për të gjitha nënat. Ne besojmë se çdo nënë meriton mbështetje, këshilla dhe një komunitet që e kupton udhëtimin e saj. Qëllimi ynë është të fuqizojmë nënat me informacion të besueshëm, të krijojmë një komunitet të ngrohtë, dhe të ofrojmë kujdes në çdo hap të rrugës së tyre.', 'RiseMama is a safe and supportive space for all mothers. We believe every mother deserves support, guidance, and a community that understands her journey. Our mission is to empower mothers with trusted information, create a warm community, and provide care at every step of their path.'),
('contact', 'title', 'Na Kontaktoni', 'Contact Us'),
('contact', 'description', 'Jeni të mirëpritur të na kontaktoni ose të bashkoheni me komunitetin tonë.', 'Feel free to reach out or join our community.'),
('contact', 'name_label', 'Emri', 'Name'),
('contact', 'email_label', 'Email', 'Email'),
('contact', 'message_label', 'Mesazhi', 'Message'),
('contact', 'submit', 'Dërgo', 'Send'),
('contact', 'success', 'Faleminderit! Mesazhi juaj u dërgua me sukses.', 'Thank you! Your message was sent successfully.');
