import React from 'react';
import styled from 'styled-components';

const AboutTransportation = () => {
  return (
    <StyledWrapper>
      <div className="title">교통편 안내</div>
      <div className="content top">
        <div className="content-title">자가용 이용시</div>
        <div>제주국제공항으로부터 19km, 약 35분 소요</div>
      </div>
      <div className="content top">
        <div className="content-title">대중교통 이용시</div>
        <div className="content-item top">
          급행버스 (101번) 공항 - 제주버스터미널 - 동광양 - 천수동 -
          오현중/고등학교 -화북 남문 - 삼양초등학교- 조천리사무소 - {`'`}
          함덕서우봉해변{`'`} 에서 하차
        </div>
        <div className="content-item">
          버스 진행 반대 방향으로 600m, 약 7분정도 쭉 걸어오시면 됩니다.
        </div>
      </div>
      <div className="content">
        일반 간선버스 (325번) {`'`}함덕 비석거리{`'`}에서 하차 후 버스 진행
        방향으로 100m, 약 2분정도 쭉 걸어오시면 됩니다.
      </div>
    </StyledWrapper>
  );
};

export default AboutTransportation;

const StyledWrapper = styled.div`
  .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .content {
    font-size: 14px;

    &.top {
      margin-bottom: 16px;
    }

    .content-title {
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 4px;
    }

    .content-item {
      margin-bottom: 4px;
    }
  }
`;
