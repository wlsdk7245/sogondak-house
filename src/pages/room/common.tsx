import ScreenRoomCommon from 'app.feature/Room/ScreenRoomCommon';
import React from 'react';
import styled from 'styled-components';

const PageRoomCommon = () => {
  return (
    <StyledWrapper>
      <ScreenRoomCommon />
    </StyledWrapper>
  );
};

export default PageRoomCommon;

const StyledWrapper = styled.div`
  width: 100%;
`;
