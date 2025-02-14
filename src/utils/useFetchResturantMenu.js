import  { useEffect,useState } from "react";

import { MENU_URL } from "../utils/constants";
const useFetchResturantMenu = (restId) => {
  const [resInfo, setResInfo]= useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = `${MENU_URL}${restId}`;
    console.log(url);
    const response = await fetch(url);
    const json = await response.json();
    setResInfo(json.data);
  };

  return resInfo;
};
module.exports = useFetchResturantMenu;
