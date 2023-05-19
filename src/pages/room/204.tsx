import React from 'react';
import styled from 'styled-components';
import ScreenRoom204 from 'app.feature/Room/ScreenRoom204';
import Head from 'next/head';

const PageRoom204 = () => {
  return (
    <>
      <Head>
        <title>소곤닥하우스</title>
        <meta
          name="description"
          content="함덕의 소담스러운 돌담집, 소곤닥하우스 | 204호"
        />
      </Head>
      <StyledWrapper>
        <ScreenRoom204 />
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div``;

export default PageRoom204;
