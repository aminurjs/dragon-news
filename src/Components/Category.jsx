import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "../Styles/style.css";

const Category = ({ category }) => {
  return (
    <ul className="category">
      <li>
        <NavLink
          to={category?.name}
          className="rounded-md text-xl font-medium text-dark-4 py-3 pl-10 block"
        >
          {category?.name}
        </NavLink>
      </li>
    </ul>
  );
};

Category.propTypes = {
  category: PropTypes.object,
};

export default Category;
