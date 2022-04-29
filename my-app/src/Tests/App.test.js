import App from '../Components/App';
import React from "react";
import renderer from "react-test-renderer";

test("renders the app correctly", () => {
    const testRenderer = renderer.create(<App />);
    expect(testRenderer).toMatchSnapshot();
});
