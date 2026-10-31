import AppCard from "@/components/AppCard/AppCard";
import { clsx } from "cn";
import { useEffect, useState } from "react";

const Apps = () => {
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
          ? "flex flex-col items-center gap-5"
          : "flex justify-center text-lg gap-5",
      )}
    >
      <AppCard
        title="The Completion Hall"
        description="My personal gaming log with completion dates, platforms, and notes"
        link="/games"
        newCard
      />
      <AppCard
        title="The Disc Archive"
        description="A collection of my personal movies."
        link="/movies"
      />
    </div>
  );
};

export default Apps;
