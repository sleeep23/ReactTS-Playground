import React from "react";
import ToDoTemplate from "./components/ToDoTemplate/ToDoTemplate";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ToDoTemplate />} />
    </Routes>
  );
}

export default App;
