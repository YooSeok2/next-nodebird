import React, { useEffect } from 'react';
import AppLayout from 'components/AppLayout';
import { useDispatch, useSelector } from 'react-redux';

import PostForm from 'components/PostForm';
import PostCard from 'components/PostCard';
import { LOAD_POSTS_REQUEST } from 'reducers/post';


export default function Home () {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch({
            type: LOAD_POSTS_REQUEST
        });
    }, []);

    useEffect(() => {
        function onScroll () {
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePosts && !loadPostsLoading) {
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                        data: mainPosts[mainPosts.length - 1].id
                    });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [mainPosts, hasMorePosts, loadPostsLoading]);

    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post, index) => <PostCard key={index} post={post} />)}
        </AppLayout>
    );
}
