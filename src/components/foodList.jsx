import PropTypes from 'prop-types';
import FoodItem from './FoodItem';
export default function foodList({foodData}){
    return(<>
        {foodData.map((item)=>(<FoodItem key={item.id} item={item}/>))}
    </>)
}

foodList.proptypes = {
    foodData : PropTypes.object
}