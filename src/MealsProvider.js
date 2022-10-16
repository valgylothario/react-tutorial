import React from "react";

//create context
const MealContext = React.createContext();

//actions
const actions = {
  ADD_MEAL: "ADD_MEAL",
  DELETE_MEAL: "DELETE_MEAL",
};

// define reducer function
const reducer = (state, action) => {
  if (action.type === actions.ADD_MEAL) {
    return [...state, action.payload];
  }
  if (action.type === actions.DELETE_MEAL) {
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

  const value = {
    meals: state,
    addMeal: (meal) => {
      dispatch({ type: actions.ADD_MEAL, payload: meal });
    },
    deleteMeal: (meal) => {
      dispatch({ type: actions.DELETE_MEAL, payload: meal });
    },
  };

  //return provider value with the children.
  return <MealContext.Provider value={value}>{children}</MealContext.Provider>;
};
export const useMealsContext = () => React.useContext(MealContext);

export default MealsProvider;
