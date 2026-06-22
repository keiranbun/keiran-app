import { Outlet } from "react-router";
import HeaderBar from "../components/HeaderBar/HeaderBar";

const AppLayout = () => {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
};

export default AppLayout;
