// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addBlog, getBlogs } from "@/mock/blog";
import { BlogPosts } from "@/types/blogs";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlogPosts[]>,
) {
//   addBlog({
//     id: '4',
//     title: 'Creating My Personal  4',
//     date: 'July 1, 2025',
//     author: 'Manal Ibrahim',
//     content: 'This is a simple blog post.',
//     tags: ['typescript', 'react', 'blog']
// });
  res.status(200).json(getBlogs());
}
