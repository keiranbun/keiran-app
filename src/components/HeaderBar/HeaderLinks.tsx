import { navigateNewTab } from "@/util/navigate";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { getPathname } from "@/lib/utils";
import { clsx } from "clsx";
import type { Dispatch, SetStateAction } from "react";

const buttonStyling = "text-lg m-0 p-0 px-1 pt-1";
const selectedPageStyling = "hover:no-underline" + " " + buttonStyling;

type HeaderLinkType = {
  name: string;
  link: string;
  currentPathname?: string;
  onClick?: () => void;
};

type HeaderMobileLinkType = {
  setMenuClicked: Dispatch<SetStateAction<boolean>>;
};

const HeaderLinks = () => {
  const currentPathname = getPathname();

  return (
    <div className="flex items-center space-x-4">
      <div className="flex flex-row items-center mx-2">
        <HeaderLink name="home" link="/" currentPathname={currentPathname} />
        <HeaderLink
          name="apps"
          link="/apps"
          currentPathname={currentPathname}
        />
        <HeaderLink
          name="projects"
          link="/projects"
          currentPathname={currentPathname}
        />
        <HeaderNewTab name="github" link="https://github.com/keiranbun" />
      </div>
    </div>
  );
};

export const HeaderMobileLinks = ({ setMenuClicked }: HeaderMobileLinkType) => {
  const currentPathname = getPathname();

  return (
    <div>
      <div className="flex flex-col z-10 bg-background w-3xs mx-auto absolute top-11 border border-primary left-0 right-0 gap-3 items-center">
        <HeaderLink
          name="home"
          link="/"
          currentPathname={currentPathname}
          onClick={() => setMenuClicked(false)}
        />
        <HeaderLink
          name="apps"
          link="/apps"
          currentPathname={currentPathname}
          onClick={() => setMenuClicked(false)}
        />
        <HeaderLink
          name="projects"
          link="/projects"
          currentPathname={currentPathname}
          onClick={() => setMenuClicked(false)}
        />
        <HeaderNewTab name="github" link="https://github.com/keiranbun" />
      </div>
    </div>
  );
};

const HeaderLink = ({
  name,
  link,
  currentPathname,
  onClick,
}: HeaderLinkType) => {
  const currentPageIsPathname = currentPathname === link;
  const displayName = currentPageIsPathname ? name : `[${name}]`;

  return (
    <Link to={link}>
      <Button
        variant="link"
        className={clsx(
          currentPageIsPathname ? selectedPageStyling : buttonStyling,
        )}
        onClick={onClick}
      >
        {displayName}
      </Button>
    </Link>
  );
};

const HeaderNewTab = ({ name, link }: HeaderLinkType) => {
  const displayName = `[${name}]`;

  return (
    <Button
      variant="link"
      className={buttonStyling}
      onClick={() => navigateNewTab(`${link}`)}
    >
      {displayName}
    </Button>
  );
};

export default HeaderLinks;
