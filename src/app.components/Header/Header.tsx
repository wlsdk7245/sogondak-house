import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const router = useRouter();
  return (
    <StyledWrapper>
      <div className="header-top">
        <Link href="/" className="logo-left">
          <img src="/images/common/logo-big.png" />
        </Link>
        <div className="logo-right">
          <img src="/images/common/logo-letter.png" />
        </div>
      </div>
      <div className="header-bottom">
        <Link href="/" className={`menu-item ${router.pathname === '/'}`}>
          <img
            alt="about"
            src={`/images/layout/home${
              router.pathname === '/' ? '-white' : ''
            }.png`}
          />
        </Link>
        <Link
          href="/about"
          className={`menu-item ${router.pathname === '/about'}`}
        >
          <img
            src={`/images/layout/about${
              router.pathname === '/about' ? '-white' : ''
            }.png`}
          />
        </Link>
        <Link
          href="/room"
          className={`menu-item ${router.pathname === '/room'}`}
        >
          <img
            src={`/images/layout/room${
              router.pathname === '/room' ? '-white' : ''
            }.png`}
          />{' '}
        </Link>
        <Link
          href="/reservation"
          className={`menu-item ${router.pathname === '/reservation'}`}
        >
          <img
            src={`/images/layout/reservation${
              router.pathname === '/reservation' ? '-white' : ''
            }.png`}
          />
        </Link>
      </div>
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;

  .header-bottom {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    background-color: white;
    transition: 200ms;

    @media (max-width: 425px) {
      padding: 0 12px;
    }

    .menu-item {
      display: -webkit-box !important;
      transition: 200ms;
      cursor: pointer;
      padding: 4px 8px;
      display: flex;
      align-items: center;

      img {
        width: auto;
        height: 10px;
        transition: 200ms;

        @media (max-width: 425px) {
          height: 9px;
        }
      }

      &.true {
        color: white;
        background-color: #fc1d29;
      }

      &:hover {
        opacity: 0.3;
      }
    }
  }

  .header-top {
    width: 100%;
    background-color: #cfd1e2;
    display: flex;
    height: 72px;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;

    .logo-left {
      height: 100%;
      text-align: center;
      width: auto;

      img {
        width: auto;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;
