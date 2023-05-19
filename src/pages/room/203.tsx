import ScreenRoom203 from 'app.feature/Room/ScreenRoom203';
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const PageRoom203 = () => {
  return (
    <>
      <Head>
        <title>소곤닥하우스</title>
        <meta
          name="description"
          content="함덕의 소담스러운 돌담집, 소곤닥하우스 | 203호"
        />
      </Head>
      <StyledWrapper>
        <ScreenRoom203 />
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div``;

export default PageRoom203;
