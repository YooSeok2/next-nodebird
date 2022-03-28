import React, { useState } from 'react';
import AppLayout from 'components/AppLayout';
import Head from 'next/head';
import NickNameEditionForm from 'components/NicknameEditForm';
import FollowList from 'components/FollowList';

const Profile = () => {
    const [followingList, setFollowingList] = useState([
        { nickname: '제로초' },
        { nickname: '김유석' },
        { nickname: '노드버드' }
    ]);
    const [followerList, setFollowerList] = useState([
        { nickname: '제로초' },
        { nickname: '김유석' },
        { nickname: '노드버드' }
    ]);

    return (
        <>
            <Head>
                <title>프로필 || NodeBird</title>
            </Head>
            <AppLayout>
                <NickNameEditionForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    );
};

export default Profile;