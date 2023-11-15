import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState();

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  console.log("updated data", updateData);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div>
      <h2 className="my-2">Edit the data</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
        <div class="mb-3">
        
          <input
            type="text"
            name="name"
         placeholder="Name"
            value={updateData && updateData.name}
            onChange={newData}
          />
        </div>
        <div class="mb-3" style={{padding:'50px'}}>

          <input
            type="email"
            name="email"
  placeholder="Email"
            value={updateData && updateData.email}
            onChange={newData}
          />
        </div>
        <div class="mb-3" >
    
          <input
            type="text"
            name="age"
        placeholder="Age"
            value={updateData && updateData.age}
            onChange={newData}
          />
        </div>
        <div class="mb-3" >
          <input
            class="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            checked={updateData && updateData.gender === "Male"}
            onChange={newData}
          />
          <label class="form-check-label">MALE</label>
        </div>
        <div class="mb-3">
          <input
            class="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            checked={updateData && updateData.gender === "Female"}
            onChange={newData}
          />
          <label class="form-check-label">FEMALE</label>
        </div>

        <button type="submit" class="button-89" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;