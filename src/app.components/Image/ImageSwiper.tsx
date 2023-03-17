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
  width = 300,
  height = 400,
  ...props
}) => {
  const [imgError, setImgError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  if (imgError || !props.src) {
    return <div className="coupon-text"></div>;
  }

  return (
    <StyledImgView loaded={loaded} className={className}>
      <img
        width={width}
        height={height}
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
`;
