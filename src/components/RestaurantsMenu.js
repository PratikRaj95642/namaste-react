import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
const RestaurantsMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

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
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {Array.isArray(itemCards) &&
          itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
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
