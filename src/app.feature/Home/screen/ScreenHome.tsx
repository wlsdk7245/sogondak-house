import React from 'react';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import SwiperPhoto from 'app.components/SwiperPhoto/SwiperPhoto';
import ImageSwiper from 'app.components/Image/ImageSwiper';

const ScreenHome = () => {
  return (
    <StyledWrapper>
      <SwiperPhoto>
        {Array.from({ length: 6 }, (x, i) => i + 1).map((item) => (
          <SwiperSlide key={`main-image-${item}`}>
            <ImageSwiper
              src={`/images/home/main_${item}.jpg`}
              alt={`main-image-${item}`}
            />
          </SwiperSlide>
        ))}
      </SwiperPhoto>

      <div className="description">
        <div className="desc-part">
          아름다운 섬 제주 동쪽, <br className="mobile-br" />
          변하는 계절에 맞춰 새로운 옷을 입는 서우봉과{' '}
          <br className="mobile-br" />
          반짝거리는 함덕해변.
          <br />
          나무 한 그루를 감싼 소담스러운 돌집, <br className="mobile-br" />
          소곤닥 하우스 입니다.
        </div>
        <div className="desc-part">
          증조 할머니가 사시던 집터에 <br className="mobile-br" />
          아버지가 건축하신 소곤닥 하우스는 <br />
          오래된 옛집의 기억과 투숙객분들의 추억을 <br className="mobile-br" />
          켜켜이 소중하게 쌓아가고 있습니다.
        </div>
        <div className="desc-part">
          바쁜 일상은 잠시 잊고, <br className="mobile-br" />
          이곳에서 안온한 시간을 보내시길 바랍니다.
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  color: gray;
  width: 100%;
  position: responsive;
  display: flex;
  flex-wrap: wrap;

  .swiper {
    width: 100%;
    flex: 1;
    aspect-ratio: 3 / 4 !important;
  }

  img {
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    .swiper {
      width: 100vw !important;
      height: calc(100vw * 4 / 3) !important;
    }

    .room-info-wrap {
      white-space: unset !important;
      width: 100% !important;
      max-width: unset !important;
      min-width: unset !important;
    }
  }

  .description {
    flex: 1;
    padding: 100px 40px;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    line-height: 1.7;
    transition: 200ms;

    .desc-part {
      font-family: 'gothicBook';
      text-align: center;
    }

    @media (max-width: 768px) {
      padding: 100px 20px;
    }

    @media (min-width: 768px) {
      .mobile-br {
        display: none;
      }
    }
  }
`;

export default ScreenHome;
