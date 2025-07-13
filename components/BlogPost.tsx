import { useState } from "react";

type BlogPostProps = {
    title: string;
    date: string;
    content: string;
};

const BlogPost = ({ title, date, content }) => {
    return (
        <article className="">
            <h1>{title}</h1>
            <p>{date}</p>
        </article>
    )
}

export default BlogPost;