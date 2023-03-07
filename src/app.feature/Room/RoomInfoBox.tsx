import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import { typeRoomInfo } from './ObjectRoom';

const RoomInfoBox: React.FC<typeRoomInfo> = (props) => {
  const { type, number, desc, people, basic, photo } = props;

  return (
    <StyledWrapper>
      <div className="room-photo-list">
        <Carousel autoplay effect="fade">
          {photo.map((item, idx) => (
            <img
              key={`room-${number}-photo-${idx}`}
              src={`/images/room/${item}`}
            />
          ))}
        </Carousel>
      </div>
      <div className="room-info-wrap">
        <div className="room-type">{type}</div>
        <div className="room-number">{number}</div>
        <div className="room-desc">{desc}</div>
        <div className="room-people">{people}</div>
        <div className="room-basic">기본 비품 안내 : {basic}</div>
        <div className="room-common">
          휴게공간 공용 비품 안내 : 정수기, 전자레인지, 토스트기, 커피포트, 각종
          식기류
        </div>
      </div>
    </StyledWrapper>
  );
};

export default RoomInfoBox;

const StyledWrapper = styled.div`
  .room-info-wrap {
    font-size: 16px;
    padding: 80px;
    transition: 400ms;

    @media (max-width: 768px) {
      padding: 40px;
    }

    @media (max-width: 425px) {
      padding: 20px;
    }
  }

  .room-photo-list {
  }

  img {
    position: relative !important;
    object-fit: cover;
    max-height: calc(100vh - 262px) !important;
    object-position: bottom;
  }
  .ant-carousel {
    max-height: calc(100vh - 262px);
  }
  .room-type {
    font-size: 40px;
    margin-bottom: 20px;
  }

  .room-number {
    font-size: 32px;
    margin-bottom: 20px;
  }

  .room-desc {
    margin-bottom: 40px;
  }

  .room-people {
    margin-bottom: 40px;
  }

  .room-basic {
    margin-bottom: 20px;
  }
`;
