import React, { useState } from "react";

const Todo = ({ id, task, deleteTodo, editTodo }) => {
  const [editTask, setEditTask] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  // set isEditing the opposite of what it is before
  const toggleEdit = () => {
    setIsEditing(edit => !edit);
  }

  // set editTodo to the value of what is the event's value?
  const handleChange = evt => {
    setEditTask(evt.target.value);
  }

  const handleDelete = () => deleteTodo(id);

  const handleUpdate = evt => {
    evt.preventDefault();
    editTodo(id, editTask);
    setIsEditing(false);
  };

  // set default settings
  let formSettings = (
    <div>
      <li>{task}</li>
      <button onClick={handleDelete}>X</button>
      <button onClick={toggleEdit}>Edit Task</button>
    </div>
  );

  // set edit settings -> show form for editing when isEditing is True
  if (isEditing){
    formSettings = (
      <div>
        <form onSubmit={handleUpdate}>
          <input
            id="task"
            type="text"
            name="task"
            value={editTask}
            onChange={handleChange}
          />
        <button>Update!</button>
        </form>
      </div>
    )
  };

  return formSettings;

}

export default Todo;


