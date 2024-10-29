import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import ErrorPage from "./ErrorPage";

const reqMethod = {};

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", reqMethod, []);

  if (isLoading) return <p className="center">feching places</p>;

  if(error){
    return <ErrorPage title="Failed to fetch meals" message={error}
    ></ErrorPage>
  }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal}></MealItem>
      ))}
    </ul>
  );
};

export default Meals;
