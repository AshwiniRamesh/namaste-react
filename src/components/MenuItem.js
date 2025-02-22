import React from "react";
import { FaLeaf, FaDrumstickBite } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { DISH_URL, ALT_IMG_FOOD } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const MenuItem = ({ menu }) => {
  const vegClass = menu.isVeg ? "bg-green-500" : "bg-red-500";
  const dispatch = useDispatch();
  const handleAddItem = (item)=>{
dispatch(addItem(item));
  };
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
      {/* Add to Cart Button */}
      <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      onClick={() => handleAddItem(menu.name)}>
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItem;
