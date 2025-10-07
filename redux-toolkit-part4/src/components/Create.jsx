import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../features/userDetailSlice";

const Create = () => {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserData = (e) => {
    const { name, value } = e.target;
    setUsers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(users));
    navigate("/read");
  };

  return (
    <div>
      <h2 className="my-2 text-center">Fill the data</h2>

      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={users.name}
            onChange={getUserData}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={users.email}
            onChange={getUserData}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={users.age}
            onChange={getUserData}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Gender</label>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              name="gender"
              value="Male"
              type="radio"
              checked={users.gender === "Male"}
              onChange={getUserData}
              required
            />
            <label className="form-check-label">Male</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              name="gender"
              value="Female"
              type="radio"
              checked={users.gender === "Female"}
              onChange={getUserData}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
