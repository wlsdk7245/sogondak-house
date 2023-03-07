import React from 'react';
import styled from 'styled-components';
import AboutMap from './AboutMap';
import AboutTime from './AboutTime';

const ScreenAbout = () => {
  return (
    <StyledWrapper>
      <img src="/images/about/main.jpeg" />
      <div className="about-content">
        <AboutTime />
        <AboutMap />
      </div>
    </StyledWrapper>
  );
};

export default ScreenAbout;

const StyledWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }

  .about-content {
    padding: 80px;
  }
`;
