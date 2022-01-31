import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Card.module.css";
import Item from "./Item";
const Card = ({ item: { id, image, title } }) => {
  const [summary, setSummary] = useState("");
  const [details, setDetails] = useState("");
  const [timeTaken, setTimeTaken] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const url = `https://api.spoonacular.com/recipes/${id}/information?&apiKey=7fe5ed3f1220491bbba6757b18cffe44`;
  useEffect(() => {
    const info = async () => {
      try {
        const response = await axios.get(url);
        const data = await response.data.spoonacularSourceUrl;
        const detail = await response.data.servings;
        const time = await response.data.readyInMinutes;
        const itemData = await response.data.extendedIngredients;

        setSummary(data);
        setDetails(detail);
        setTimeTaken(time);
        setIngredients(itemData);
      } catch (err) {
        alert("Daily Fetching Data Limited Reached");
      }
    };

    info();
  }, [id]);

  return (
    <div className={style.card}>
      <article className={style.container}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.image}>
          <img src={image} alt="Recipe Img" />
        </div>
        <div className={style.list}>
          <p>
            <strong>Preparation time:</strong>
            {timeTaken} minutes
          </p>
          <p>
            <strong>Number of serving:</strong>
            {details}
          </p>
        </div>
        <div className={style.cards}>
          <a href={summary} rel="noreferrer" target="_blank">
            <button className={style.recipeButton}>Go To Recipe</button>
          </a>
          <h2>Ingredients</h2>
          <div className={style.card_title}>
            <strong>Name</strong>
            <strong>Item</strong>
          </div>
          {ingredients.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
      </article>
    </div>
  );
};

export default Card;
