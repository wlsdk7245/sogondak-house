import React from 'react';
import styled from 'styled-components';

const AboutParking = () => {
  return (
    <StyledWrapper>
      <div className="title">주차 안내</div>
      <div className="content">
        <div>
          건물 1층 카페 '호다' 앞 주차장에 총 2대의 차량 주차가 가능합니다.
        </div>
        <div>
          건물 왼편 전용 주차장에도 2-3대 주차가 가능하고, 모두 주차가 되어있을
          경우 전화 주시면 유선 상으로 주차안내 해드리고 있습니다.
        </div>
      </div>
    </StyledWrapper>
  );
};

export default AboutParking;

const StyledWrapper = styled.div`
  .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .content {
    font-size: 14px;
    line-height: 1.5;
  }
`;
