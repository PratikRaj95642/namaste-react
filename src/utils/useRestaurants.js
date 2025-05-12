import { RESTAURANT_API } from "./constants"
import { useEffect, useState } from "react";


const UseRestaurants = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    
  
    const fetchData = async () => {
        const data = await fetch(RESTAURANT_API);
        const json = await data.json();
        console.log(json);

        setListOfRestaurant(
            json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
          console.log(setListOfRestaurant);

    };
    useEffect(() => {
        fetchData();
    },[]);

    return listOfRestaurant;


};
export default UseRestaurants;