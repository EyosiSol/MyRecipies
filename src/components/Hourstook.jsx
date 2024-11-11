import Style from "../Styles/hourstaken.module.css";

export default function Hourstook({ foodInfo }) {
  return (
    <div className={Style.container}>
      <div className={Style.hour}>
        <h5> Preparation Min: {foodInfo.preparationMinutes}</h5>
      </div>
      <div className={Style.hour}>
        <h5> Cooking Min: {foodInfo.cookingMinutes}</h5>
      </div>
      <div className={Style.hour}>
        <h5> Serving: {foodInfo.servings}</h5>
      </div>
      <div className={Style.hour}>
        <h5> Health Score: {foodInfo.healthScore}</h5>
      </div>
    </div>
  );
}
