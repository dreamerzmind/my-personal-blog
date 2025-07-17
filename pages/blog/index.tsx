import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Button from "@/components/Button";
import { useState } from "react";
import { BlogPosts } from "@/types/blogs";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface PageProps{
  blogs: BlogPosts[]
}

export const getStaticProps : GetStaticProps<PageProps>= (async () => {
  const data = await fetch('http://localhost:3000/api/blogs');
  const blogs = await data.json();    
  console.log("data is ", data);

  return { props: { blogs } }
}) satisfies GetStaticProps<{
  blogs: BlogPosts[]
}>

export default function Home({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const [data,setData] = useState<BlogPosts[]>([])

  // userouter dynamic navigatio


    return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>Blog page</div>
        {/* {blogs && blogs.map(item => {
          return <div>
            <h2 key={item.id}>{item.title}</h2>
            <h2 key={item.id}>{item.author}</h2>
          </div>
        })} */}
        <Button className="bg-red-50" onClick={() => {
          console.log("button clicked");
          // getBlog();
        }}>CLick me</Button>
      </main>

    </div>
  );
}
