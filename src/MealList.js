const MealList = ({ meals }) => {
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
      {meals.map((meal, index) => (
        <h2 key={index} style={mealElement}>
          {meal}
        </h2>
      ))}
    </div>
  );
};

export default MealList;
