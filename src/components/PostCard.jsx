import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import { Card, Popover, Button, Avatar } from 'antd';
import PropsTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import PostImages from './PostImages';

const PostCard = ({ post }) => {
    const id = useSelector((state) => state.user.id?.id);
    const isLogined = useSelector((state) => state.user.isLogined);
    console.log(id, isLogined);
    const [liked, setLiked] = useState(false);
    const [commentFormOpend, setCommentFormOpend] = useState(false);

    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    }, []);

    const onToggleComment = useCallback(() => {
        setCommentFormOpend((prev) => !prev);
    }, []);

    return (
        <div>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key='ret' />,
                    (liked
                        ? <HeartTwoTone twoToneColor='#eb2f96' key='heart' onClick={onToggleLike} />
                        : <HeartOutlined key='heart' onClick={onToggleLike} />
                    ),
                    <MessageOutlined key='message' onClick={onToggleComment}/>,
                    <Popover key='pop'
                        content={(
                            <Button.Group>
                                {isLogined
                                    ?
                                    <>
                                        <Button>수정</Button>
                                        <Button danger >삭제</Button>
                                        <Button>신고</Button>
                                    </>
                                    :
                                    <Button>신고</Button>
                                }

                            </Button.Group>
                        )}
                    >
                        <EllipsisOutlined/>
                    </Popover>
                ]}
            >
                <Card.Meta
                    title= {post.User.nickname}
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    description={post.content}
                />
            </Card>
            {commentFormOpend && (
                <div>
                    댓글 부분
                </div>
            )}
            {/* <CommentForm/>
            <Comments /> */}
        </div>
    );
};

PostCard.prototype = {
    post: PropsTypes.shape({
        id: PropsTypes.number,
        User: PropsTypes.object,
        content: PropsTypes.string,
        createdAt: PropsTypes.object,
        Comments: PropsTypes.arrayOf(PropsTypes.object),
        Images: PropsTypes.arrayOf(PropsTypes.object)
    }).isRequired
};

export default PostCard;