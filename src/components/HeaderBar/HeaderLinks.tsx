import { navigateNewTab } from "@/util/navigate";
import { Button } from "../ui/button";
import { Link } from "react-router";

const buttonStyling = "text-lg m-0 p-0 mx-1 mt-1";

type HeaderLinkType = {
  name: string;
  link: string;
};

const HeaderLinks = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex flex-row items-center mx-2">
        <HeaderLink name="home" link="/" />
        <HeaderLink name="apps" link="/apps" />
        <HeaderNewTab name="github" link="https://github.com/keiranbun" />
        <HeaderLink name="projects" link="/projects" />
      </div>
    </div>
  );
};

const HeaderLink = ({ name, link }: HeaderLinkType) => {
  return (
    <Link to={link}>
      <Button variant="link" className={buttonStyling}>
        [{name}]
      </Button>
    </Link>
  );
};

const HeaderNewTab = ({ name, link }: HeaderLinkType) => {
  return (
    <Button
      variant="link"
      className={buttonStyling}
      onClick={() => navigateNewTab(`${link}`)}
    >
      [{name}]
    </Button>
  );
};

export default HeaderLinks;
