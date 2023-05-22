import React from 'react';
import styled from 'styled-components';

const AboutCafe = () => {
  return (
    <StyledWrapper>
      <div className="title">카페 호다</div>
      <div className="content">
        <div>
          건물 1층에서 함께 운영 중인 공간으로, 오전 11시부터 오후 18시까지
          열려있습니다.
        </div>
        <div>
          (호다 인스타그램을 참고해주세요.{' '}
          <a href="https://www.instagram.com/hoda_jeju/" target="_blank">
            @hoda_jeju
          </a>
          ) - 수요일 정기 휴무
        </div>
      </div>
    </StyledWrapper>
  );
};

export default AboutCafe;

const StyledWrapper = styled.div`
  .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .content {
    font-size: 14px;
    line-height: 1.5;

    a {
      color: var(--color-main);
    }
  }
`;
