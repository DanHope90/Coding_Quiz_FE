import React from "react";
import renderer from "react-test-renderer";
import TakeAQuizCard from "../../Components/TakeAQuizCard";

test("renders the TakeAQuizCard component correctly", () => {
  const testRenderer = renderer.create(<TakeAQuizCard />);
  expect(testRenderer).toMatchSnapshot();
});
