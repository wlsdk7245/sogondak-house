import React from 'react';
import styled from 'styled-components';
import { typeRoomInfo } from './ObjectRoom';
import { SwiperSlide } from 'swiper/react';
import SwiperPhoto from 'app.components/SwiperPhoto/SwiperPhoto';
import ImageSwiper from 'app.components/Image/ImageSwiper';

const RoomInfoBox: React.FC<typeRoomInfo> = (props) => {
  const { type, number, desc, people, basic, photo } = props;

  return (
    <StyledWrapper>
      <SwiperPhoto>
        <div>
          {Array.from({ length: photo }, (x, i) => i + 1).map((item) => (
            <SwiperSlide key={`room-${number}-image-${item}`}>
              <ImageSwiper
                src={`/images/room/${number}/${number}_${item}.jpg`}
                alt={`room-${number}-image-${item}`}
              />
            </SwiperSlide>
          ))}
        </div>
      </SwiperPhoto>
      <div className="room-info-wrap">
        <div className="room-type">{type}</div>
        <div className="room-number">{number}</div>
        <div className="room-desc">{desc}</div>
        <div className="room-people">
          <b>이용 인원</b> : {people}
        </div>
        <div className="room-basic">
          <b>기본 비품 안내</b> : {basic}
        </div>
        <div className="room-common">
          <b>휴게공간 공용 비품 안내</b> : 정수기, 전자레인지, 토스트기,
          커피포트, 각종 식기류.
        </div>
      </div>
    </StyledWrapper>
  );
};

export default RoomInfoBox;

const StyledWrapper = styled.div`
  width: 100%;
  position: responsive;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;

    .room-info-wrap {
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

  .room-number {
    font-size: 32px;
  }
`;
