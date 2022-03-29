import React from 'react';
import PropsTypes from 'prop-types';

const PostImages = ({ images }) => {
    return (
        <div>구현중...</div>
    );
};

PostImages.prototype = {
    images: PropsTypes.arrayOf(PropsTypes.object)
};

export default PostImages;