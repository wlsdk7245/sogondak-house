import React from 'react';
import styled from 'styled-components';

const AboutTime = () => {
  return (
    <StyledWrapper>
      <div className="time-wrap">
        <div className="time-item">Check - In</div>
        <div className="time-item">16 : 00</div>
        <div className="time-item">Check - Out</div>
        <div className="time-item">11: 00</div>
      </div>
      <div className="time-info">
        * 레이트 체크아웃은 10,000원의 추가요금이 발생합니다.
      </div>
    </StyledWrapper>
  );
};

export default AboutTime;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .time-wrap {
    margin-bottom: 12px;
    display: grid;
    row-gap: 4px;
    column-gap: 20px;
    font-size: 22px;
    grid-template-columns: max-content max-content;
  }

  .time-info {
    font-weight: 500;
    font-size: 12px;
  }
`;
