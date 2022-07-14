import React, { useCallback } from "react";
import "./ToDoList.scss";
import { useRecoilState } from "recoil";
import { IToDoTypes, todoState } from "../../recoil/todo";
import ToDoItem from "./ToDoItem/ToDoItem";

export default function ToDoList() {
  const [todos, setToDos] = useRecoilState<IToDoTypes[]>(todoState);

  const onComplete = useCallback(
    (id: number): void => {
      setToDos(
        todos.map((todo: IToDoTypes) => {
          return todo.id === id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo;
        })
      );
    },
    [setToDos, todos]
  );

  const onDelete = useCallback(
    (id: number) =>
      setToDos(todos.filter((todo: IToDoTypes) => todo.id !== id)),
    [setToDos, todos]
  );

  return (
    <div className="ToDoList">
      {todos.length > 0 ? (
        todos.map((todo: IToDoTypes) => {
          const { id, contents, isCompleted } = todo;
          console.log(todos);
          return (
            <ToDoItem
              key={id}
              id={id}
              contents={contents}
              isCompleted={isCompleted}
              onCompleted={onComplete}
              onDelete={onDelete}
              todos={todos}
              setToDos={setToDos}
            />
          );
        })
      ) : (
        <div className="ToDoList-no-list">ToDo 가 없습니다. 추가해보세요!</div>
      )}
    </div>
  );
}
