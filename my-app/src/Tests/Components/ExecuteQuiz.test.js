import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import ExecuteQuiz from "../../Components/ExecuteQuiz";
import Context from "../../Utils/Context";

test("renders the ExecuteQuiz component correctly", () => {
  const testObject = { questions: [] };

  const testRenderer = renderer.create(
    <Context.Provider value={jest.fn()}>
      <BrowserRouter>
        <ExecuteQuiz desiredQuiz={testObject} />
      </BrowserRouter>
    </Context.Provider>,
  );
  expect(testRenderer).toMatchSnapshot();
});
