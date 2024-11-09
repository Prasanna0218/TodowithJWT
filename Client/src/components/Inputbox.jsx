import React from "react";
import "./Inputbox.css";

const Inputbox = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <form action="">
          <div className="inputdiv">
            <input
              type="text"
              name="tododata"
              placeholder="Enter works todo..."
              className="form-box"
            />
            <button className="addbtn" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Inputbox;
