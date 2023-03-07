import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';
import ReservationPanelCost from './ReservationPanelCost';
import ReservationPanelRoom from './ReservationPanelRoom';
import ReservationPanelReserve from './ReservationPanelReserve';

const { Panel } = Collapse;

const ScreenReservation = () => {
  return (
    <StyledWrapper>
      <Collapse ghost accordion>
        <Panel key="1" header="객실 요금 안내">
          <ReservationPanelCost />
        </Panel>
        <Panel key="2" header="숙소 이용 안내">
          <ReservationPanelRoom />
        </Panel>
        <Panel key="3" header="예약 취소, 변경 및 환불 규정">
          <ReservationPanelReserve />
        </Panel>
      </Collapse>
    </StyledWrapper>
  );
};

export default ScreenReservation;

const StyledWrapper = styled.div`
  width: 100%;
  padding: 80px;
  transition: 200ms;

  @media (max-width: 768px) {
    padding: 40px;
  }

  @media (max-width: 425px) {
    padding: 12px;
  }

  .ant-collapse-header {
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
