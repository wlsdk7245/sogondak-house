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
          <img src="/images/common/logo-letter-black.png" />
        </div>
      </div>
      <div className="header-bottom">
        <Link href="/" className={`menu-item ${router.pathname === '/'}`}>
          HOME
        </Link>
        <Link
          href="/about"
          className={`menu-item ${router.pathname === '/about'}`}
        >
          ABOUT
        </Link>
        <Link
          href="/room"
          className={`menu-item ${router.pathname === '/room'}`}
        >
          ROOM
        </Link>
        <Link
          href="/reservation"
          className={`menu-item ${router.pathname === '/reservation'}`}
        >
          RESERVATION
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
  z-index: 100;

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
      transition: 300ms;
      font-size: 13px;
      color: var(--color-main);
      cursor: pointer;
      padding: 4px 8px;
      display: flex;
      align-items: center;
      border-bottom: 1.5px solid transparent;

      img {
        width: auto;
        height: 10px;
        transition: 200ms;

        @media (max-width: 425px) {
          height: 9px;
        }
      }

      &.true {
        border-bottom: 1.5px solid var(--color-main);
      }

      @media (hover: hover) {
        &:hover {
          opacity: 0.3;
        }
      }
    }
  }

  .header-top {
    width: 100%;
    background-color: white;
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

    .logo-right {
      height: 100%;
      width: auto;
      padding: 10px 0;

      img {
        width: auto;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;
