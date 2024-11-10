import FoodItem from "./FoodItem";
export default function foodList({ foodData, foodId, setFoodId }) {
  return (
    <div>
      <h2>Search Result:</h2>
      {foodData.map((item) => (
        <FoodItem
          foodId={foodId}
          setFoodId={setFoodId}
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}
