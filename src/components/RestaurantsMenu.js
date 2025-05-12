import UseRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const resInfo = UseRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  //   const { itemCards } =
  //     resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[6]?.card
  //       ?.card || {};

  const itemCards = resInfo?.cards
    ?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
      (card) => card?.card?.card?.itemCards || []
    )
    ?.filter(Boolean);

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {Array.isArray(cuisines)
          ? cuisines.join(", ")
          : "No cuisines available"}{" "}
        - {costForTwoMessage || "Price not available"}
      </p>

      <h2>Menu</h2>
      <ul>
        {Array.isArray(itemCards) &&
          itemCards.map((item, index) => (
            <li key={`{item?.card?.info?.id}-${index}`}>
              {item?.card?.info?.name} -{" "}
              {item?.card?.info?.price / 100 ||
                (item.card.info.defaultPrice || 0) / 100}{" "}
              Rs
            </li>
          ))}
      </ul>
    </div>
  );
};
export default RestaurantsMenu;
