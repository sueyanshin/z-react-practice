import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Option from "../components/Option";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [menuOption, setMenuOption] = useState([]);
  const fetchData = async () => {
    const api = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const { categories } = await api.json();
    console.log(categories);
    setMenuOption(categories);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="row">
      <div className="col-12">
        {menuOption.map((item) => (
          <Option item={item} key={item.idCategory} />
        ))}
      </div>
    </div>
  );
};

export default Home;
