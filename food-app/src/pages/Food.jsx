import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Option from "../components/Option";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

const Food = () => {
  const [loading, setLoading] = useState(true);
  const [food, setFood] = useState([]);
  const location = useLocation();
  const userChoice = location.state.foodapi;
  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${userChoice}`
    );
    const { meals } = await api.json();
    setFood(meals);
    setLoading(false);
  };

  console.log(food);
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="row ">
      {food.map((item) => {
        return <Card item={item} key={item.idMeal} />;
      })}
    </div>
  );
};

export default Food;
