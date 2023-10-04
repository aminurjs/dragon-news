import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import zone1 from "../assets/qZone1.png";
import zone2 from "../assets/qZone2.png";
import zone3 from "../assets/qZone3.png";

const Aside = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-dark-2 mb-5">Login With</h2>
        <div>
          <button className="btn py-2 w-full text-dark-3 font-medium btn-outline capitalize mb-3">
            <FcGoogle className="inline text-lg"></FcGoogle> Continue with
            Google
          </button>
          <button className="btn py-2 w-full text-dark-3 font-medium btn-outline capitalize">
            <BsGithub className="inline text-lg text-dark-2"></BsGithub>{" "}
            Continue with Github
          </button>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-dark-2 mb-5">Find Us On</h2>
        <div className="border border-gray-200 rounded-md">
          <ul>
            <li className="p-3 border-b border-gray-200">
              <a className="flex gap-2 items-center" href="" target="blank">
                <div className="p-1.5 bg-dark-7 rounded-full text-xl">
                  <FaFacebookF></FaFacebookF>
                </div>
                <span className="text-dark-3 font-medium">Facebook</span>
              </a>
            </li>
            <li className="p-3 border-b border-gray-200">
              <a className="flex gap-2 items-center" href="" target="blank">
                <div className="p-1.5 bg-dark-7 rounded-full text-xl text-[#58A7DE]">
                  <BsTwitter></BsTwitter>
                </div>

                <span className="text-dark-3 font-medium">Twitter</span>
              </a>
            </li>
            <li className="p-3">
              <a className="flex gap-2 items-center" href="" target="blank">
                <div className="p-1.5 bg-dark-7 rounded-full text-xl  text-[#D9465E]">
                  <BsInstagram></BsInstagram>
                </div>
                <span className="text-dark-3 font-medium">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4 bg-dark-7 rounded-md">
        <h2 className="text-xl font-semibold text-dark-2 mb-8">Q-Zone</h2>
        <img className="mb-5" src={zone1} alt="" />
        <img className="mb-5" src={zone2} alt="" />
        <img className="mb-5" src={zone3} alt="" />
      </div>
    </div>
  );
};

export default Aside;
