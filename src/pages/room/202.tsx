import ScreenRoom202 from 'app.feature/Room/ScreenRoom202';
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const PageRoom202 = () => {
  return (
    <>
      <Head>
        <title>소곤닥하우스</title>
        <meta
          name="description"
          content="함덕의 소담스러운 돌담집, 소곤닥하우스 | 202호"
        />
      </Head>
      <StyledWrapper>
        <ScreenRoom202 />
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div``;

export default PageRoom202;
