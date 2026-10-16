import { useEffect, useState } from "react";
import HomepageTabs from "./Homepage/HomepageTabs/HomepageTabs";
import Sidebar from "./Homepage/Sidebar/Sidebar";
import clsx from "clsx";

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const checkForMobileDevice = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", checkForMobileDevice);
    return () => {
      window.removeEventListener("resize", checkForMobileDevice);
    };
  }, []);

  return (
    <div
      className={clsx(
        isMobile
          ? "flex flex-col justify-center items-center"
          : "flex flex-row justify-center gap-20",
      )}
    >
      <div>
        <Sidebar isMobile={isMobile} />
      </div>
      <div>
        <div className="mt-5">
          <HomepageTabs />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
