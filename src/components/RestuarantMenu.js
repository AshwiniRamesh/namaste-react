import React, { useMemo, useState } from "react";
import Shimmer from "./Shimmer";
import { DISH_URL, ALT_IMG_FOOD } from "../utils/constants";
import { FaLeaf, FaDrumstickBite, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useParams } from "react-router";
import useFetchResturantMenu from "../utils/useFetchResturantMenu";

export default function RestaurantMenu() {
  const { restId } = useParams();
  const resInfo = useFetchResturantMenu(restId);

  const restaurantDetails = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { name = "Unknown Restaurant", cuisines = [], costForTwoMessage = "" } = restaurantDetails;

  const menuCategories = useMemo(() => {
    return (
      resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        ?.slice(2)
        .map((item) => ({
          title: item.card.card.title,
          itemCards: item.card.card.itemCards || [],
        }))
        .filter((item) => item.itemCards.length > 0) || []
    );
  }, [resInfo]);

  if (!resInfo) return <Shimmer />; // ✅ Always return after all hooks

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">{name}</h1>
      <p className="text-center text-gray-600 mb-6">
        {cuisines.join(", ") || "Various Cuisines"} - {costForTwoMessage}
      </p>
      <div>
        {menuCategories.map((category, index) => (
          <CategorySection key={index} category={category} defaultOpen={index === 0} />
        ))}
      </div>
    </div>
  );
}


const CategorySection = ({ category, defaultOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-6 border rounded-lg shadow-md bg-white overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-all"
      >
        <h3 className="text-lg font-semibold">{category.title}</h3>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      <div className={`transition-all duration-300 ${isOpen ? "block p-4" : "hidden p-0"}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {category.itemCards.map((menu, idx) => (
            <MenuItem key={idx} menu={menu.card.info} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ menu }) => {
  const vegClass = menu.isVeg ? "bg-green-500" : "bg-red-500";
  return (
    <div className="p-4 shadow-md rounded-lg bg-white flex flex-col items-center">
      <img
        className="w-32 h-32 object-cover rounded-md mb-2"
        alt={menu.name || "Food Item"}
        src={menu.imageId ? `${DISH_URL}${menu.imageId}` : ALT_IMG_FOOD}
      />
      <h4 className="text-lg font-semibold">{menu.name || "Unknown Dish"}</h4>
      <p className="text-gray-500 text-sm text-center">{menu.description || "No description available."}</p>
      
      <div className="flex items-center mt-2">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="text-yellow-400">
            {i < Math.round(menu.ratings?.aggregatedRating?.rating) ? "★" : "☆"}
          </span>
        ))}
        {menu.ratings?.aggregatedRating?.ratingCount && (
          <span className="text-gray-500 ml-2">
            ({menu.ratings.aggregatedRating.ratingCount})
          </span>
        )}
      </div>

      <h4 className={`mt-2 px-2 py-1 rounded-md text-white flex items-center ${vegClass}`}>
        {menu.isVeg ? <FaLeaf className="mr-1" /> : <FaDrumstickBite className="mr-1" />}
        {menu.isVeg ? "Veg" : "Non-Veg"}
      </h4>
    </div>
  );
};
