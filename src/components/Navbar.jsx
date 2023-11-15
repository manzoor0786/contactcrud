import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailSlice";

const Navbar = () => {
  const allusers = useSelector((state) => state.app.users);
  const dispatch = useDispatch();

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  return (
    <div >
     
             <div style={{fontSize:'20px',marginBottom:'20px'}}>
                <Link to="/create"  style={{textDecoration:'none'}}>
                  Create Post
                </Link>
              
       </div>

       <div style={{fontSize:'15px',marginBottom:'20px'}}>
                <Link to="/read" style={{textDecoration:'none'}}>
                  All Post ({allusers.length})
                </Link>
                </div>
           
            <input
              className="form-control me-2 w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
            
          </div>
     
  );
};

export default Navbar;