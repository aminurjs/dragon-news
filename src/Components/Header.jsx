import moment from "moment/moment";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <header className="max-w-6xl mx-auto">
      <img className="mt-12 mx-auto mb-5" src={logo} alt="" />
      <p className="text-lg mb-3 text-dark-3 text-center">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl font-medium text-dark-3 text-center mb-8">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
      <div className="p-4 bg-dark-7 flex">
        <button className="px-7 py-2.5 bg-[#D72050] text-white text-xl font-medium mr-3">
          Latest
        </button>
        <Marquee>
          <p className="mr-10">
            1. Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="mr-10">
            2. Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="mr-10">
            3. Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </div>
      <Navbar></Navbar>
    </header>
  );
};

export default Header;
