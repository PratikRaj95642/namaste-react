import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
const UseRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return resInfo;
};
export default UseRestaurantMenu;
