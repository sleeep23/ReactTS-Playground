import { Draggable } from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 12px 12px;
  margin-bottom: 8px;
`;

interface IDraggableCardProps {
  todo: string;
  index: number;
}

function DraggableCard({ todo, index }: IDraggableCardProps) {
  return (
    <Draggable key={todo} draggableId={todo} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
