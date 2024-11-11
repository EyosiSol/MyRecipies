import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "../Styles/Search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "cc36235140ea407eb930da82b1a9c733";
export default function SearchBar({ setFoodData }) {
  //foodData//
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query, setFoodData]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.inputBar}
        value={query}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  setFoodData: PropTypes.func,
};
