import React from "react";

//create context
const MealContext = React.createContext();

// define reducer function
const reducer = (state, action) => {
  if (action.type === "Add") {
    return [...state, action.payload];
  }
  if (action.type === "Delete") {
    return state.filter((value) => value !== action.payload);
  }
};

const MealsProvider = ({ children }) => {
  //create state
  const initialState = [
    "Backed Beans",
    "Backed Sweet Potatoes",
    "Green Sald",
    "Pizza",
  ];

  const [state, dispatch] = React.useReducer(reducer, initialState);

  //return provider value with the children.
  return (
    <MealContext.Provider value={{ state, dispatch }}>
      {children}
    </MealContext.Provider>
  );
};
export const useMealsContext = () => React.useContext(MealContext);

export default MealsProvider;
