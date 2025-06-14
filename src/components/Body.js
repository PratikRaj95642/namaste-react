import ResturantCart from "./ResturantCart";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UseRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const listOfRestaurant = UseRestaurants();
  const [FilteredResturant, setFilteredResturant] = useState([]);
  const [SearchText, setSearchText] = useState("");
  useEffect(() => {
    setFilteredResturant(listOfRestaurant);
  }, [listOfRestaurant]);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return(
  <h1>Look like you are offline !! Check your internet connection..</h1>);
  const {LogedInUser, setUserName} = useContext(UserContext)

  return !Array.isArray(listOfRestaurant) || listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            data-testid = "searchInput"
            className="search-bar"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const FilteredResturant = listOfRestaurant.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(SearchText.toLowerCase())
              );
              setFilteredResturant(FilteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredResturant(filteredlist);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div>
        <label>User name : </label>
        <input value={LogedInUser}
        onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div className="res-container">
        {FilteredResturant.map((resturant, index) => (
          <Link
            key={`${resturant.info.id}-${index}`}
            to={"/restaurants/" + resturant.info.id}
          >
            <ResturantCart resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
