import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="item-list">
      {item.map((item) => (
        <div data-testid="foodItems" key={item.card.info.id} className="item-card">
          <div className="item-header">
            <div className="item-details">
              <span className="item-name">{item.card.info.name} - </span>
              <span className="item-price">
                Rs{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="item-description">{item.card.info.description}</p>
            </div>

            <div className="item-media">
              {item.card.info.imageId && (
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="item-image"
                  alt={item.card.info.name}
                />
              )}
              <button className="add-cart" onClick={() => handleAddItem(item)}>Add +</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
