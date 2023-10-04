import PropTypes from "prop-types";
import { BsFillCalendar2EventFill } from "react-icons/bs";

const Sports = ({ sport }) => {
  console.log("sports", sport);
  return (
    <div className="mb-6">
      <img src={sport.image} alt="" />
      <h1 className="my-3 text-xl font-semibold text-dark-2">{sport.title}</h1>
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-dark-2">{sport.category}</h4>
        <div>
          <p className="text-sm text-dark-3 flex items-center gap-3">
            <span>
              <BsFillCalendar2EventFill></BsFillCalendar2EventFill>
            </span>
            <span>{sport.date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Sports.propTypes = {
  sport: PropTypes.object,
};

export default Sports;
