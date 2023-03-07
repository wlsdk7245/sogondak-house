import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

declare let any: any;

const AboutMap = () => {
  const mapRef = useRef<HTMLElement | null | any>(null);

  useEffect(() => {
    const latLng = new naver.maps.LatLng(33.542845, 126.6633064);

    mapRef.current = new naver.maps.Map('map', {
      center: latLng,
      zoom: 15, //지도의 초기 줌 레벨            draggable: false,
    });

    new naver.maps.Marker({
      position: latLng,
      map: mapRef.current,
    });
  }, []);

  return (
    <StyledWrapper>
      <div id="map"></div>
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
  }
`;
