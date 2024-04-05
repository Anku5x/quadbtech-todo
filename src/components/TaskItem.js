import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";

const TaskItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const handleCompleted = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };
  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <>
      <div className="row mx-5 bg-secondary rounded my-1 text-light">
        <div className="col py-2">
          <span className="d-none">{id}</span>
          <input
            className="form-check-input"
            type="checkbox"
            checked={completed}
            onChange={handleCompleted}
          />
        </div>
        <div className="col py-2">
          <p>{title}</p>
        </div>
        <div className="col py-2">
          <p>
            {completed ? (
              <span className="text-white">Completed</span>
            ) : (
              <span className="text-light">Incomplete</span>
            )}
          </p>
        </div>
        <div className="col py-2">
          <button onClick={handleDelete} className="btn btn-danger">
            🗑️
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
