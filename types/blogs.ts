export interface BlogPosts {
    id: string;
    title: string;
    date: string;
    author: string;
    content: string;
    status: "published" | "draft";
    tags?: string[];
}