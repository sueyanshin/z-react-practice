import React from "react";

const Loading = () => {
  return (
    <div className="row vh-100 justify-content-center align-items-center">
      <div className="col-12 d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
