import clsx from "clsx";

type ImageCardType = {
  image: string;
  isMobile: boolean;
};

const ImageCard = ({ image, isMobile }: ImageCardType) => {
  return (
    <img
      src={image}
      className={clsx(
        "rounded-full border-2 border-primary",
        isMobile ? "w-30" : "w-58",
      )}
    />
  );
};

export default ImageCard;
