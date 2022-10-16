import { useMealsContext } from "./MealsProvider";

const Counter = () => {
  const { meals } = useMealsContext();

  const counterStyle = {
    fontSize: "bold",
    width: "300px",
    textAlign: "center",
    margin: "auto",
  };
  return <h3 style={counterStyle}> Number of meals: {meals.length}</h3>;
};

export default Counter;
