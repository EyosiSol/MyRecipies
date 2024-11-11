import { useEffect, useState } from "react";
import Styles from "../Styles/foodDetails.module.css";
import FoodRecipeDetail from "./FoodRecipeDetail";
import Hourstook from "./Hourstook";
import Recipies from "./recipes";
import Instructions from "./instructions";

function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "cc36235140ea407eb930da82b1a9c733";
  const [foodInfo, setfoodInfo] = useState({});
  useEffect(() => {
    async function FetchDetail() {
      const resp = await fetch(`${URL}?apiKey=${API_KEY}`);
      const myData = await resp.json();
      console.log(myData);
      setfoodInfo(myData);
    }
    FetchDetail();
  }, [foodId]);
  return (
    <div className={Styles.parentContainer}>
      <div className={Styles.header}>
        <h1>Food Details: </h1>
      </div>
      <div className={Styles.details}>
        <h3 className={Styles.title}>{foodInfo.title}</h3>
        <div className={Styles.imgContainer}>
          <div className={Styles.img}>
            <img src={foodInfo.image} alt={foodInfo.title} />
          </div>
          <p>${foodInfo.pricePerServing}</p>
        </div>

        <FoodRecipeDetail foodInfo={foodInfo} />
        <Hourstook foodInfo={foodInfo} />
        <Recipies foodInfo={foodInfo} />
        <Instructions foodInfo={foodInfo} />
      </div>
    </div>
  );
}
export default FoodDetails;
