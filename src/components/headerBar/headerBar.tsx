import { Separator } from "../ui/separator";

const HeaderBar = () => {
  return (
    <div className="mb-5">
      <div className="flex justify-center">
        <h3 className="text-3xl pb-1 pt-1">
          <span className="text-primary">keiran</span>
          .app
        </h3>
      </div>
      <Separator />
    </div>
  );
};

export default HeaderBar;
