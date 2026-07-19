import { Spinner } from "../ui/spinner";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Spinner className="size-15" />
    </div>
  );
};

export default Loading;
