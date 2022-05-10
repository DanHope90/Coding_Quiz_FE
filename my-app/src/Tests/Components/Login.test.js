import React from "react";
import renderer from "react-test-renderer";
import Login from "../../Components/Login";
import Context from "../../Utils/Context";

test("renders the Login component correctly", () => {
  const testRenderer = renderer.create(
    <Context.Provider value={jest.fn()}>
      <Login />
    </Context.Provider>,
  );
  expect(testRenderer).toMatchSnapshot();
});
