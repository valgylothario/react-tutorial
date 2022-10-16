import React from "react";
import "./App.css";
import Counter from "./Counter";
import MealList from "./MealList";
import MealsForm from "./MealForm";
import MealsProvider from "./MealsProvider";

function App() {
  return (
    <React.Fragment>
      <MealsProvider>
        <MealsForm />
        <MealList />
        <Counter />
      </MealsProvider>
    </React.Fragment>
  );
}
export default App;
