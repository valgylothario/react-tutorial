import React, { useState } from "react";
import { useMealsContext } from "./MealsProvider";

const MealsForm = () => {
  const [meal, setMeal] = useState("");
  const { dispatch } = useMealsContext();

  const handleChange = (event) => {
    setMeal(event.target.value);
  };

  const inputStyle = {
    height: "2rem",
    marginLeft: "1rem",
  };

  const formElement = {
    border: "3px solid goldenrod",
    width: "300px",
    height: "50px",
    textAlign: "center",
    padding: "2rem",
    position: "relative",
    top: "20rem",
    marginBottom: "1rem",
    backgroundColor: "aquamarine",
  };

  const buttonStyle = {
    display: "block",
    position: "relative",
    top: "1rem",
    left: "10rem",
    width: "5rem",
  };

  return (
    <div>
      <form style={formElement}>
        <label htmlFor="mealName">Enter a Meal</label>
        <input
          style={inputStyle}
          type="text"
          name="mealName"
          id="mealName"
          onChange={handleChange}
          value={meal}
          autoComplete="off"
          placeholder="Ex: Apple Sald"
        />
        <button
          onClick={() => dispatch({ type: "Add", payload: meal })}
          style={buttonStyle}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default MealsForm;
