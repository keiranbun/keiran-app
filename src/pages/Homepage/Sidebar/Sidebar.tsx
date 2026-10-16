import clsx from "clsx";
import Me from "../../../assets/me.png";
import ImageCard from "./components/ImageCard";
import InfoPanel from "./components/InfoPanel/InfoPanel";

type SidebarType = {
  isMobile: boolean;
};

const Sidebar = ({ isMobile }: SidebarType) => {
  return (
    <div className={clsx(isMobile ? "flex items-center" : "")}>
      <ImageCard image={Me} isMobile={isMobile} />
      <InfoPanel isMobile={isMobile} />
    </div>
  );
};

export default Sidebar;
