import FoodItem from './FoodItem';
export default function foodList({foodData}){
    return(<div>
        <h2>Search Result:</h2>
        {foodData.map((item)=>(<FoodItem key={item.id} item={item}/>))}
    </div>)
}

