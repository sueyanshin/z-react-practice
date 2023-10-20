import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="row vh-100">
      <div className="col-12 d-flex flex-column justify-content-center align-items-center gap-2">
        <div className="fs-3 fw-medium">
          This is our recipe website you can try to cook meal our instructions.
        </div>
        <div className="text-lead fs-4">
          Click the start button to make you delicious curry.
        </div>

        <div
          className="btn btn-primary"
          onClick={() => {
            navigate("/home");
          }}
        >
          Get Started
        </div>
      </div>
    </div>
  );
};

export default Welcome;
