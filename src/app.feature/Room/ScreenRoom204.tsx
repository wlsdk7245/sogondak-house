import React from 'react';
import styled from 'styled-components';
import RoomInfoBox from './RoomInfoBox';
import { ObjectRoom } from './ObjectRoom';

const ScreenRoom204 = () => {
  const roomInfo204 = ObjectRoom['204'];

  return (
    <StyledWrapper>
      <RoomInfoBox {...roomInfo204} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

export default ScreenRoom204;
