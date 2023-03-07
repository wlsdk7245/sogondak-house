import React from 'react';
import styled from 'styled-components';
import RoomInfoBox from './RoomInfoBox';
import { ObjectRoom } from './ObjectRoom';

const ScreenRoom101 = () => {
  const roomInfo101 = ObjectRoom['101'];

  return (
    <StyledWrapper>
      <RoomInfoBox {...roomInfo101} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

export default ScreenRoom101;
