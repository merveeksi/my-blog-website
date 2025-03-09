import React from 'react';
import BlogsArticles from '@/src/components/pages/blogs-articles';

export const metadata = {
  title: 'Blog & Makaleler | Merve Ekşi',
  description: 'Merve Ekşi\'nin blog yazıları ve makaleleri',
};

export default function BlogsArticlesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-56">
      <BlogsArticles />
    </main>
  );
} 