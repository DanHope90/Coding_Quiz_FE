import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import SideBar from "../../Components/SideBar";

test("renders the SideBar correctly", () => {
  const testRenderer = renderer.create(<BrowserRouter><SideBar /></BrowserRouter>);
  expect(testRenderer).toMatchSnapshot();
});
