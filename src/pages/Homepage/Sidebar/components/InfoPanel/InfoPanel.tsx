import { currentAge } from "@/util/age";
import {
  Briefcase,
  CalendarDays,
  CircleUser,
  Mail,
  MapPin,
} from "lucide-react";
import InfoList from "./InfoList";
import clsx from "clsx";

type InfoPanelType = {
  isMobile: boolean;
};

const InfoPanel = ({ isMobile }: InfoPanelType) => {
  const age = currentAge();

  return (
    <div
      className={clsx(
        isMobile
          ? "flex flex-col items-start ml-2 w-fit"
          : "flex flex-col items-center justify-center mt-5",
      )}
    >
      <ul className="text-sm">
        <InfoList text={String(age)} icon={CalendarDays} />
        <InfoList text="Keiran Bunyan" icon={CircleUser} />
        <InfoList text="Brisbane, QLD" icon={MapPin} />
        <InfoList text="Software Developer" icon={Briefcase} />
        <InfoList text="bunyan.keiran@gmail.com" icon={Mail} />
      </ul>
    </div>
  );
};

export default InfoPanel;
