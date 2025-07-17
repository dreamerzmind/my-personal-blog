import { BlogPost } from "@/pages/api/blog-post";

let BlogPostsData = [{
    id: '1',
    title: 'Creating My Personal Blog',
    date: 'July 1, 2025',
    author: 'Manal Ibrahim',
    content: 'This is a simple blog post.',
    tags: ['typescript', 'react', 'blog']
}, {
    id: '2',
    title: 'Creating My Personal Blog2',
    date: 'July 1, 20252',
    author: 'Manal Ibrahim2',
    content: 'This is a simple blog post.',
    tags: ['typescript', 'react', 'blog']
}, {
    id: '3',
    title: 'Creating My Personal Blog3',
    date: 'July 1, 20253',
    author: 'Manal Ibrahim3',
    content: 'This is a simple blog post.',
    tags: ['typescript', 'react', 'blog']
}]

export function getBlogs() {
    return BlogPostsData;
}

export function addBlog(post: BlogPost) {
    BlogPostsData = [post, ...BlogPostsData]
}