import { useEffect, useState } from "react";
import Styles from '../Styles/foodDetails.module.css'
import FoodRecipeDetail from "./FoodRecipeDetail";
import Hourstook from "./Hourstook";
import Recipies from "./recipes";
import Instructions from "./instructions";

function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "13568cbfc97e41cbbb44c57544063044";
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
    <>
      <div className={Styles.header}>
        <h1>Food Details</h1>
      </div>
      <div className="detail">
        <h3>{foodInfo.title}</h3>
        <div>
          <img src={foodInfo.image} alt={foodInfo.title} />
          <p>${foodInfo.pricePerServing}</p>
        </div>
        <FoodRecipeDetail foodInfo={foodInfo}/>
        <Hourstook foodInfo={foodInfo}/>
        <Recipies foodInfo={foodInfo}/>
        <Instructions foodInfo={foodInfo}/>
      </div>
    </>
  );
}
export default FoodDetails;

///https://spoonacular.com/cdn/ingredients_100x100/{image}
