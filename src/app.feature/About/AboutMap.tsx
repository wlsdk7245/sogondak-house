import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CopyOutlined } from '@ant-design/icons';
import { message } from 'antd';

declare let naver: any;

const AboutMap = () => {
  const mapRef = useRef<HTMLElement | null | any>(null);

  const handleCopyAddress = () => {
    message.success('주소가 복사되었습니다!');
    navigator.clipboard.writeText(
      '제주특별자치도 제주시 조천읍 신북로497, 소곤닥하우스'
    );
  };

  useEffect(() => {
    const latLng = new naver.maps.LatLng(33.542845, 126.6633064);

    mapRef.current = new naver.maps.Map('map', {
      center: latLng,
      zoom: 15, //지도의 초기 줌 레벨
      // draggable: false,
    });

    let marker = new naver.maps.Marker({
      position: latLng,
      map: mapRef.current,
    });

    naver.maps.Event.addListener(marker, 'click', () => {
      let url = 'https://map.naver.com/v5/entry/place/1659523223?c=20,0,0,0,dh';
      window.open(url);
    });
  }, []);

  return (
    <StyledWrapper>
      <div id="map"></div>
      <div className="address">
        <div>제주특별자치도 제주시 조천읍 신북로497, 소곤닥하우스</div>
        <CopyOutlined onClick={handleCopyAddress} className="copy-button" />
      </div>
    </StyledWrapper>
  );
};

export default AboutMap;

const StyledWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }

  .about-content {
    padding: 80px;
  }

  #map {
    width: 100%;
    height: 400px;
    margin-bottom: 8px;
  }

  .address {
    font-family: 'Noto Sans KR';
    color: var(--color-main);
    font-size: 13px;
    text-align: center;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    .copy-button {
      cursor: pointer;
    }
  }
`;
