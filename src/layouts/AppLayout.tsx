import { Outlet } from "react-router";
import HeaderBar from "../components/headerBar/headerBar";

const AppLayout = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
};

export default AppLayout;
