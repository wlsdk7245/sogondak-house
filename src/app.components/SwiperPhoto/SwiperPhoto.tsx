import React from 'react';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, EffectFade } from 'swiper'; // 추가

SwiperCore.use([Pagination, Autoplay, EffectFade]); // 추가
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

type TProps = {
  children: React.ReactNode;
};

const SwiperPhoto: React.FC<TProps> = (props) => {
  return (
    <StyledWrapper
      autoplay={{ delay: 5000 }} // 추가
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      navigation
      effect="fade"
      loop={true}
      pagination={{ clickable: true }}
    >
      {props.children}
    </StyledWrapper>
  );
};

export default SwiperPhoto;

const StyledWrapper = styled(Swiper)`
  width: 100%;
  flex: 1;
  aspect-ratio: 3 / 4 !important;

  img {
    aspect-ratio: 3 / 4 !important;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    width: 16px;
    border-radius: 4px;
    background: gray;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    opacity: 0.5;
    background: black;
  }

  @media (max-width: 1024px) {
    width: 100vw !important;
    height: calc(100vw * 4 / 3) !important;
  }
`;
