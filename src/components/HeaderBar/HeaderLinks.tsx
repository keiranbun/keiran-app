import { navigateNewTab } from "@/util/navigate";
import { Button } from "../ui/button";
import { Link } from "react-router";

const HeaderLinks = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex flex-row items-center mx-2">
        <Button
          variant="link"
          className={buttonStyling}
          onClick={() => navigateNewTab("https://github.com/keiranbun")}
        >
          github
        </Button>
        |
        <Link to="/projects">
          <Button variant="link" className={buttonStyling}>
            projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

const buttonStyling = "text-lg m-0 p-0 mx-1";

export default HeaderLinks;
