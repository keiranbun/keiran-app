import { navigateNewTab } from "@/util/navigate";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { getPathname } from "@/lib/utils";
import { clsx } from "clsx";

const buttonStyling = "text-lg m-0 p-0 px-1 pt-1";
const selectedPageStyling = "hover:no-underline" + " " + buttonStyling;

type HeaderLinkType = {
  name: string;
  link: string;
  currentPathname?: string;
};

const HeaderLinks = () => {
  const currentPathname = getPathname();
  console.log(currentPathname);

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

const HeaderLink = ({ name, link, currentPathname }: HeaderLinkType) => {
  const currentPageIsPathname = currentPathname === link;
  const displayName = currentPageIsPathname ? name : `[${name}]`;

  return (
    <Link to={link}>
      <Button
        variant="link"
        className={clsx(
          currentPageIsPathname ? selectedPageStyling : buttonStyling,
        )}
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
