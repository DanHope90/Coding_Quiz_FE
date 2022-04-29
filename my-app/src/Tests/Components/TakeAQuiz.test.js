import TakeAQuiz from "../../Components/TakeAQuiz";
import React from "react";
import renderer from "react-test-renderer";

test("renders the TakeAQuiz component correctly", () => {
    const testRenderer = renderer.create(<TakeAQuiz />);
    expect(testRenderer).toMatchSnapshot();
});
