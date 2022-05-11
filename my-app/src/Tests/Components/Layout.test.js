import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Layout from "../../Components/Layout";
import Context from "../../Utils/Context";

test("renders the layout component correctly", () => {
  const testRenderer = renderer.create(
    <Context.Provider value={jest.fn()}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Context.Provider>,
  );  
  expect(testRenderer).toMatchSnapshot();
});
