import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Collapse } from 'antd';
import ReservationPanelCost from './ReservationPanelCost';
import ReservationPanelRoom from './ReservationPanelRoom';
import ReservationPanelReserve from './ReservationPanelReserve';
import useWindowSize from '../../app.hook/useWindowResize';

const { Panel } = Collapse;

const ScreenReservation = () => {
  const { width } = useWindowSize();

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (width === undefined) return;
    if (width > 1024) setIsMobile(false);
    else setIsMobile(true);
  }, [width]);

  return (
    <StyledWrapper>
      <Collapse ghost accordion={isMobile}>
        <Panel key="1" header="객실 요금 안내">
          <ReservationPanelCost isMobile={isMobile} />
        </Panel>
        <Panel key="2" header="숙소 이용 안내">
          <ReservationPanelRoom />
        </Panel>
        <Panel key="3" header="예약 취소, 변경 및 환불 규정">
          <ReservationPanelReserve />
        </Panel>
      </Collapse>
      <div className="platform-container">
        <Image
          className="platform-image"
          src="/images/reservation/airbnb.jpeg"
          alt="airbnb"
          width={30}
          height={30}
          onClick={() =>
            window.open('https://www.airbnb.co.kr/users/300970932/listings')
          }
        />
        <Image
          className="platform-image"
          src="/images/reservation/naver.jpeg"
          alt="naver"
          width={30}
          height={30}
          onClick={() =>
            window.open(
              'https://map.naver.com/v5/entry/place/1659523223?lng=126.6633064&lat=33.542845&placePath=%2Froom&c=15,0,0,0,dh'
            )
          }
        />
        <Image
          className="platform-image"
          src="/images/reservation/instagram.jpeg"
          alt="instagram"
          width={30}
          height={30}
          onClick={() =>
            window.open('https://www.instagram.com/sogondak_house/')
          }
        />
      </div>
    </StyledWrapper>
  );
};

export default ScreenReservation;

const StyledWrapper = styled.div`
  width: 100%;
  padding: 80px;
  transition: 200ms;

  .platform-container {
    display: flex;
    justify-content: center;
    gap: 20px;

    .platform-image {
      cursor: pointer;
      width: 20px;
      height: 20px;
      opacity: 0.7;
      transition: 200ms;

      &:hover {
        opacity: 0.5;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 40px;
  }

  @media (max-width: 425px) {
    padding: 12px;
  }

  .ant-collapse {
    margin-bottom: 80px;
  }

  .ant-collapse-header {
    display: flex;
    align-items: center;
    font-weight: 400;

    .ant-collapse-header-text {
      font-weight: 400 !important;
      font-size: 16px;
      line-height: 22px;
    }

    &[aria-expanded='true'] {
      color: var(--color-main);
    }
  }

  .ant-collapse-content-box {
    padding: 8px !important;
  }

  .ant-collapse-header-text {
    font-weight: 800;
  }
`;
