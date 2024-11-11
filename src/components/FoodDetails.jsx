import { useEffect, useState } from "react";

function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "c4eb7e5e35f046d396cab4c33b9c5612";
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
      <div className="Header">
        <h1>Food Details</h1>
      </div>
      <div className="detail">
        <h3>{foodInfo.title}</h3>
        <div>
          <img src={foodInfo.image} alt={foodInfo.title} />
          <p>${foodInfo.pricePerServing}</p>
        </div>
        <div className="recipedetails">
          <div className="vegie">
            <h4>Vegeterian: {foodInfo.vegeterian ? <p>Yes</p> : <p>No</p>}</h4>
          </div>
          <div className="vegan">
            <h4>Vegean: {foodInfo.vegan ? <p>Yes</p> : <p>No</p>}</h4>
          </div>
          <div className="glutan">
            <h4>Glutan Free: {foodInfo.glutenFree ? <p>Yes</p> : <p>No</p>}</h4>
          </div>
          <div className="healty">
            <h4>
              Very healty?: {foodInfo.veryHealthy ? <p>Yes</p> : <p>No</p>}
            </h4>
          </div>
        </div>
        <div className="hrs">
          <h5> Preparation Min: {foodInfo.preparationMinutes}</h5>
          <h5> Cooking Min: {foodInfo.cookingMinutes}</h5>
          <h5> Serving: {foodInfo.servings}</h5>
          <h5> Health Score: {foodInfo.healthScore}</h5>
        </div>
      </div>
    </>
  );
}
export default FoodDetails;
