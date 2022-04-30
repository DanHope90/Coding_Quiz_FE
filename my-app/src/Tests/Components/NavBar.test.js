import NavBar from "../../Components/NavBar";
import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

test("renders the NavBar correctly", () => {
    const testRenderer = renderer.create(<BrowserRouter><NavBar  /></BrowserRouter>);
    expect(testRenderer).toMatchSnapshot();
});
