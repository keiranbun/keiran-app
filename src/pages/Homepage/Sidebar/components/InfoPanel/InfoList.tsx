import { type LucideIcon } from "lucide-react";

type InfoListType = {
  text: string;
  icon: LucideIcon;
};

const InfoList = ({ text, icon: Icon }: InfoListType) => {
  return (
    <li>
      <div className="flex gap-2 my-1">
        <Icon /> {text}
      </div>
    </li>
  );
};

export default InfoList;
