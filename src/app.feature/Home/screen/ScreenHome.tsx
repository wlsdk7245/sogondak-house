import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import Image from 'next/image';
import mainOne from '../../../../public/images/home/main_1.jpeg';

const ArrImage = [
  'https://velog.velcdn.com/images/wlsdk0313/post/00a14981-8942-422f-bc70-0799559b1dd0/image.jpeg',
  'https://velog.velcdn.com/images/wlsdk0313/post/0a23d637-5b9d-4a36-bdff-45ac0fe8025b/image.jpeg',
  'https://velog.velcdn.com/images/wlsdk0313/post/3df472b8-ee57-4572-a839-ab0f8c880ba9/image.jpeg',
  'https://velog.velcdn.com/images/wlsdk0313/post/7f199a21-e4c5-42c5-84fc-c6ec775ee6b8/image.jpeg',
  'https://velog.velcdn.com/images/wlsdk0313/post/7dc36b43-9e44-436c-b570-7b85c3c5e274/image.jpeg',
];

const ScreenHome = () => {
  return (
    <StyledWrapper>
      <Carousel autoplay effect="fade">
        {ArrImage.map((img, idx) => (
          <Image
            key={`main-image-${idx}`}
            alt={`main-image-${idx}`}
            fill
            src={img}
            blurDataURL={img}
          />
        ))}
      </Carousel>
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
  position: responsive;

  .ant-carousel {
    height: 100%;

    .slick-slider {
      overflow: hidden;
      height: 100%;
    }
  }

  img {
    max-height: calc(100vh - 400px);
    position: relative !important;
    object-fit: cover;
    min-height: 480px;
    height: 1000;
    object-position: bottom;
  }

  .description {
    padding: 40px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    line-height: 1.7;

    .desc-part {
      text-align: center;
    }
  }
`;

export default ScreenHome;
