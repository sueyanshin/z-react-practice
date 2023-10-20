import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";
import { BsYoutube } from "react-icons/bs";

const Detail = () => {
  const { state } = useLocation();
  //   const idMeal = location.state.id;
  const [mealDetail, setMealDetail] = useState();
  const [loading, setLoading] = useState(true);
  const [readMore, setReadMore] = useState(false);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${state.id}`
    );
    console.log(state.id);
    const { meals } = await api.json();
    setMealDetail(meals);
    setLoading(false);
    console.log(meals);
  };

  const handleReadMore = () => {
    setReadMore(true);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="card mb-3 shadow p-4  ">
        <div className="row g-0">
          {mealDetail?.map((item) => {
            return (
              <div className="d-flex p-3" key={item.idMeal}>
                <div className="col-md-4">
                  <img
                    src={item.strMealThumb}
                    className="img-fluid rounded-4 object-fit-cover"
                    alt="pic"
                    style={{ width: "700px", height: "400px" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h5 className="card-title">{item.strMeal}</h5>
                        <p className="text-muted">Instructions</p>
                      </div>
                      <a
                        href={item.strYoutube}
                        target="_blank"
                        className="btn  fs-4 shadow"
                        onClick={() => {
                          Navigate("");
                        }}
                      >
                        Watch on <BsYoutube className="text-danger" />
                      </a>
                    </div>
                    {/* Instruction */}
                    {readMore ? (
                      <span>{item.strInstructions}</span>
                    ) : (
                      <div>
                        <span>{item.strInstructions.substr(0, 400)}</span>
                        <span
                          className="cursor-pointer text-primary"
                          onClick={handleReadMore}
                        >
                          ...Read More &darr;
                        </span>
                      </div>
                    )}

                    <div>
                      <p className="fs-5 fs-bold mt-5">Ingredients 👩‍🍳</p>
                      <ul className="card-text ">
                        {Array.from({ length: 20 }, (_, i) => i + 1).map(
                          (index) => {
                            const ingredient = item[`strIngredient${index}`];
                            const measures = item[`strMeasure${index}`];
                            if (ingredient && measures) {
                              return (
                                <li key={index}>
                                  {ingredient}={measures}
                                </li>
                              );
                            }
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
