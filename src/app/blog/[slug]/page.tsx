import React from 'react';
import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog._raw.flattenedPath,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Bulunamadı',
      description: 'Aradığınız blog yazısı bulunamadı.',
    };
  }
  
  return {
    title: `${blog.title} | Merve Ekşi`,
    description: blog.description || 'Merve Ekşi\'nin blog yazısı',
  };
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  
  if (!blog) {
    notFound();
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-56">
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4 text-white">{blog.title}</h1>
        <div className="text-gray-400 mb-8">
          <time>{blog.publishedAt}</time>
        </div>
        
        {blog.image && (
          <div className="mb-8">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
        
        <div className="prose prose-invert max-w-none">
          {/* Contentlayer'ın sağladığı MDX içeriği burada render edilecek */}
          <div dangerouslySetInnerHTML={{ __html: blog.body.html }} />
        </div>
      </article>
    </main>
  );
} 