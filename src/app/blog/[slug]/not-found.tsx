import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-56">
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">404 - Blog Bulunamadı</h1>
        <p className="text-gray-400 mb-8">
          Aradığınız blog yazısı bulunamadı veya kaldırılmış olabilir.
        </p>
        <Link 
          href="/blogs-articles" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Tüm Bloglara Dön
        </Link>
      </div>
    </main>
  );
} 