import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledWrapper>
      <div className="header-top">
        <div className="logo-left">
          <img src="/images/common/logo-big.png" />
        </div>
        <div className="logo-right">
          <img src="/images/common/logo-letter.png" />
        </div>
      </div>
      <div className="header-bottom">
        <div className="menu-item">HOME</div>
        <div className="menu-item">ABOUT</div>
        <div className="menu-item">ROOM</div>
        <div className="menu-item">RESERVATION</div>
      </div>
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.div`
  position: sticky;
  top: 0;

  .header-bottom {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    background-color: white;

    .menu-item {
      font-size: 12px;
      letter-spacing: -1px;
      color: rgb(255, 51, 175);
      transition: 200ms;
      cursor: pointer;

      &:hover {
        opacity: 0.3;
      }
    }
  }

  .header-top {
    background-color: #cfd1e2;
    display: flex;
    height: 72px;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;

    .logo-left {
      height: 100%;
      width: 100%;

      img {
        width: fit-content;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;
