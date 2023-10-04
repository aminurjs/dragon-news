import { useEffect, useState } from "react";
import Category from "../Components/Category";
import News from "../Components/News";
import Sports from "../Components/Sports";
import Aside from "../Components/Aside";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useState([]);
  const [sports, setSports] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("categories.json");
      const data = await res.json();
      setCategories(data);
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("news.json");
      const data = await res.json();
      setNews(data);
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("sports.json");
      const data = await res.json();
      setSports(data);
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      <div>
        <h2 className="text-xl font-semibold text-dark-2 mb-5">All Category</h2>
        <div>
          {categories?.map((category) => (
            <Category key={category.id} category={category}></Category>
          ))}
        </div>
        <div className="mt-5">
          {sports?.map((sport) => (
            <Sports key={sport.id} sport={sport}></Sports>
          ))}
        </div>
      </div>

      <div className="md:col-span-2">
        <h2 className="text-xl font-semibold text-dark-2 mb-5">
          Dragon News Home
        </h2>
        {news?.map((aNews) => (
          <News key={aNews._id} news={aNews}></News>
        ))}
      </div>
      <Aside />
    </div>
  );
};

export default Home;
