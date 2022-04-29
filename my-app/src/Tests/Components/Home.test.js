import Home from '../../Components/Home';
import React from "react";
import renderer from "react-test-renderer";

test("renders the Home component correctly", () => {
    const testRenderer = renderer.create(<Home />);
    expect(testRenderer).toMatchSnapshot();
});
