'use client';

import StarWarsButton from '@/src/components/Buttons/star-wars-button'
export default function ContactForm() {
  return (
    <div 
      className="
        p-8 rounded-xl backdrop-blur-sm 
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
        Bize Ulaşın
      </h2>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          alert('Form submit simülasyonu!');
        }}
        className="space-y-4"
      >
        <div>
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            İsim
          </label>
          <input 
            id="name"
            name="name"
            type="text"
            required
            className="
              w-full px-4 py-2 rounded-lg 
              text-gray-900 dark:text-white 
              bg-white/90 dark:bg-black/50 
              border border-gray-300 dark:border-gray-600 
              focus:outline-none focus:border-pink-500
              placeholder-gray-500 dark:placeholder-gray-400
            "
            placeholder="Adınızı girin"
          />
        </div>

        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            E-posta
          </label>
          <input 
            id="email"
            name="email"
            type="email"
            required
            className="
              w-full px-4 py-2 rounded-lg 
              text-gray-900 dark:text-white 
              bg-white/90 dark:bg-black/50 
              border border-gray-300 dark:border-gray-600 
              focus:outline-none focus:border-pink-500
              placeholder-gray-500 dark:placeholder-gray-400
            "
            placeholder="E-posta adresinizi girin"
          />
        </div>

        <div>
          <label 
            htmlFor="message" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Mesajınız
          </label>
          <textarea 
            id="message"
            name="message"
            rows={4}
            className="
              w-full px-4 py-2 rounded-lg 
              text-gray-900 dark:text-white 
              bg-white/90 dark:bg-black/50 
              border border-gray-300 dark:border-gray-600 
              focus:outline-none focus:border-pink-500
              placeholder-gray-500 dark:placeholder-gray-400
            "
            placeholder="Mesajınızı yazın..."
          />
        </div>

        <StarWarsButton>
          Gönder
        </StarWarsButton>
      </form>
    </div>
  );
} 