import ScreenHome from 'app.feature/Home/screen/ScreenHome';
import React from 'react';
import styled from 'styled-components';

const PageHome = () => {
  return (
    <StyledWrapper>
      <ScreenHome />
    </StyledWrapper>
  );
};

export default PageHome;

const StyledWrapper = styled.div`
  width: 100%;
`;
