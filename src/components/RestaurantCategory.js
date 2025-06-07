
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, Showitems, setShowIndex }) => {
    const handleclick = () => {
        setShowIndex();
    };
//   console.log(data);
  return (
    <div className="category-container">
      <div className="CategoryHeader" onClick={handleclick}>
        <span>{data?.title} ({data.itemCards.length})</span>
        <span>🔽</span>
      </div>
      {Showitems && <ItemList item={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
