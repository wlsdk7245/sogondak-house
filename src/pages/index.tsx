import ScreenHome from 'app.feature/Home/screen/ScreenHome';
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const PageHome = () => {
  return (
    <>
      <Head>
        <title>소곤닥하우스</title>
        <meta
          name="description"
          content="함덕의 소담스러운 돌담집, 소곤닥하우스"
        />
      </Head>
      <StyledWrapper>
        <ScreenHome />
      </StyledWrapper>
    </>
  );
};

export default PageHome;

const StyledWrapper = styled.div`
  width: 100%;
`;
