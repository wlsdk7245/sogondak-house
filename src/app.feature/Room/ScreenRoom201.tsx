import React from 'react';
import styled from 'styled-components';
import RoomInfoBox from './RoomInfoBox';
import { ObjectRoom } from './ObjectRoom';

const ScreenRoom201 = () => {
  const roomInfo201 = ObjectRoom['201'];

  return (
    <StyledWrapper>
      <RoomInfoBox {...roomInfo201} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

export default ScreenRoom201;
