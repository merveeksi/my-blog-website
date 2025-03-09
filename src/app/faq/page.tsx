import { Metadata } from 'next';
import FAQClient from './faq-client'; // Client component'ımız

// Sadece server component dosyalarında metadata tanımlayabilirsiniz
export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular | Merve Ekşi',
  description: "Merve Ekşi'nin blog ve projeleri hakkında sıkça sorulan sorular ve cevapları",
};

export default function FAQPage() {
  
  return (
    <FAQClient />
  );
}
