import {CDN_URL} from '../utils/constants';

const styleCard = {
  backgroundColor: "f0f0f0",
};
const ResturantCard = ({ resturant }) => {
  return (
    <div className="restr-card rounded-box" style={styleCard}>
      <img
        alt="resto image"
        className="resto-image"
        src={
          CDN_URL+
          resturant.card.card.info.cloudinaryImageId
        }
      />
      <h3>{resturant.card.card.info.name}</h3>
      <h5>{resturant.card.card.info.cuisines.join(", ")}</h5>
      <h5>{resturant.card.card.info.costForTwo}</h5>
      <h5>{resturant.card.card.info.totalRatingsString} ratings</h5>
      <h5 className="star">
        <span style={{ "paddingLeft": "15px" }}>
          {resturant.card.card.info.avgRating}
        </span>
      </h5>
    </div>
  );
};

export default ResturantCard;
