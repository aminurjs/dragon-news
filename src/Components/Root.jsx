import { Outlet } from "react-router-dom";
import Header from "./Header";

const Root = () => {
  return (
    <div className="font-poppins">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
