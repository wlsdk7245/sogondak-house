import React, { useEffect, useState } from 'react';
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

  if (imgError || !props.src) {
    return <div className="coupon-text"></div>;
  }

  return (
    <StyledImgView loaded={loaded} className={className}>
      <Image
        fill
        onError={() => setImgError(true)}
        onLoadingComplete={() => setLoaded(true)}
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
    width: 100%;
    height: 100%;
  }
`;