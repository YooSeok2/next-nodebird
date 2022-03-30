import React, { useCallback, useState } from 'react';
import PropsType from 'prop-types';
import Image from 'next/image';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImageZoom';

const PostImages = ({ images }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);

    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);

    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    }, []);

    if (images.length === 1) {
        return (
            <>
                <Image
                    role="presentation"
                    width="500px"
                    height='500px'
                    src={images[0].src}
                    alt={images[0].src}
                    onClick={onZoom}
                />
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        );
    }
    if (images.length === 2) {
        return (
            <>
                <Image
                    role="presentation"
                    width="500px"
                    height='500px'
                    src={images[0].src}
                    alt={images[0].src}
                    onClick={onZoom}
                />
                <Image
                    role="presentation"
                    width="500px"
                    height='500px'
                    src={images[1].src}
                    alt={images[1].src}
                    onClick={onZoom}
                />
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        );
    }
    return (
        <>
            <div>
                <Image
                    role="presentation"
                    width="500px"
                    height='500px'
                    src={images[0].src}
                    alt={images[0].src}
                    onClick={onZoom}
                />
                <div
                    role="presentation"
                    style={{
                        display: 'inline-block',
                        width: '50%',
                        height: '500px',
                        textAlign: 'center',
                        verticalAlign: 'middle' }}
                    onClick={onZoom}
                >
                    <PlusOutlined/>
                    <br />
                    {images.length - 1}
                    개의 사진 더보기
                </div>
            </div>
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
    );
};

PostImages.propTypes = {
    images: PropsType.arrayOf(PropsType.object).isRequired
};

export default PostImages;