import {ResturantCard,withPromotedLabel} from "./Resto-card";
import { resturantsList } from "../utils/sample-resto-data";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  let [restList, setRestList] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [filteredRestList, setfilteredRestList] = useState();
  const onlineStatus = useOnlineStatus();
  const ResturantCardPromoted = withPromotedLabel(ResturantCard);
  const {loggedInUser, setUserName } = useContext(UserContext);

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

  if (!onlineStatus) return <h1 className="text-center text-xl font-bold text-red-500">You are offline</h1>;
  if (restList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          className="w-1/2 p-2 border border-gray-300 rounded-md"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={() => {
            const list = restList.filter((item) =>
              item.card.card.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredRestList(list);
          }}
        >
          Search
        </button>

        <div className="search m-4 p-4 flex item center">
          <label>UserName: </label>
          <input className="border border-balck p-2"  value = {loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
          </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredRestList.map((item) => (
          item.card.card.info.promoted ? (<ResturantCardPromoted resturant={item} key={item.card.card.info.id}  />) :
         ( <ResturantCard resturant={item} key={item.card.card.info.id} />)
        ))}
      </div>
    </div>
  );
};

module.exports = { Body };
