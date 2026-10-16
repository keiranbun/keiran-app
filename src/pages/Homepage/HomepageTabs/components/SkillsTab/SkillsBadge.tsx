type SkillsBadgeType = {
  img: string;
  hover: string;
};

const SkillsBadge = ({ img, hover }: SkillsBadgeType) => {
  return (
    <div className="flex">
      <img src={img} title={hover} />
    </div>
  );
};

export default SkillsBadge;
