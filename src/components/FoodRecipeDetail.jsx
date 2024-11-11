import Styles from "../Styles/foodRecipeDetail.module.css";
export default function FoodRecipeDetail({ foodInfo }) {
  return (
    <div className={Styles.recipeDetail}>
      <div className={Styles.vegie}>
        <h2>🫛Vegeterian:</h2> {foodInfo.vegeterian ? <p>✅</p> : <p>❌</p>}
      </div>
      <div className={Styles.vegan}>
        <h2>🥛Vegean:</h2> {foodInfo.vegan ? <p>✅</p> : <p>❌</p>}
      </div>
      <div className={Styles.glutan}>
        <h2>🧈Glutan Free:</h2> {foodInfo.glutenFree ? <p>✅</p> : <p>❌</p>}
      </div>
      <div className={Styles.healthy}>
        <h2>👨‍⚕️Very healty?:</h2> {foodInfo.veryHealthy ? <p>✅</p> : <p>❌</p>}
      </div>
    </div>
  );
}
