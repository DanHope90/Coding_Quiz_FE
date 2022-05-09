import React from "react";
import renderer from "react-test-renderer";
import Leaderboard from "../../Components/Leaderboard";

test("renders the Leaderboard component correctly", () => {
  const testRenderer = renderer.create(<Leaderboard />);
  expect(testRenderer).toMatchSnapshot();
});
