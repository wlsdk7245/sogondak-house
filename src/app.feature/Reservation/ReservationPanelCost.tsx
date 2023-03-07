import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const ReservationPanelCost = () => {
  return (
    <StyledWrapper>
      <Collapse ghost accordion>
        <Panel key="1" header="비수기">
          <img src="/images/reservation/비수기.jpeg" />
        </Panel>
        <Panel key="2" header="준성수기">
          <img src="/images/reservation/준성수기.jpeg" />
        </Panel>
        <Panel key="3" header="성수기">
          <img src="/images/reservation/성수기.jpeg" />
        </Panel>
      </Collapse>
    </StyledWrapper>
  );
};

export default ReservationPanelCost;

const StyledWrapper = styled.div`
  width: 100%;

  .ant-collapse-header[aria-expanded='true'] {
    color: var(--color-main);
  }

  .ant-collapse-header-text {
    font-weight: 400 !important;
  }
`;
