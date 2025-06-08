import { useState } from "react";
import UseRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantsMenu = () => {
  const { resId } = useParams();
  const resInfo = UseRestaurantMenu(resId);
  const[ShowIndex, setShowIndex] = useState(null);

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

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
  <div className="menu-container">
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {Array.isArray(cuisines)
          ? cuisines.join(", ")
          : "No cuisines available"}{" "}
        - {costForTwoMessage || "Price not available"}
      </p>

      <h2>Menu</h2>

      {categories?.map((category, Index) => (
        <RestaurantCategory 
        key={category.card?.card?.title}
        data={category.card?.card} 
        Showitems={Index===ShowIndex ? true : false}
        setShowIndex={() => setShowIndex(Index)  }
        />
      ))}
    </div>
  </div>
  );
};
export default RestaurantsMenu;
