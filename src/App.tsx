import React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toDoState } from "./atom";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  background-color: #f2f4f6;
  width: 100%;
  padding: 20px 16px;
  border-radius: 4px;
  min-height: 200px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) return;
    setToDos((oldToDos) => {
      const copyToDos = [...oldToDos];
      // 1. splice the source
      copyToDos.splice(source.index, 1);
      // 2. put the spliced idx in front of the copied array
      copyToDos.splice(destination?.index, 0, draggableId);
      return copyToDos;
    });
  };

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#3f8cf2" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            <Droppable droppableId="one">
              {(provided) => (
                <Board
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ listStyle: "none", paddingLeft: "none" }}
                >
                  {toDos.map((todo, index) => (
                    <DraggableCard key={todo} todo={todo} index={index} />
                  ))}
                  {provided.placeholder}
                </Board>
              )}
            </Droppable>
          </Boards>
        </Wrapper>
      </DragDropContext>
    </div>
  );
}

export default App;
