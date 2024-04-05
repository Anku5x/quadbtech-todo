import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
const TaskView = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      {todos.map((items) => (
        <TaskItem
          id={items.id}
          title={items.title}
          completed={items.completed}
        />
      ))}
    </>
  );
};
export default TaskView;
