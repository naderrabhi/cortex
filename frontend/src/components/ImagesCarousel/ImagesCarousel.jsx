import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import { ImageWrapper, StyledImage, CarouselContainer } from './imagesCarousel.styles';

export default function ImagesCarousel() {
  const images = [
    { src: image1, alt: 'image-1' },
    { src: image2, alt: 'image-2' },
    { src: image3, alt: 'image-3' },
    { src: image4, alt: 'image-4' },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1
    }
  };

  return (
    <CarouselContainer>
      <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      >
        {images.map((image) => (
          <ImageWrapper key={image.alt}>
            <StyledImage src={image.src} alt={image.alt} />
          </ImageWrapper>
        ))}
      </Carousel>
    </CarouselContainer>
  );
}
