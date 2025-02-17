import React, { useMemo } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useFetchResturantMenu from "../utils/useFetchResturantMenu";
import CategorySection from "./CategorySection";

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

  if (!resInfo) return <Shimmer />;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">{name}</h1>
      <p className="text-center text-gray-600 mb-6">
        {cuisines.join(", ") || "Various Cuisines"} - {costForTwoMessage}
      </p>
      <div>
        {menuCategories.map((category, index) => (
          <CategorySection 
          key={index} 
          showItems={false}
          category={category} 
          defaultOpen={index === 0} />
        ))}
      </div>
    </div>
  );
}
