import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Home from '../../Components/Home';
import Context from "../../Utils/Context";

test("renders the Home component correctly", () => {
  const testRenderer = renderer.create(
    <Context.Provider value={jest.fn()}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Context.Provider>,
  );
  expect(testRenderer).toMatchSnapshot();
});
