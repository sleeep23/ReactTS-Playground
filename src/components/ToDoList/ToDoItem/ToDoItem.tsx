import React, { useCallback, useState } from "react";
import "./ToDoItem.scss";
import { IToDoTypes } from "../../../recoil/todo";
import { SetterOrUpdater } from "recoil";
import ToDoModal from "../../ToDoModal/ToDoModal";

interface PropTypes {
  id: number;
  contents: string;
  isCompleted: boolean;

  onCompleted: (id: number) => void;
  onDelete: (id: number) => void;

  todos: IToDoTypes[];
  setToDos: SetterOrUpdater<IToDoTypes[]>;
}

export default function ToDoItem({
  id,
  contents,
  isCompleted,
  onCompleted,
  onDelete,
  todos,
  setToDos,
}: PropTypes) {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modifyContents, setModifyContents] = useState<string>("");

  const onModify = useCallback((): void => {
    setIsModal(true);
    setModifyContents(contents);
  }, [contents]);

  const onModifyToDo = useCallback((): void => {
    if (!modifyContents.trim()) {
      return;
    }

    setToDos(
      todos.map((todo: IToDoTypes) => {
        return todo.id === id ? { ...todo, contents: modifyContents } : todo;
      })
    );

    setIsModal(false);
  }, [id, modifyContents, setToDos, todos]);
  return (
    <>
      <div className="ToDoItem">
        <div
          title={contents}
          className={isCompleted ? "ToDoItem-completed" : ""}
          onClick={() => onCompleted}
          style={{ color: "#fff" }}
        >
          {contents}
        </div>
        <div className="ToDoItem-icons">
          <button className="ToDoItem-modify" onClick={onModify}>
            Modify
          </button>
          <button className="ToDoItem-delete" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </div>
      {isModal && (
        <ToDoModal
          setIsModal={setIsModal}
          modifyContents={modifyContents}
          setModifyContents={setModifyContents}
          onModifyToDo={onModifyToDo}
        />
      )}
    </>
  );
}
