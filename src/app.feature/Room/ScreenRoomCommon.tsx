import React from 'react';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import SwiperPhoto from 'app.components/SwiperPhoto/SwiperPhoto';
import ImageSwiper from 'app.components/Image/ImageSwiper';

const ArrImage = [
  'https://velog.velcdn.com/images/wlsdk0313/post/e593a046-b09f-44ad-80af-74138f3c54b2/image.jpg',
  'https://velog.velcdn.com/images/wlsdk0313/post/c4af0daa-de9c-4c5b-b874-2f2001b70912/image.jpg',
  'https://velog.velcdn.com/images/wlsdk0313/post/28abfa5c-56a2-4121-971c-a39b63965a98/image.jpg',
  'https://velog.velcdn.com/images/wlsdk0313/post/0a985b85-c415-44c8-8cdc-e998b3badda2/image.jpg',
  'https://velog.velcdn.com/images/wlsdk0313/post/38aa3125-e49e-4e74-92d3-cc9737687f4e/image.jpg',
  'https://velog.velcdn.com/images/wlsdk0313/post/3295617c-4675-49b9-a7e4-3efeeb015f17/image.jpg',
];

const ScreenRoomCommon = () => {
  return (
    <StyledWrapper>
      <SwiperPhoto>
        {ArrImage.map((item, idx) => (
          <SwiperSlide key={`main-image-${idx}`}>
            <ImageSwiper src={item} alt={`main-image-${idx}`} />
          </SwiperSlide>
        ))}
      </SwiperPhoto>

      <div className="room-info-wrap">
        <div className="room-type">Common Space</div>
        <div>
          소곤닥하우스를 이용하는 모든 투숙객이 함께 사용하는 공용 공간입니다.
        </div>
        <div>
          이곳에서 간단한 조리와 취식이 가능합니다.
          <br />
          휴게공간 이용 후 반드시 사용하신 식기 세척과 뒷정리 부탁드립니다.
        </div>
        <div>
          건물 소등시간인 10시 30분 이후에는 휴게공간 사용이 불가능합니다.
        </div>
        <div>이용 가능 시간 : 09:00 - 11:00 / 16:00 - 22:30</div>
        <div>
          휴게공간 공용비품 안내 : 청소기, 정수기, 전자레인지, 토스트기,
          커피포트, 각종 식기류.
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ScreenRoomCommon;

const StyledWrapper = styled.div`
  width: 100%;
  position: responsive;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;

    img {
      width: 100%;
      height: 100%;
    }
    .room-info-wrap {
      white-space: unset !important;
      width: 100% !important;
      max-width: unset !important;
      min-width: unset !important;
      font-size: 12px;
    }
  }

  .room-info-wrap {
    min-width: 40%;
    max-width: 60%;
    height: 100%;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    gap: 40px;
    line-height: 1.7;
    font-size: 14px;
    padding: 80px;

    .room-type {
      font-size: 40px;
      margin-bottom: 20px;
    }

    @media (max-width: 768px) {
      padding: 40px;
    }

    @media (max-width: 425px) {
      padding: 20px;
    }
  }
`;
