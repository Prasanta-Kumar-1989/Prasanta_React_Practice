import Restuarants from "../resturants/Restuarants";
import "../body/Body.css";
import { useState, useEffect } from "react";
import Shimmer from "../Shimmer";
const Body = () => {
  //Super powerful state variable
  const [filter_restuarant, setfilter_restuarant] = useState([]);
  const [searchfilter_restuarant, setsearchfilter_restuarant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5881121&lng=88.4592396&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //Optional Chaimning ?.?.
    setfilter_restuarant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setsearchfilter_restuarant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const mostRated = filter_restuarant.filter((rest) => {
    return rest.info.avgRatingString >= 4.5;
  });

  return filter_restuarant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>
        <button
          className="filter_btn"
          onClick={() => {
            setfilter_restuarant(mostRated);
          }}
        >
          Top Most Resturants
        </button>
      </div>

      <div className="search_bar">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          maxlength="200"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredRestro = filter_restuarant.filter((res) =>
              res.info.name.includes(searchText)
            );
            setsearchfilter_restuarant(filteredRestro);
          }}
        >
          <span>&#128269;</span>
        </button>
      </div>
      <div className="restuarant_container">
        {searchfilter_restuarant.map((restro) => (
          <Restuarants bodyData={restro} />
        ))}
      </div>
    </div>
  );
};
export default Body;
