import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

/** Smoke Test */
it("renders without crashing", function() {
  render(<Box />);
});

/** Snapshot Test */
it("matches snapshot", function() {
  const {asFragment} = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

