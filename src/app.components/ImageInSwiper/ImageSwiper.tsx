import Image, { ImageProps } from 'next/image';

const ImageInSwiper: React.FC<ImageProps> = ({
  src,
  alt,
  width = 300,
  height = 400,
  ...props
}) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      loading="lazy"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOctwAAAeIBQOX17P8AAAAASUVORK5CYII="
      {...props}
    />
  );
};

export default ImageInSwiper;
