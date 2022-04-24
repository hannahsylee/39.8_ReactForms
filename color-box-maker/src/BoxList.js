import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";


const BoxList = () => {
  // const INITIAL_STATE = [
  //   { id: uuid(), backgroundColor: 'red', width: 10, height: 10 },
  //   { id: uuid(), backgroundColor: 'blue', width: 5, height: 5 },
  //   { id: uuid(), backgroundColor: 'yellow', width: 15, height: 10 },
  // ]
  // const [boxes, setBoxes] = useState(INITIAL_STATE);
  const [boxes, setBoxes] = useState([]);
  const deleteBox = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id))
  }
  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
  }
  return (
    <div>
      <h3>Box List</h3>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ id, backgroundColor, width, height }) => <Box id={id} backgroundColor={backgroundColor} width={width} height={height} handleRemove={deleteBox} key={id} />)}
      </div>
    </div>
  )

}

export default BoxList;


