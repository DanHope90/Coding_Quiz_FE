import NavBar from "../../Components/NavBar";
import React from "react";
import renderer from "react-test-renderer";

test("renders the NavBar correctly", () => {
    const testRenderer = renderer.create(<NavBar />);
    expect(testRenderer).toMatchSnapshot();
});
