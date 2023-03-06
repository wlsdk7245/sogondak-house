import Footer from 'app.components/Footer/Footer';
import Header from 'app.components/Header/Header';
import React from 'react';
import styled from 'styled-components';

type TProps = {
  children: JSX.Element;
};

const Layout: React.FC<TProps> = ({ children }) => {
  return (
    <StyledWrapper>
      <Header />
      <div className="layout-content">{children}</div>
      <Footer />
    </StyledWrapper>
  );
};

export default Layout;

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;

  .layout-content {
    margin: 0 auto;
    height: 100%;
    min-height: calc(100vh - 110px);

    /* @media only screen and (max-width: 1024px) {
      min-height: calc(100vh - 120px);
    } */
  }
`;
