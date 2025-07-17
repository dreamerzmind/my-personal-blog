// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addBlog, getBlogs } from "@/mock/blog";
import { BlogPosts } from "@/types/blogs";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};




export default function GET(
  req: NextApiRequest,
  res: NextApiResponse<BlogPosts | undefined>,
) {
  if (req.method === 'GET') {
    const {slug} = req.query;
    const blogPost = getBlogs().find(item => item.id === slug)
    res.status(200).json(blogPost);
  }
}
