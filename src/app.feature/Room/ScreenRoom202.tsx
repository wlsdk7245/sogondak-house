import React from 'react';
import styled from 'styled-components';
import RoomInfoBox from './RoomInfoBox';
import { ObjectRoom } from './ObjectRoom';

const ScreenRoom202 = () => {
  const roomInfo202 = ObjectRoom['202'];

  return (
    <StyledWrapper>
      <RoomInfoBox {...roomInfo202} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

export default ScreenRoom202;
