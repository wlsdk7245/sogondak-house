import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const ScreenHome = () => {
  return (
    <StyledWrapper>
      <div className="main-image">
        <img src="/images/common/main.jpeg" />
      </div>
      <div className="description">
        <div className="desc-part">
          아름다운 섬 제주 동쪽, 변하는 계절에 맞춰 새로운 옷을 입는 서우봉과
          반짝거리는 함덕해변.
          <br />
          나무 한 그루를 감싼 소담스러운 돌집, 소곤닥 하우스 입니다.
        </div>
        <div className="desc-part">
          증조 할머니가 사시던 집터에 아버지가 건축하신 소곤닥 하우스는 <br />
          오래된 옛집의 기억과 투숙객분들의 추억을 켜켜이 소중하게 쌓아가고
          있습니다.
        </div>
        <div className="desc-part">
          바쁜 일상은 잠시 잊고, 이곳에서 안온한 시간을 보내시길 바랍니다.
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  color: gray;

  .description {
    padding: 40px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    .desc-part {
      text-align: center;
    }
  }
`;

export default ScreenHome;
