import "../resturants/Restuarants.css";
import { CDN_URL, LOCATION_IMG } from "../../utils/constant";
const Restuarants = (props) => {
  const { bodyData } = props;
  console.log("uyfyufyu", props);
  const { cloudinaryImageId, name, avgRating, cuisines, locality, areaName } =
    bodyData.info;

  return (
    <>
      <div className="restuarant_card">
        <img src={`${CDN_URL}` + cloudinaryImageId} alt="Denim Jeans" />
        <div className="restro_name">
          <h3>{name}</h3>
          <p className="rating">
            <span>&#9733;</span> {avgRating}
          </p>
        </div>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <p className="location">
          <img src={LOCATION_IMG} alt="Denim Jeans" />
          <span>
            {locality}

            {areaName}
          </span>
        </p>
      </div>
    </>
  );
};

export default Restuarants;
