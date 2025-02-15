import React from "react";
import Shimmer from "./Shimmer";
import { DISH_URL, ALT_IMG_FOOD } from "../utils/constants";
import { FaLeaf, FaDrumstickBite } from "react-icons/fa";
import { useParams } from "react-router";
import useFetchResturantMenu from "../utils/useFetchResturantMenu";

export default function RestaurantMenu() {
  const { restId } = useParams();
  const resInfo = useFetchResturantMenu(restId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2].card?.card?.info;

  const menuCategories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.slice(2)
      .map((item) => ({
        title: item.card.card.title,
        itemCards: item.card.card.itemCards,
      }))
      .filter((item) => item.itemCards);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">{name}</h1>
      <p className="text-center text-gray-600 mb-6">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div>
        {menuCategories.map((category, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">{category.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.itemCards.map((menu, idx) => (
                <div
                  key={idx}
                  className="p-4 shadow-md rounded-lg bg-white flex flex-col items-center"
                >
                  <img
                    className="w-32 h-32 object-cover rounded-md mb-2"
                    alt="img"
                    src={menu.card.info.imageId ? `${DISH_URL}${menu.card.info.imageId}` : ALT_IMG_FOOD}
                  />
                  <h4 className="text-lg font-semibold">{menu.card.info.name}</h4>
                  <p className="text-gray-500 text-sm text-center">{menu.card.info.description}</p>
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className="text-yellow-400">
                        {i < Math.round(menu.card.info.ratings?.aggregatedRating?.rating) ? "★" : "☆"}
                      </span>
                    ))}
                    {menu.card.info.ratings?.aggregatedRating?.ratingCount && (
                      <span className="text-gray-500 ml-2">
                        ({menu.card.info.ratings.aggregatedRating.ratingCount})
                      </span>
                    )}
                  </div>
                  <h4
                    className={`mt-2 px-2 py-1 rounded-md text-white flex items-center ${menu.card.info.isVeg ? "bg-green-500" : "bg-red-500"}`}
                  >
                    {menu.card.info.isVeg ? <FaLeaf className="mr-1" /> : <FaDrumstickBite className="mr-1" />} 
                    {menu.card.info.isVeg ? "Veg" : "Non-Veg"}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
