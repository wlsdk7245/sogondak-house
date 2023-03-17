import React from 'react';
import styled from 'styled-components';
import RoomInfoBox from './RoomInfoBox';
import { ObjectRoom } from './ObjectRoom';

const ScreenRoom102 = () => {
  const roomInfo102 = ObjectRoom['102'];

  return (
    <StyledWrapper>
      <RoomInfoBox {...roomInfo102} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

export default ScreenRoom102;
