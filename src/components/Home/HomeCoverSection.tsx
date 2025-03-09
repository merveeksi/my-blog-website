import { sortBlogs, Blog } from '@/src/utils'
import React from 'react'
import Image from 'next/image'

interface HomeCoverSectionProps {
  blogs: Blog | Blog[];
}

const HomeCoverSection = ({ blogs }: HomeCoverSectionProps)=> {
    // Check if blogs exists and is not empty
    if (!blogs || (Array.isArray(blogs) && blogs.length === 0)) {
      return <div>No blogs available</div>;
    }
    
    // Handle both single blog or array of blogs
    const blog = Array.isArray(blogs) ? sortBlogs(blogs)[0] : blogs;
    
    // Check if blog has image property
    if (!blog || !blog.image) {
      return <div>Blog image not available</div>;
    }
    
    return (
    <article className='w-full flex flex-col items-center justify-end mx-10 relative h-[85vh]'>
        <Image 
        src={blog.image}
        alt={blog.title || "Blog post image"}
        fill
        className='w-full h-full object-cover object-center rounded-lg'
        />
    </article>
  )
}

export default HomeCoverSection