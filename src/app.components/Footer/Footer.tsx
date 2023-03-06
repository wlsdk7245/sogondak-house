import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledWrapper>
      <div className="footer-title">Sogondak House</div>
      <div className="footer-copyright">
        Copyright © Sogondak House All rights reserved.
      </div>
    </StyledWrapper>
  );
};

export default Footer;

const StyledWrapper = styled.div`
  min-height: 60px;
  height: 100%;
  font-size: 8px;
  line-height: 30px;
  color: gray;
  padding: 0 20px;
`;
