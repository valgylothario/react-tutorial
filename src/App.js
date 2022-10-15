import React from "react";
import "./App.css";
import MealList from "./MealList";

const meals = ["Backed Beans", "Backed Sweet Potatoes", "Green Sald", "Pizza"];

function App() {
  return (
    <React.Fragment>
      <MealList meals={meals}></MealList>
    </React.Fragment>
  );
}
export default App;
