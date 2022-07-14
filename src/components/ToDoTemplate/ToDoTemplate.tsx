import React from "react";
import "./ToDoTemplate.scss";
import ToDoTitle from "../ToDoTitle/ToDoTitle";
import ToDoList from "../ToDoList/ToDoList";
import ToDoInput from "../ToDoInput/ToDoInput";

export default function ToDoTemplate() {
  return (
    <div className="ToDoTemplate">
      <div className="ToDoTemplate-contents">
        <ToDoTitle />
        <ToDoList />
        <ToDoInput />
      </div>
    </div>
  );
}
