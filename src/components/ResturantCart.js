import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const ResturantCart = (props) => {
    const { resData } = props;
    const {LogedInUser} = useContext(UserContext)
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines = [],
      costForTwo,
      sla,
    } = resData?.info || {} ;
    return (
      <div data-testid="resCard" className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={ CDN_URL+ cloudinaryImageId}
          />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} Minutes</h4>
        <h4>user: {LogedInUser}</h4>
      </div>
    );
  };
  export default ResturantCart;