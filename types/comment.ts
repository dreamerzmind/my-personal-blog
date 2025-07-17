export interface Comment {
    id: string;
    author: string;
    content: string;
    date: string;
    isEdited?: boolean;
    userId?: string;
    parentId?: string;
}