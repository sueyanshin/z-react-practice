import React from "react";

function MyForm() {
  return (
    <div className=" form-group col-md-6 ">
      <h1 className="">Login Form</h1>
      <input
        type="text"
        className="form-control my-2"
        placeholder="Email"
        name="email"
      />
      <input
        type="password"
        className="form-control my-2"
        placeholder="Password"
        name="password"
      />

      <button className="btn btn-success" type="submit">
        Login
      </button>
    </div>
  );
}
export default MyForm;
