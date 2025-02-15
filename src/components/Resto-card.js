import { CDN_URL } from "../utils/constants";
import { Link } from "react-router";

const ResturantCard = ({ resturant }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <img
        alt="resto image"
        className="w-full h-40 object-cover rounded-md"
        src={CDN_URL + resturant.card.card.info.cloudinaryImageId}
      />

      <Link
        key={resturant.card.card.info.id}
        to={"restaurants/" + resturant.card.card.info.id}
        className="block mt-2 text-lg font-semibold hover:text-blue-500"
      >
        {resturant.card.card.info.name}
      </Link>
      <h5 className="text-gray-600">{resturant.card.card.info.cuisines.join(", ")}</h5>
      <h5 className="text-gray-600">{resturant.card.card.info.costForTwo}</h5>
      <h5 className="text-gray-600">{resturant.card.card.info.totalRatingsString} ratings</h5>
      <h5 className="text-yellow-500 font-bold">⭐ {resturant.card.card.info.avgRating}</h5>
    </div>
  );
};

export default ResturantCard;
