/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./index";

test("Should not allowed click button", () => {
  const {container} = render(<Button isDisabled></Button>);
  expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
  const {container, getByText} = render(<Button isLoading></Button>);
  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
  const {container} = render(<Router><Button type="link"></Button></Router>);
  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> component", () => {
  const {container} = render(<Router><Button type="link" href=""></Button></Router>);
  expect(container.querySelector("a")).toBeInTheDocument();
}); 