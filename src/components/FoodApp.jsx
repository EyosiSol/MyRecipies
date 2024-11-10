import { useState } from "react";
import SearchBar from "./searchBar";
import FoodList from "./foodList";
import Nav from "./Nav";
import Style from "../Styles/FoodApp.module.css";
export default function FoodApp() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Nav />
      <SearchBar foodData={foodData} setFoodData={setFoodData} />
      <div className={Style.container}>
        <div className={Style.leftDiv}>
          <h2>Search Result:</h2>
          <FoodList foodData={foodData} />
        </div>
        <div className={Style.rightDiv}></div>
      </div>
    </>
  );
}
