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
            src={`/images/layout/home${
              router.pathname === '/' ? '-white' : ''
            }.png`}
          />{' '}
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
          />{' '}
        </Link>
      </div>
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;

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
      transition: 200ms;
      cursor: pointer;
      padding: 4px 8px;
      display: flex;
      align-items: center;

      img {
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
      width: 100%;

      img {
        width: fit-content;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;
