import { useMealsContext } from "./MealsProvider";

const MealList = () => {
  const { state, dispatch } = useMealsContext();

  const titleCss = {
    textAlign: "center",
  };
  const mealElement = {
    border: "3px solid goldenrod",
    width: "300px",
    height: "50px",
    textAlign: "center",
    padding: "2rem",
    margin: "auto",
    marginBottom: "1rem",
    backgroundColor: "aquamarine",
  };

  return (
    <div>
      <h1 style={titleCss}>Meal List</h1>
      {state.map((meal, index) => (
        <h2 key={index} style={mealElement}>
          <button onClick={() => dispatch({ type: "Delete", payload: meal })}>
            X
          </button>
          {meal}
        </h2>
      ))}
    </div>
  );
};

export default MealList;
