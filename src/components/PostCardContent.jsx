import React from 'react';
import PropsType from 'prop-types';
import Link from 'next/link';

const PostCardContent = ({ postData }) => {
    return (
        <div>
            {postData.split(/(#[^\s#]+)/g).map((tag, i) => {
                if (tag.match(/#/g)) {
                    return <Link href={`/hashtag/${tag.slice(1)}`} key={tag + i}><a>{tag}</a></Link>;
                }
                return tag;
            })}
        </div>
    );
};

PostCardContent.propTypes = {
    postData: PropsType.string.isRequired
};

export default PostCardContent;