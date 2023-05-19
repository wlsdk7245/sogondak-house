import ScreenRoomCommon from 'app.feature/Room/ScreenRoomCommon';
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const PageRoomCommon = () => {
  return (
    <>
      <Head>
        <title>소곤닥하우스</title>
        <meta
          name="description"
          content="함덕의 소담스러운 돌담집, 소곤닥하우스 | 공용공간"
        />
      </Head>
      <StyledWrapper>
        <ScreenRoomCommon />
      </StyledWrapper>
    </>
  );
};

export default PageRoomCommon;

const StyledWrapper = styled.div`
  width: 100%;
`;
