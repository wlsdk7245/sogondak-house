import ScreenAbout from 'app.feature/About/ScreenAbout';
import React from 'react';
import styled from 'styled-components';

const PageAbout = () => {
  return (
    <StyledWrapper>
      <ScreenAbout />
    </StyledWrapper>
  );
};

export default PageAbout;

const StyledWrapper = styled.div`
  width: 100%;
`;
