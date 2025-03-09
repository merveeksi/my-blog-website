import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { slug } from 'github-slugger';

import { sortBlogs, Blog } from '@/src/utils';
// Eğer Tag component'in varsa import et, yoksa kaldır
import Tag from '../Elements/tag'; 
import { allBlogs } from 'contentlayer/generated';

interface BlogsArticlesProps {
  blogs?: Blog[];
}

export default function BlogsArticles({ blogs = allBlogs }: BlogsArticlesProps) {
  if (!blogs || blogs.length === 0) {
    return <p className="text-center mt-10 text-white">Hiç blog bulunamadı.</p>;
  }

  // 1) Blogları sıralayalım (en yeni, en eski vs.)
  const sortedBlogs = sortBlogs(blogs);

  // 2) İlk blogu "cover" olarak alalım
  const firstBlog = sortedBlogs[0];

  // 3) Geri kalan blogları listelemek için slice(1)
  const otherBlogs = sortedBlogs.slice(1);

  return (
    <div className="w-full inline-block mt-28">
      {/* COVER SECTION (İlk Blog) */}
      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[50vh] sm:h-[70vh]">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0"
        />

        {/* Kapak Görseli */}
        {firstBlog.image ? (
          <Image
            src={firstBlog.image}
            alt={firstBlog.title || 'Kapak görseli'}
            fill
            className="w-full h-full object-center object-cover rounded-3xl -z-10"
            sizes="100vw"
            priority
          />
        ) : (
          <p className="text-gray-500 italic">
            Bu yazı için görsel bulunamadı.
          </p>
        )}

        {/* Kapak Üstü Metin */}
        <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
          {/* Tag varsa */}
          {firstBlog.tags && firstBlog.tags.length > 0 && (
            <Tag
              link={`/categories/${slug(firstBlog.tags[0])}`}
              name={firstBlog.tags[0]}
            />
          )}

          {/* Eğer blog.url varsa bunu kullan, yoksa _raw.flattenedPath */}
          <Link
            href={`/blog/${firstBlog._raw.flattenedPath}`} // Contentlayer'dan gelen slug
            className="mt-6"
          >
            <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
              <span
                className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50
                dark:to-accentDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
              >
                {firstBlog.title}
              </span>
            </h1>
          </Link>

          {firstBlog.description && (
            <p className="hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-in">
              {firstBlog.description}
            </p>
          )}
        </div>
      </article>

      {/* ALT KISIM (Diğer Bloglar) */}
      <section className="pt-24 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Tüm Bloglar
        </h2>
        <ul className="space-y-6 w-full max-w-3xl mx-auto">
          {otherBlogs.map((blog) => (
            <li key={blog._id} className="border-b border-gray-600 pb-4">
              {/* Başlık */}
              <Link
                href={`/blog/${blog._raw.flattenedPath}`}
                className="text-blue-400 hover:underline text-lg font-semibold"
              >
                {blog.title}
              </Link>
              <p className="text-gray-400 text-sm">{blog.date}</p>

              {/* Resim varsa */}
              {blog.image ? (
                <Image
                  src={blog.image}
                  alt={blog.title || 'Blog post image'}
                  width={600}
                  height={400}
                  className="rounded-lg mt-4 w-full max-w-lg -z-10"
                />
              ) : (
                <p className="text-gray-500 italic">
                  Bu yazı için görsel bulunamadı.
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}