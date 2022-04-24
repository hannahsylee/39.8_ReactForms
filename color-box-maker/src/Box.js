import React from "react";

const Box = ({ id, backgroundColor, width, height, handleRemove }) => {
  const deleteBox = () => handleRemove(id);
  return (

    <div>
      <div
        style={{ 
          backgroundColor: backgroundColor, 
          width: `${width}em`, 
          height: `${height}em`
        }}
      />
      <button onClick={deleteBox}>Delete Box</button>
    </div>

  )

}

export default Box;


