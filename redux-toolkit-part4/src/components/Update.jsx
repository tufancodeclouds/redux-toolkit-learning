import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // initial structure so fields are always controlled
  const [updateData, setUpdateData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  const { users } = useSelector((state) => state.app);

  // Load selected user data when id changes
  useEffect(() => {
    if (id && users?.length > 0) {
      const singleUser = users.find((ele) => ele.id === id);
      if (singleUser) {
        setUpdateData({
          name: singleUser.name || "",
          email: singleUser.email || "",
          age: singleUser.age || "",
          gender: singleUser.gender || "",
          id: singleUser.id, // keep id for update request
        });
      }
    }
  }, [id, users]);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle submit
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div>
      <h2 className="my-2 text-center">Edit the data</h2>

      <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={updateData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={updateData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={updateData.age}
            onChange={handleChange}
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
              checked={updateData.gender === "Male"}
              onChange={handleChange}
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
              checked={updateData.gender === "Female"}
              onChange={handleChange}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
