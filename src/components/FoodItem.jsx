import Style from "../Styles/Foods.module.css";

export default function FoodItem({ item, setFoodId }) {
  return (
    <div className={Style.card}>
      <img className={Style.foodImage} src={item.image} alt={item.title} />
      <div className={Style.content}>
        <p className={Style.itemTitle}>{item.title}</p>
      </div>
      <div className={Style.viewBtn}>
        <button
          onClick={() => {
            console.log(item.id);
            setFoodId(item.id);
          }}
          id={item.id}
        >
          View recipe
        </button>
      </div>
    </div>
  );
}
// 716429
