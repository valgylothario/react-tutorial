import React from "react";
import "./App.css";
import MealList from "./MealList";

function App() {
  const [meals, setMeals] = React.useState([
    "Backed Beans",
    "Backed Sweet Potatoes",
    "Green Sald",
    "Pizza",
  ]);

  return (
    <React.Fragment>
      <MealList meals={meals}></MealList>
    </React.Fragment>
  );
}
export default App;
