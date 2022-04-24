import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, task = "Wash Dishes") {
  const taskInput = todoList.getByLabelText("Task:");
  fireEvent.change(taskInput, { target: { value: task } });
  const button = todoList.getByText("Add Task");
  fireEvent.click(button);
}

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new task", function () {
  const todoList = render(<TodoList />);

  // Edit and Delete button not shown
  expect(todoList.queryByText("Edit Task")).not.toBeInTheDocument();
  expect(todoList.queryByText("X")).not.toBeInTheDocument();

  // Add Todo
  addTodo(todoList);

  // expect Todo and Delete button
  expect(todoList.queryByText("Edit Task")).toBeInTheDocument();
  expect(todoList.queryByText("X")).toBeInTheDocument();
  expect(todoList.queryByText("Wash Dishes")).toBeInTheDocument();

  // expect form to be empty
  expect(todoList.getAllByDisplayValue("")).toHaveLength(1);
})

it("should remove a task", function () {
  const todoList = render(<TodoList />);

  // Delete button not shown
  expect(todoList.queryByText("X")).not.toBeInTheDocument();

  // Add Todo
  addTodo(todoList);

  // expect Todo and Delete button
  expect(todoList.queryByText("X")).toBeInTheDocument();
  // expect to see a Todo
  const removeButton = todoList.getByText("X");
  fireEvent.click(removeButton);

  // Delete button not shown
  expect(todoList.queryByText("Wash Dishes")).not.toBeInTheDocument();
})

it("should update a task", function () {
  const todoList = render(<TodoList />);

  // Delete button not shown
  expect(todoList.queryByText("Edit Task")).not.toBeInTheDocument();

  // Add Todo
  addTodo(todoList);
  // expect Todo and Delete button
  expect(todoList.queryByText("Edit Task")).toBeInTheDocument();
  // click Edit Task Button
  const editButton = todoList.getByText("Edit Task");
  fireEvent.click(editButton);
  const editInput = todoList.getByDisplayValue("Wash Dishes");
  fireEvent.change(editInput, { target: { value: "Wash Clothes" } });
  fireEvent.click(todoList.getByText("Update!"));


  // Delete button not shown
  expect(todoList.queryByText("Wash Dishes")).not.toBeInTheDocument();
  expect(todoList.queryByText("Wash Clothes")).toBeInTheDocument();
})

