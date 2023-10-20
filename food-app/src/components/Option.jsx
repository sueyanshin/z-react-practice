import React from "react";
import { useNavigate } from "react-router-dom";

const Option = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="col-12">
      <div className="card col-10 mx-auto mb-3 shadow">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={item.strCategoryThumb}
              className="img-fluid rounded-start"
              alt="pic"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.strCategory}</h5>
              <p className="card-text" style={{ textAlign: "justify" }}>
                {item.strCategoryDescription}
              </p>
              <div
                className="btn btn-primary"
                onClick={() => {
                  navigate("/food", {
                    state: {
                      foodapi: item.strCategory,
                    },
                  });
                }}
              >
                See More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Option;
