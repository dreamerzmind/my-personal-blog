import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { BlogPosts } from "@/types/blogs";
import { User } from "@/types/user";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function About() {

  const [data,setData] = useState<User | undefined>(undefined)

  useEffect(()=>{
    getUser();
  },[])

  // userouter dynamic navigatio

    async function getUser() {
      let blogs = await fetch('/api/users');
      let data = await blogs.json();    
      setData(data)
      console.log("data is ", data);

    }

    return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>About page</div>
        {data && <h1>{data.name}</h1>}
        {/* {data !== undefined && <h1>{data.name}</h1>} */}
       
      </main>

    </div>
  );
}
