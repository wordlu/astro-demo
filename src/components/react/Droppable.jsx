import React from "react";
import { useDroppable } from "@dnd-kit/core";

 function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
    width:'300px',
    height:'300px',
    background:'red'
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

export default Droppable