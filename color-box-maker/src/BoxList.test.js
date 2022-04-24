import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "2", width = "2", color = "aqua") {
  const widthInput = boxList.getByLabelText("Width:");
  const heightInput = boxList.getByLabelText("Height:");
  const backgroundInput = boxList.getByLabelText("Color:");
  // const heightInput = boxList.getByLabelText("Height");
  // const widthInput = boxList.getByLabelText("Width");
  // const backgroundInput = boxList.getByLabelText("Background Color");
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxList.getByText("Add Box");
  fireEvent.click(button);
}

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new box", function () {
  const boxList = render(<BoxList />);
  // const { queryByText, getByLabelText } = render(<BoxList />);
  // const widthInput = getByLabelText("Width:");
  // const heightInput = getByLabelText("Height:");
  // const backgroundInput = getByLabelText("Color:");
  // const button = queryByText("Add box");

  // Delete button not shown
  expect(boxList.queryByText("Delete Box")).not.toBeInTheDocument();

  // Add box
  addBox(boxList);
  // fireEvent.change(widthInput, { target: { value: '2' } });
  // fireEvent.change(heightInput, { target: { value: '2' } });
  // fireEvent.change(backgroundInput, { target: { value: 'aqua' } });

  // fireEvent.click(button);

  // expect box and Delete button
  expect(boxList.queryByText("Delete Box")).toBeInTheDocument();
  // expect to see a box
  const removeButton = boxList.getByText("Delete Box");
  // expect(removeButton).toBeInTheDocument();
  expect(removeButton.previousSibling).toHaveStyle(`
    width: 2em;
    height: 2em;
    background-color: aqua;
  `);
  // expect form to be empty
  expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
})

it("should remove a box", function () {
  const boxList = render(<BoxList />);

  // Delete button not shown
  expect(boxList.queryByText("Delete Box")).not.toBeInTheDocument();

  // Add box
  addBox(boxList);

  // expect box and Delete button
  expect(boxList.queryByText("Delete Box")).toBeInTheDocument();
  // expect to see a box
  const removeButton = boxList.getByText("Delete Box");
  fireEvent.click(removeButton);

  // Delete button not shown
  expect(boxList.queryByText("Delete Box")).not.toBeInTheDocument();
})


