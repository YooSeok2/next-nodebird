import React from 'react';
import AppLayout from 'components/AppLayout';
import { useSelector } from 'react-redux';

import PostForm from 'components/PostForm';
import PostCard from 'components/PostCard';

export default function Home () {
    const { isLogined } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post);
    return (
        <AppLayout>
            {isLogined ? <PostForm /> : <></>}
            {mainPosts.map((post, index) => <PostCard key={index} post={post} />)}
        </AppLayout>
    );
}
