import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../features/userDetailSlice";

const Create = () => {
  const [users, setUsers] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users...", users);
    dispatch(createUser(users));
    navigate("/read");
  };

  return (
    <div style={{fontFamily:'Caveat'}} >
      <h2 className="my-2">Fill the data</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div style={{marginBottom:'15px'}} >
          
          <input
            type="text"
            name="name"
       placeholder="NAME"
            onChange={getUserData}
            required
          
          />
        </div>
        <div  style={{marginBottom:'15px'}}>
        
          <input
            type="email"
            name="email"
            class="form-control"
            onChange={getUserData}
            required
            placeholder="EMAIL"
          />
        </div>
        <div  style={{marginBottom:'15px'}}>
         
          <input
            type="text"
            name="age"
       placeholder="AGE"
            onChange={getUserData}
            required
          />
        </div>
        <div >
          <input
            class="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            onChange={getUserData}
            required
          />
          <label class="form-check-label" >MALE</label>
        </div>
        <div  style={{padding:'10px'}}>
          <input
            class="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            onChange={getUserData}
          />
          <label class="form-check-label">FEMALE</label>
        </div>

        <button type="submit"class="button-89" style={{marginBottom:'80px'}} >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;