import SavedQuizzes from "../../Components/SavedQuizzes";
import React from "react";
import renderer from "react-test-renderer";

test("renders the SavedQuizzes component correctly", () => {
    const testRenderer = renderer.create(<SavedQuizzes />);
    expect(testRenderer).toMatchSnapshot();
});
