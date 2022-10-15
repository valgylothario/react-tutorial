import React from "react";
import "./App.css";

const meals = ["Backed Beans", "Backed Sweet Potatoes", "Green Sald", "Pizza"];

function App() {
  return (
    <React.Fragment>
      <h1>Meal List</h1>
      {meals.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
      ))}
    </React.Fragment>
  );
}
export default App;
