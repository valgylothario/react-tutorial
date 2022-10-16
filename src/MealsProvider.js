import React from "react";

//create context
const MealContext = React.createContext();

const MealsProvider = ({ children }) => {
  //create state
  const [meals, setMeals] = React.useState([
    "Backed Beans",
    "Backed Sweet Potatoes",
    "Green Sald",
    "Pizza",
  ]);

  const AddMeals = (newMeal) => setMeals([...meals, newMeal]);

  //return provider value with the children.
  return (
    <MealContext.Provider value={{ meals, AddMeals }}>
      {children}
    </MealContext.Provider>
  );
};
export const useMealsContext = () => React.useContext(MealContext);

export default MealsProvider;
