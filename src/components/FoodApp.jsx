import { useState } from "react";
import SearchBar from "./SearchBar";
import FoodList from "./foodList";
import Nav from "./Nav";
import Container from "../components/Container.jsx";
// import style from '../Styles/container.module.css'
import LeftContainer from "../components/leftContainer.jsx";
import RightContainer from "../components/rightContainer.jsx";
import FoodDetails from "../components/FoodDetails.jsx";


export default function FoodApp() {
  const [foodData, setFoodData] = useState([]);
  const [FoodID,setFoodId] = useState(715415)
  return (
    <>
      <Nav />
      <SearchBar foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <LeftContainer>
          <FoodList foodData={foodData} foodId={FoodID} setFoodId={setFoodId}/>
        </LeftContainer>
      <RightContainer>
        <FoodDetails foodId={FoodID}/>
      </RightContainer>
      </Container>
    </>
  );
}
