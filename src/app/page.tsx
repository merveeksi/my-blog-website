import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-56">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black dark:text-white">
          Merve Ekşi
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12">
          Web Geliştirici & Tasarımcı
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <Link 
            href="/blogs-articles" 
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Blog & Makaleler
          </Link>
          <Link 
            href="/projects" 
            className="px-8 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-lg"
          >
            Projelerim
          </Link>
        </div>
        
        <div className="mt-12 p-8 bg-gray-100/80 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Hakkımda</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Merhaba! Ben Merve Ekşi. Web geliştirme ve tasarım konularında tutkulu bir yazılımcıyım. 
            Modern web teknolojileri, kullanıcı deneyimi ve yaratıcı çözümler üzerine çalışıyorum.
          </p>
          <Link 
            href="/about" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Daha fazla bilgi →
          </Link>
        </div>
      </div>
    </main>
  )
}
