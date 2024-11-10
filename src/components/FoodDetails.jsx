import { useEffect } from "react";

function FoodDetails({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "cfe94ae6f51e4e1da1eec2edb586996e";

  useEffect(() => {
    async function FetchDetail() {
      const resp = await fetch(`${URL}?apiKey=${API_KEY}`);
      const myData = await resp.json();
      console.log(myData);
    }
    FetchDetail();
  }, [foodId]);
  return (
    <>
      <div className="Header">
        <h1>Food Details</h1>
      </div>
      <div className="detail">{foodId}</div>
    </>
  );
}

export default FoodDetails;
