import { Button } from "../ui/button";

const HeaderLinks = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex flex-row items-center mx-2">
        <Button variant="link" className={buttonStyling}>
          home
        </Button>
        |
        <Button variant="link" className={buttonStyling}>
          github
        </Button>
        |
        <Button variant="link" className={buttonStyling}>
          projects
        </Button>
      </div>
    </div>
  );
};

const buttonStyling = "text-lg m-0 p-0 mx-1";

export default HeaderLinks;
