import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { BlogPosts } from "@/types/blogs";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { useRouter } from "next/router";
 
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

export default function Page() {

  const router = useRouter()
  const [data,setData] = useState<BlogPosts | undefined>(undefined)
  
  // fetch the blog data using blogId and display it

  // const [data,setData] = useState<BlogPosts[]>([])

  // userouter dynamic navigatio

  useEffect(()=>{
    const slug = router.query.slug;
    console.log("slug", slug);
    
    if(slug && typeof slug === 'string'){
      getUser(slug);
    }
    
  },[router.query.slug])

  // userouter dynamic navigatio

    async function getUser(slug:string) {

      try{
        let blogs = await fetch(`/api/blogs/${slug}`, {method:'GET'});
        let data = await blogs.json();    
        setData(data)
        console.log("data is ", data);  
      }catch(excetpion){

      }

    }

    return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>Blog page Details</div>
        {data && <h1>{data.title}</h1>}

        {/* {blogs && blogs.map(item => {
          return <div>
            <h2 key={item.id}>{item.title}</h2>
            <h2 key={item.id}>{item.author}</h2>
          </div>
        })} */}
        {/* <Button className="bg-red-50" onClick={() => {
          console.log("button clicked");
          // getBlog();
        }}>CLick me</Button> */}
      </main>

    </div>
  );
}
