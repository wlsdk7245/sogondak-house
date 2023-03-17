import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { fadeIn } from 'app.styled/keyframes';
import Image from 'next/image';

type TProps = {
  src: string;
  srcError?: string;
  width?: number;
  height?: number;
  style?: object | any;
  className?: string;
  alt: string;
  onLoad?: () => void;
  onError?: () => void;
  onClick?: () => void;
};

const ImageSwiper: React.FC<TProps> = ({
  className,
  width = 30000,
  height = 40000,
  ...props
}) => {
  const [imgError, setImgError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const image = useRef();

  const handleLoad = () => setLoaded(true);

  useEffect(() => {
    if (image.current === undefined) return;
    setLoaded(true);
  }, [image.current]);

  if (imgError || !props.src) {
    return <div className="coupon-text"></div>;
  }

  return (
    <StyledImgView loaded={loaded} className={className}>
      <Image
        fill
        ref={image}
        onLoadingComplete={handleLoad}
        onError={() => setImgError(true)}
        loading="lazy"
        {...props}
      />
    </StyledImgView>
  );
};

export default ImageSwiper;

type StyledType = {
  loaded: boolean;
};

const StyledImgView = styled.div<StyledType>`
  ${({ loaded }) => css`
    opacity: ${loaded ? 1 : 0};
    animation: ${loaded ? fadeIn : null} 0.3s forwards;
  `}

  img {
    transform: rotate(90deg);
    overflow: initial;
    width: 100%;
    height: 100%;
  }
`;
