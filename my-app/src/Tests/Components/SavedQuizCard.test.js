import React from "react";
import renderer from "react-test-renderer";
import SavedQuizCard from "../../Components/SavedQuizCard";

test("renders the SavedQuizCard component correctly", () => {
  const testRenderer = renderer.create(<SavedQuizCard />);
  expect(testRenderer).toMatchSnapshot();
});
