import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    <div className="navbar bg-base-100 mt-5 mb-16">
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
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;