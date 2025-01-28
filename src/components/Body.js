import ResturantCard from "./Resto-card";
import { resturantsList } from "../utils/sample-resto-data";
import { useState } from "react";

const Body = () => {
let [restList, setRestList , getRestList] = useState(resturantsList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestList = resturantsList.filter(
              (item) => item.card.card.info.avgRating >= 4.7
            );
            setRestList(filteredRestList);
            console.log(restList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {restList.map((item) => (
          <ResturantCard
            resturant={item}
            key={item.card.card.info.id}
          ></ResturantCard>
        ))}
      </div>
    </div>
  );
};
module.exports = { Body };
