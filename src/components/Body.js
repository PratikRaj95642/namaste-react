import ResturantCart from "./ResturantCart";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [lisOfResturant, setLisOfResturant] = useState([]);
  const [FilteredResturant, setFilteredResturant] = useState([]);
  const [SearchText, setSearchText] = useState("");

  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5625337&lng=88.4953013&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    
    const json = await data.json();
    
    console.log(json);
    setLisOfResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    
  };
  


  return lisOfResturant.length===0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
      <div className="search">
        <input type="text"
         className="search-bar" 
         value={SearchText} 
         onChange={(e) => {
          setSearchText(e.target.value);
         }}
         />
        <button onClick={() => {
          console.log(SearchText);
          const FilteredResturant = lisOfResturant.filter(
            (res) => res?.info?.name?.toLowerCase().includes(SearchText.toLowerCase()) 
            );
            setFilteredResturant(FilteredResturant);
        }}
        >
        Search</button>
      </div>
        <button className="filter-btn" 
        onClick={() => {
          const filteredlist=lisOfResturant.filter(
            (res)=> res.info.avgRating > 4.4
          );
          setFilteredResturant(filteredlist);
        }}
        >Top Rated Resturant</button>
      </div>
      <div className="res-container">
        {FilteredResturant.map((resturant) => (
          <ResturantCart key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
