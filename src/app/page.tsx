import Image from 'next/image'
import { allBlogs } from 'contentlayer/generated';
//import HomeCoverSection from '../components/Home/HomeCoverSection';
import BlogsArticles from '../components/pages/blogs-articles';

export default function Home() {
  // More detailed logging to debug
  console.log("All Blogs:", allBlogs);
  console.log("All Blogs length:", allBlogs?.length);
  if (allBlogs && allBlogs.length > 0) {
    console.log("First blog:", allBlogs[0]);
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/*<HomeCoverSection blogs={allBlogs}/>*/}
      <BlogsArticles blogs={allBlogs}/>
    </main>
  )
}
