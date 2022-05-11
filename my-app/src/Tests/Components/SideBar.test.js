import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import SideBar from "../../Components/SideBar";
import Context from "../../Utils/Context";

test("renders the SideBar correctly", () => {
  const testRenderer = renderer.create(
    <Context.Provider value={jest.fn()}>
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    </Context.Provider>,
  );
  expect(testRenderer).toMatchSnapshot();
});
