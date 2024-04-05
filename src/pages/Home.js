import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import TaskInput from "../components/TaskInput";
import TaskView from "../components/TaskView";
const Home = () => {
  const [taskForm, setTaskForm] = useState("none");
  const [closeButton, setCloseButton] = useState("none");
  const [filter, setFilter] = useState("");

  const formVisible = () => {
    setTaskForm("flex");
    setFilter("filter-blur");
    setCloseButton("flex");
  };

  const FormClose = () => {
    setTaskForm("none");
    setFilter("");
    setCloseButton("none");
  };
  return (
    <>
      <div className={`${filter}`}>
        <Layout>
          <TaskView />
          <div className={`d-flex justify-content-center ${filter}`}>
            <div className="w-75">
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={formVisible}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </Layout>
      </div>
      <div className={`w-100 d-${closeButton} justify-content-end`}>
        <div className="w-25 mx-5 d=flex justify-content-end ">
          <button className="btn btn-danger" onClick={FormClose}>
            ✖
          </button>
        </div>
      </div>
      <TaskInput taskform={taskForm} />
    </>
  );
};

export default Home;
