import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
} from "react";
import "./ToDoModal.scss";

interface PropTypes {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  modifyContents: string;
  setModifyContents: Dispatch<SetStateAction<string>>;
  onModifyToDo: () => void;
}

export default function ToDoModal({
  setIsModal,
  modifyContents,
  setModifyContents,
  onModifyToDo,
}: PropTypes) {
  const onCloseModal = useCallback((): void => {
    setIsModal(false);
  }, [setIsModal]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target;
      setModifyContents(value);
    },
    [setModifyContents]
  );
  return (
    <>
      <div className="ToDoModal-overlay" onClick={onCloseModal}></div>
      <div className="ToDoModal">
        <div className="ToDoModal-title">
          <span>To Do 수정하기</span>
        </div>
        <div className="ToDoModal-contents">
          <input
            type="text"
            className="ToDoModal-contents-input"
            value={modifyContents}
            onChange={onChange}
            placeholder="추가할 내용을 입력하세요!"
          />
          <button className="ToDoModal-contents-button" onClick={onModifyToDo}>
            수정하기
          </button>
        </div>
      </div>
    </>
  );
}
