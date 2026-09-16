import { useNavigate } from "react-router";
import { Separator } from "../ui/separator";
import HeaderLinks, { HeaderMobileLinks } from "./HeaderLinks";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const HeaderBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const checkIsMobileDevice = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", checkIsMobileDevice);

    return () => {
      window.removeEventListener("resize", checkIsMobileDevice);
    };
  }, []);

  return (
    <div className="mb-5">
      <div className="flex justify-center">
        <h3 className="text-3xl pb-1 pt-1">
          <span
            className="text-primary hover:underline"
            onClick={handleLogoClick}
          >
            keiran
          </span>
          .app
        </h3>
        {isMobile ? <MobileHeaderBar /> : <DesktopHeaderBar />}
      </div>
      <Separator />
    </div>
  );
};

const DesktopHeaderBar = () => {
  return (
    <div className="flex">
      <HeaderLinks />
    </div>
  );
};

const MobileHeaderBar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  console.log(menuClicked);

  return (
    <div className="flex items-center ml-5">
      <Menu
        className="size-8"
        onClick={() => setMenuClicked((prev) => !prev)}
      />
      {menuClicked ? (
        <HeaderMobileLinks setMenuClicked={setMenuClicked} />
      ) : undefined}
    </div>
  );
};

export default HeaderBar;
