import React, { useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { inputState, IToDoTypes, todoState } from "../../recoil/todo";

import "./ToDoInput.scss";

export default function ToDoInput() {
  const [contents, setContents] = useRecoilState<string>(inputState);

  const todos = useRecoilValue<IToDoTypes[]>(todoState);
  const setToDos = useSetRecoilState<IToDoTypes[]>(todoState);

  const addToDo = useCallback((): void => {
    if (!contents.trim()) {
      return;
    }

    const nextId: number =
      todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;

    const todo: IToDoTypes = {
      id: nextId,
      contents,
      isCompleted: false,
    };

    setToDos([...todos, todo]);

    setContents("");
  }, [contents, setContents, setToDos, todos]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target;
      setContents(value);
    },
    [setContents]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.nativeEvent.isComposing) return;
      if (e.key === "Enter") {
        addToDo();
      }
      // console.log(e.target.value);
    },
    [addToDo]
  );

  return (
    <div className="ToDoInput">
      <input
        type="text"
        placeholder="이래저래요래 써보셈!"
        className="ToDoInput-input"
        value={contents}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button className="ToDoInput-button" onClick={addToDo}>
        Add
      </button>
    </div>
  );
}
