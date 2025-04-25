import ResturantCart from "./ResturantCart";
import reslist from "../utils/MocckData";
import { useState } from "react";

const Body = () => {
  const [lisOfResturant, setLisOfResturant] = useState(reslist);


  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" 
        onClick={() => {
          const filteredlist=lisOfResturant.filter(
            (res)=> res.info.avgRating > 4
          );
          setLisOfResturant(filteredlist);
        }}
        >Top Rated Resturant</button>
      </div>
      <div className="res-container">
        {lisOfResturant.map((resturant) => (
          <ResturantCart key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
