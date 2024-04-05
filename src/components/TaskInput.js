import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const TaskInput = (props) => {
  const [textInput, setTextInput] = useState("");
  const dispatch = useDispatch();
  const handleSumbmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: textInput,
      })
    );
  };
  return (
    <>
      <div
        className={`d-${props.taskform} w-100 justify-content-center align-items-center position-absolute`}
      >
        <div className="w-25 border border-black rounded">
          <form>
            <label className="mx-1">
              Task Name: <br />
              <input
                className="w-100 mx-1"
                onChange={(e) => {
                  setTextInput(e.target.value);
                }}
              ></input>
            </label>
            <br />
            <div className="d-flex justify-content-end my-1 mx-5">
              <button className="btn btn-success" onClick={handleSumbmit}>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskInput;
