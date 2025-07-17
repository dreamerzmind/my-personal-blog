import React, { useState } from 'react';
import { Comment } from '@types/Comment';

const Comments = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        
    }
}
