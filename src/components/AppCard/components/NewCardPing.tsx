type NewCardType = {
  isHovered: boolean;
};

const NewCardPing = ({ isHovered }: NewCardType) => {
  if (isHovered) return <></>;

  return (
    <span className="absolute top-0 right-0 mr-1 mt-1 flex size-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
      <span className="relative inline-flex size-2 rounded-full bg-primary">
        <div className="relative right-7 bottom-1 inline-flex text-primary">
          new
        </div>
      </span>
    </span>
  );
};

export default NewCardPing;
