import clsx from "clsx";
import { type LucideIcon } from "lucide-react";

type InfoListType = {
  text: string;
  icon: LucideIcon;
  isMobile: boolean;
};

const InfoList = ({ text, icon: Icon, isMobile }: InfoListType) => {
  return (
    <li>
      <div className="flex items-center gap-2 my-1">
        <Icon className={clsx(isMobile ? "mt-0.5 size-4 shrink-0" : "")} />
        <span className="wrap-anywhere">{text}</span>
      </div>
    </li>
  );
};

export default InfoList;
