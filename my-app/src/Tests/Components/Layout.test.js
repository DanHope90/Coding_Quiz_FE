import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Layout from "../../Components/Layout";

test("renders the layout component correctly", () => {
  // Wrapping component in BrowserRouter
  const testRenderer = renderer.create(<BrowserRouter><Layout /></BrowserRouter>);
  expect(testRenderer).toMatchSnapshot();
});
