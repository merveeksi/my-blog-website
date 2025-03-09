'use client'; // Bu dosya artık client component

import { useState } from 'react';
import Link from 'next/link';
import StarWarsButton from '@/src/components/Buttons/star-wars-button'

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqItems = [
    {
      question: 'Hangi teknolojileri kullanıyorsunuz?',
      answer:
        'Web geliştirme projelerimde genellikle React, Next.js, TypeScript, Tailwind CSS gibi modern teknolojileri kullanıyorum. Backend tarafında ise Node.js, Express ve çeşitli veritabanı teknolojileri ile çalışıyorum.',
    },
    {
      question: 'Freelance çalışıyor musunuz?',
      answer:
        'Evet, freelance projeler için müsaitim. İletişim sayfasından benimle iletişime geçerek projeleriniz hakkında konuşabiliriz.',
    },
    {
      question: 'Blog yazılarınızı hangi sıklıkla paylaşıyorsunuz?',
      answer:
        'Blog yazılarımı genellikle ayda 2-3 kez paylaşmaya çalışıyorum. Yazılarımda web geliştirme, tasarım trendleri ve kişisel deneyimlerim hakkında içerikler bulabilirsiniz.',
    },
    {
      question: 'Eğitim veya mentorluk hizmeti veriyor musunuz?',
      answer:
        'Şu anda sınırlı sayıda öğrenciye mentorluk hizmeti veriyorum. Detaylı bilgi için iletişim sayfasından bana ulaşabilirsiniz.',
    },
    {
      question: 'Projelerinizin kaynak kodlarına erişebilir miyim?',
      answer:
        'Açık kaynak projelerimin kodlarına GitHub hesabım üzerinden erişebilirsiniz. Bazı özel projeler müşteri gizliliği nedeniyle paylaşılmamaktadır.',
    },
    {
      question: 'İş birliği teklifleri için nasıl iletişime geçebilirim?',
      answer:
        'İş birliği teklifleri için iletişim sayfasındaki formu doldurabilir veya doğrudan e-posta adresime mesaj gönderebilirsiniz.',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-24 md:py-32 mt-24">
      <div className="max-w-4xl w-full mx-auto">
        <h1
          className="
            text-4xl md:text-5xl font-bold mb-8 
            text-transparent bg-clip-text 
            bg-gradient-to-r from-pink-500 to-yellow-500 
            text-center
          "
        >
          Sıkça Sorulan Sorular
        </h1>

        <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Merve Ekşi'nin blog ve projeleri hakkında merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.
        </p>

        <div className="space-y-6 mt-12">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="
                  p-6 rounded-xl backdrop-blur-sm transition-all 
                  border border-gray-300 dark:border-gray-700 hover:border-pink-500/80
                  bg-gray-100/80 dark:bg-black/30 hover:bg-gray-200/80 dark:hover:bg-black/50"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.question}
                  </span>
                  <svg
                    className={`w-5 h-5 ml-2 text-gray-700 dark:text-white transform transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mt-4">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div
          className="
            mt-12 p-6 rounded-xl backdrop-blur-sm text-center 
            bg-gray-100/80 dark:bg-black/20 
            border border-gray-300 dark:border-gray-700
            hover:border-yellow-500/80 transition-colors
          "
        >
          <h2
            className="
              text-2xl font-bold mb-4 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-yellow-400 to-pink-500
            "
          >
            Başka Sorularınız Var mı?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-8 max-w-xl mx-auto">
            Burada cevabını bulamadığınız sorular için benimle iletişime geçebilirsiniz.
          </p>
          <Link href="/contact">
            <StarWarsButton>
              İletişime Geç
            </StarWarsButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
