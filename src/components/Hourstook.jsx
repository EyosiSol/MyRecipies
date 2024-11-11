export default function Hourstook({foodInfo}) {
    return (
        <div className="hrs">
        <h5> Preparation Min: {foodInfo.preparationMinutes}</h5>
        <h5> Cooking Min: {foodInfo.cookingMinutes}</h5>
        <h5> Serving: {foodInfo.servings}</h5>
        <h5> Health Score: {foodInfo.healthScore}</h5>
      </div>
    );
  }
  