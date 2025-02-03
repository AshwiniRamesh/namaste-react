import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import "../styles/RestaurantMenu.css";
import { DISH_URL, MENU_URL, ALT_IMG_FOOD } from "../utils/constants";
import { FaLeaf, FaDrumstickBite } from "react-icons/fa"; // Import icons for Veg and Non-Veg
import { useParams } from "react-router";

export default function RestaurantMenu() {
  const { restId } = useParams();
  const [resInfo, setResInfo] = useState(null);

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
    <div className="rest-info">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} {costForTwoMessage}
      </p>
      <div>
        {menuCategories.map((category, index) => (
          <div className="menu-category" key={index}>
            <h3>{category.title}</h3>
            <div className="carousel">
              {category.itemCards.map((menu, idx) => (
                <div className="carousel-item" key={idx}>
                  {menu.card.info.imageId ? (
                    <img
                      alt="img"
                      src={`${DISH_URL}${menu.card.info.imageId}`}
                    />
                  ) : (
                    <img alt="placeholder" src={ALT_IMG_FOOD} />
                  )}

                  <h4>{menu.card.info.name}</h4>
                  <h4>{menu.card.info.description}</h4>
                  <div className="rating">
                    {/* Display stars based on rating */}
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className="star">
                        {i <
                        Math.round(
                          menu.card.info.ratings?.aggregatedRating?.rating
                        )
                          ? "★"
                          : "☆"}
                      </span>
                    ))}
                    {/* Conditionally render the rating count */}
                    {menu.card.info.ratings?.aggregatedRating?.ratingCount !==
                      undefined && (
                      <span>
                        {" "}
                        ({menu.card.info.ratings.aggregatedRating.ratingCount})
                      </span>
                    )}
                  </div>
                  <h4
                    className={`tag ${
                      menu.card.info.isVeg ? "veg" : "non-veg"
                    }`}
                  >
                    {menu.card.info.isVeg ? <FaLeaf /> : <FaDrumstickBite />}
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
