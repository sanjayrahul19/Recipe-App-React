import React, { useState } from "react";
import axios from "axios";
import Nav from "./components/Nav";
import Card from "./components/Card";
const App = () => {
  const [recipe, setRecipe] = useState("");
  const [recipeItems, setRecipeItems] = useState([]);

  const onChange = (e) => {
    setRecipe(e.target.value);
  };

  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${recipe}&number=9&apiKey=7fe5ed3f1220491bbba6757b18cffe44`;

  const info = async () => {
    try {
      const response = await axios.get(url);
      if (!response.data.results[0]) {
        return alert("No food with such name");
      } else {
        setRecipeItems(response.data.results);
      }
    } catch (err) {
      alert("Daily Fetching Data Limited Reached");
    }
  };

  return (
    <div>
      <Nav onChange={onChange} info={info} />
      {recipeItems.map((item, index) => {
        return <Card key={index} item={item} />;
      })}
    </div>
  );
};

export default App;
