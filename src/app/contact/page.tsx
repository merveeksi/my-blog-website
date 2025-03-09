import { Metadata } from 'next';
import ContactForm from './contact-form';
import { SparklesText } from '@/src/components/ui/sparkles-text';

// ---- Metadata (sadece Server Component'te geçerli) ----
export const metadata: Metadata = {
  title: 'İletişim | Merve Ekşi',
  description: 'Merve Ekşi ile iletişim kurmak için formu doldurun veya sosyal medya hesaplarından ulaşın.',
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center min-h-screen px-4 py-24 md:py-32 mt-24">
      <div className="max-w-4xl w-full mx-auto">
        {/* Başlık */}
        <div className="flex justify-center mb-4">
          <SparklesText 
            text="İletişim" 
            className="text-4xl md:text-5xl font-bold text-center"
            colors={{ first: "#FF5E8A", second: "#FFBB38" }}
          />
        </div>
        <p className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Projeleriniz hakkında konuşmak, sorularınızı sormak veya iş birlikleri için bana ulaşabilirsiniz.
        </p>

        {/* Ana içerik alanı: İsterseniz 2 kolon veya tek kolon şeklinde düzenleyebilirsiniz */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sol sütun: İletişim bilgileri veya açıklama */}
          <div className="space-y-6">
            <div 
              className="
                p-6 bg-gray-100/80 dark:bg-black/30 
                border border-gray-300 dark:border-gray-700 
                rounded-xl backdrop-blur-sm
                hover:border-pink-500/80 transition-colors
              "
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                E-posta
              </h2>
              <p className="text-gray-700 dark:text-gray-300">merve.eksi@yazilim.academy</p>
            </div>

            <div 
              className="
                p-6 bg-gray-100/80 dark:bg-black/30 
                border border-gray-300 dark:border-gray-700 
                rounded-xl backdrop-blur-sm 
                hover:border-yellow-500/80 transition-colors
              "
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Sosyal Medya
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Aşağıdaki platformlar üzerinden de bana ulaşabilirsiniz:
              </p>
              <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                {/* Örnek ikonlar, Tailwind icons veya Heroicons vb. kullanabilirsiniz */}

                <a 
                  href="https://www.linkedin.com/in/merveeksi/" 
                  className="hover:text-pink-500 transition-colors"
                >
                  <svg 
                    className="w-5 h-5 inline-block mr-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/username" 
                  className="hover:text-pink-500 transition-colors"
                >
                  <svg 
                    className="w-5 h-5 inline-block mr-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.371.5 0 5.871 0 12.5c0 5.302 3.438 9.799 8.205 11.387.599.111.793-.261.793-.58 0-.286-.011-1.244-.017-2.416-3.338.725-4.042-1.611-4.042-1.611C4.356 18.119 3.5 17.781 3.5 17.781c-1.088-.744.083-.729.083-.729 1.204.084 1.839 1.235 1.839 1.235 1.07 1.836 2.805 1.305 3.489.998.108-.775.419-1.305.761-1.605-2.665-.305-5.466-1.333-5.466-5.933 0-1.311.469-2.38 1.236-3.22-.123-.305-.536-1.532.118-3.194 0 0 1.009-.322 3.301 1.228A11.523 11.523 0 0 1 12 6.806c1.022.005 2.049.138 3.008.403 2.29-1.55 3.298-1.228 3.298-1.228.656 1.662.242 2.889.12 3.194.77.84 1.235 1.909 1.235 3.22 0 4.611-2.805 5.624-5.479 5.92.43.37.813 1.102.813 2.22 0 1.604-.014 2.896-.014 3.286 0 .323.193.696.8.58C20.565 22.297 24 17.801 24 12.5 24 5.871 18.627.5 12 .5z" />
                  </svg>
                  Github
                </a>

                <a 
                  href="https://twitter.com/username" 
                  className="hover:text-pink-500 transition-colors"
                >
                  <svg 
                    className="w-5 h-5 inline-block mr-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.954 4.569c-.885.392-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.96-3.127 1.184C18.845 2.847 17.725 2 16.49 2c-2.356 0-4.278 1.886-4.278 4.217 0 .33.04.652.108.96C8.092 6.835 4.29 4.915 1.64 1.907c-.364.61-.57 1.31-.57 2.06 0 1.422.755 2.683 1.896 3.421-.698-.022-1.36-.21-1.936-.525v.05c0 1.984 1.445 3.637 3.355 4.013-.352.094-.725.145-1.108.145-.272 0-.536-.027-.793-.076.537 1.653 2.108 2.854 3.963 2.89-1.45 1.13-3.276 1.808-5.265 1.808-.34 0-.675-.02-1.006-.057C2.905 18.29 5.77 19 8.92 19c10.692 0 16.54-8.672 16.54-16.19 0-.248-.006-.496-.017-.742A11.62 11.62 0 0 0 24 2.557c-.883.38-1.83.637-2.824.752l.778-.74z" />
                  </svg>
                  Twitter
                </a>
              </div>
            </div>
          </div>
          
          {/* Sağ sütun: İletişim Formu */}
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
