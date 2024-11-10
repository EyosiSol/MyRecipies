import { useState } from "react";
import SearchBar from "./searchBar";
import FoodList from "./foodList";
import Nav from "./Nav";
import Container from "../components/Container.jsx";
import style from '../Styles/container.module.css'
import LeftContainer from "../components/leftContainer.jsx";
import rightContainer from "../components/rightContainer.jsx";
import FoodDetails from "../components/FoodDetails.jsx";


export default function FoodApp() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Nav />
      <SearchBar foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <LeftContainer>
          <FoodList foodData={foodData} />
        </LeftContainer>
      <rightContainer>
        <FoodDetails/>
      </rightContainer>
      </Container>
    </>
  );
}
