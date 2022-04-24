import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm";


const TodoList = () => {

  const [todos, setTodos] = useState([]);

  const deleteTodo = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }
  const addTodo = (newTodo) => {
    setTodos(todos => [...todos, { ...newTodo, id: uuid() }])
  }

  const editTodo = (id, editTask) => {
    setTodos(todos => todos.map(todo => todo.id === id ? {  ...todos, task: editTask  } : todo))
  }

  const renderTodos = todos.map(todo => (
    <Todo
    deleteTodo={deleteTodo}
    key={todo.id}
    id={todo.id}
    task={todo.task}
    editTodo={editTodo}
    />
  ));

  return (
    <div>
      <h3>Todo List</h3>
      <NewTodoForm addTodo={addTodo} />
      <ul>{renderTodos}</ul>
    </div>
  )

}

export default TodoList;


