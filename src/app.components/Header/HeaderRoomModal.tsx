import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  handleOpenChange: (flag: boolean) => void;
};

const HeaderRoomModal: React.FC<TProps> = ({ handleOpenChange }) => {
  const router = useRouter();

  const handleClickRoom = (link: string) => () => {
    router.push(link);
    handleOpenChange(false);
  };

  return (
    <StyledWrapper
      className="room-hover-modal"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <div className="room-item-wrap">
        <div className="room-item title">single room</div>
        <div
          className="room-item content"
          onClick={handleClickRoom('/room/101')}
        >
          101
        </div>
      </div>
      <div className="room-item-wrap">
        <div className="room-item title">double room</div>
        <div
          className="room-item content"
          onClick={handleClickRoom('/room/102')}
        >
          102
        </div>
        <div
          className="room-item content"
          onClick={handleClickRoom('/room/204')}
        >
          204
        </div>
      </div>

      <div className="room-item-wrap">
        <div className="room-item title">deluxe room</div>
        <div
          className="room-item content"
          onClick={handleClickRoom('/room/201')}
        >
          201
        </div>
        <div
          className="room-item content"
          onClick={handleClickRoom('/room/202')}
        >
          202
        </div>
        <div
          className="room-item content"
          onClick={handleClickRoom('/room/203')}
        >
          203
        </div>
      </div>
      <div className="room-item-wrap">
        <div className="room-item content">common space</div>
      </div>
    </StyledWrapper>
  );
};

export default HeaderRoomModal;

const StyledWrapper = styled.div`
  cursor: default;
  transition: 200ms;
  display: flex;
  pointer-events: visible;
  position: absolute;
  text-align: center;
  width: 220%;
  left: -60%;
  padding: 12px 0;
  font-size: 14px;
  font-family: 'gothicBook';
  color: black;
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: center;
  background: var(--color-white-hover);
  gap: 8px;
  line-height: 1.5;

  .room-item-wrap {
    .room-item {
      &.content {
        transition: 200ms;
        cursor: pointer;

        &:hover {
          color: var(--color-sub);
        }
      }
    }
  }
`;
