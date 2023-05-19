import ScreenRoom101 from 'app.feature/Room/ScreenRoom101';
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const PageRoom101 = () => {
  return (
    <>
      <Head>
        <title>소곤닥하우스</title>
        <meta
          name="description"
          content="함덕의 소담스러운 돌담집, 소곤닥하우스 | 101호"
        />
      </Head>
      <StyledWrapper>
        <ScreenRoom101 />
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div``;

export default PageRoom101;
