import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = () => {
  return (
    <div className="font-poppins px-4 lg:px-0">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
