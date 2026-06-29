import { useNavigate } from "react-router";
import { Separator } from "../ui/separator";
import HeaderLinks from "./HeaderLinks";

const HeaderBar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

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
        <HeaderLinks />
      </div>
      <Separator />
    </div>
  );
};

export default HeaderBar;
