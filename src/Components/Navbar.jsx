import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { CgProfile } from "react-icons/cg";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, profile, setProfile, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => toast.success("Logged-out successful."));
    setProfile(false);
  };

  const menus = [
    {
      id: "001",
      name: "Home",
      path: "/",
    },
    {
      id: "002",
      name: "About Us",
      path: "/about-us",
    },
    {
      id: "003",
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="navbar pt-5 pb-16">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menus.map((menu) => (
              <li key={menu.id}>
                <NavLink to={menu.path}>{menu.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <a href="/" className="font-bold normal-case text-xl">
          Dragon News
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menus.map((menu) => (
            <li key={menu.id}>
              <NavLink to={menu.path}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          <Toaster
            toastOptions={{
              success: {
                style: {
                  background: "green",
                  color: "white",
                },
              },
              error: {
                style: {
                  background: "red",
                  color: "white",
                },
              },
            }}
          />
        </div>
        {user ? (
          <div className="relative">
            <button onClick={() => setProfile(!profile)} className="btn">
              <CgProfile className="text-2xl"></CgProfile>
            </button>
            <div
              className={`${
                profile ? "" : "invisible"
              } absolute w-24 right-0 top-full mt-2`}
            >
              <button onClick={handleLogOut} className="btn">
                Log out
              </button>
            </div>
          </div>
        ) : (
          <Link to={"/login"} className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
