import Layout from "../../Components/Layout";
import React from "react";
import renderer from "react-test-renderer";

test("renders the layout component correctly", () => {
    const testRenderer = renderer.create(<Layout  />);
    expect(testRenderer).toMatchSnapshot();
});
