import PropTypes from "prop-types";
import Style from "../Styles/Foods.module.css";
export default function FoodItem({ item }) {
  return (
    <div className={Style.card}>
      <img className={Style.foodImage} src={item.image} alt={item.title} />
      <div className={Style.content}>
        <p className={Style.itemTitle}>{item.title}</p>
      </div>
      <div className={Style.viewBtn}>
        <button>View recipe</button>
      </div>
    </div>
  );
}

FoodItem.propTypes = {
  item: PropTypes.object,
};
