import ScreenReservation from 'app.feature/Reservation/ScreenReservation';
import React from 'react';
import styled from 'styled-components';

const PageReservation = () => {
  return (
    <StyledWrapper>
      <ScreenReservation />
    </StyledWrapper>
  );
};

export default PageReservation;

const StyledWrapper = styled.div`
  width: 100%;
`;
