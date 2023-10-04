import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";

const News = ({ news }) => {
  const { _id, title, author, image_url, details, rating, total_view } = news;
  return (
    <div className="mb-8  border border-gray-200 rounded-md">
      <div className="flex justify-between p-4 bg-dark-7 rounded-t-md">
        <div className="flex gap-4 items-start">
          <img
            className="w-10 rounded-full"
            src={author.img}
            alt={author.name}
          />
          <div>
            <h3 className="text-dark-2 font-semibold mb-1">
              {author.name ? author.name : "Awlad Hossain"}
            </h3>
            <p className="text-sm text-dark-3">
              {author.published_date
                ? author.published_date
                : "2022-08-30 15:00:04"}
            </p>
          </div>
        </div>
        <div>icons</div>
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold mb-5">{title}</h2>
        <img src={image_url} alt="" />
        <div className="pb-5 border-b border-gray-200">
          {details.length > 200 ? (
            <>
              <p>
                {details.slice(0, 200)}...{" "}
                <Link className="font-bold text-[#F75B5F]" to={`news/${_id}`}>
                  {" "}
                  Read more
                </Link>
              </p>
            </>
          ) : (
            details
          )}
        </div>
        <div className="pt-5 flex justify-between items-center">
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <span className="ml-2 font-medium text-dark-3">
              {rating.number}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <BsFillEyeFill></BsFillEyeFill>
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
News.propTypes = {
  news: PropTypes.object,
};
export default News;
