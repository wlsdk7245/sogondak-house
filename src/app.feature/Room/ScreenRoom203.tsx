import React from 'react';
import styled from 'styled-components';
import RoomInfoBox from './RoomInfoBox';
import { ObjectRoom } from './ObjectRoom';

const ScreenRoom203 = () => {
  const roomInfo203 = ObjectRoom['203'];

  return (
    <StyledWrapper>
      <RoomInfoBox {...roomInfo203} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

export default ScreenRoom203;
