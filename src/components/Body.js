import ResturantCard from "./Resto-card";
import { resturantsList } from "../utils/sample-resto-data";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  let [restList, setRestList] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [filteredRestList, setfilteredRestList] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    setRestList(json?.data?.cards.slice(3));
    setfilteredRestList(json?.data?.cards.slice(3));
  };
  if (restList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div
        className="filter"
        style={{
          display: "flex",
          "justifyContent": "space-between",
          margin: "10px",
        }}
      >
        <input type="text" style={{ width: "50%" }} value={searchText} onChange={
          (e)=>{
            setSearchText(e.target.value);
          }
        }></input>

        <button className="search-btn" onClick={()=>{
          const list = restList.filter(item=>{
            console.log( item.card.card.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
            return item.card.card.info.name.toLowerCase().includes(searchText.toLowerCase());
          })
          setfilteredRestList(list)
        }}>Search</button>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestList = restList.filter(
              (item) => item.card.card.info.avgRating >= 4.4
            );
            setRestList(filteredRestList);
            console.log(restList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredRestList.map((item) => (
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
