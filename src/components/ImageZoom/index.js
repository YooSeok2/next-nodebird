import React, { useState } from 'react';
import PropsType from 'prop-types';
import Slider from 'react-slick';
import { Overlay, Header, CloseBtn, ImgWrapper, Indicator, SlickWrapper } from './styles';

const ImagesZoom = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <Overlay>
            <Header>
                <h1>상세 이미지</h1>
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </Header>
            <SlickWrapper>
                <div>
                    <Slider
                        initialSlide={0}
                        afterChange={(slide) => setCurrentSlide(slide)}
                        infinite={true}
                        arrows={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {images.map((image) => (
                            <ImgWrapper key={image.src}>
                                <img src={image.src} alt={image.src} />
                            </ImgWrapper>
                        ))}
                    </Slider>
                    <Indicator>
                        <div>
                            {currentSlide + 1}
                            {' / '}
                            {images.length}
                        </div>
                    </Indicator>
                </div>
            </SlickWrapper>
        </Overlay>
    );
};

ImagesZoom.propTypes = {
    images: PropsType.arrayOf(PropsType.object).isRequired,
    onClose: PropsType.func.isRequired
};

export default ImagesZoom;