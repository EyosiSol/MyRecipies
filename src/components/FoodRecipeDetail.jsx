export default function FoodRecipeDetail({foodInfo}) {
  return (
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
        <h4>Very healty?: {foodInfo.veryHealthy ? <p>Yes</p> : <p>No</p>}</h4>
      </div>
    </div>
  );
}
