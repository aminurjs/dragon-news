import { useLoaderData, useParams } from "react-router-dom";
import Aside from "../Components/Aside";

const NewsDetails = () => {
  const news = useLoaderData();
  const { id } = useParams();

  const filterNews = news?.find((aNews) => aNews._id === id);
  const { image_url, title, details } = filterNews;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      <div className="col-span-3 p-7 border border-gray-200 rounded-md">
        <img className="w-full mb-5" src={image_url} alt="" />
        <h1 className="text-2xl text-dark-2 font-bold leading-relaxed mb-3">
          {title}
        </h1>
        <p className=" text-dark-3 leading-normal">{details}</p>
      </div>

      <Aside></Aside>
    </div>
  );
};

export default NewsDetails;
