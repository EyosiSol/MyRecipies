export default function Recipies({foodInfo}){
    return(
        <div className="recipies">
          {foodInfo.extendedIngredients &&
            foodInfo.extendedIngredients.length > 0 &&
            foodInfo.extendedIngredients.map((item, index) => (
              <div key={index}>
                <img src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{item.measures.metric.amount}{item.measures.metric.unitShort}</p>
              </div>
            ))}
        </div>
    )
}