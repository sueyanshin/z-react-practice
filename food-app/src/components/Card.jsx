import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="col-3 p-2">
      <div className="card">
        <img src={item.strMealThumb} className="card-img-top" alt="img" />
        <div className="card-body">
          <p className="card-text">{item.strMeal}</p>
          <div
            className="btn btn-sm btn-outline-primary w-100"
            onClick={() => {
              navigate("/detail", {
                state: {
                  id: item.idMeal,
                },
              });
            }}
          >
            Detail
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
