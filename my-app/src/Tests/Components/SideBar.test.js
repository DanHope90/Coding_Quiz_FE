import SideBar from "../../Components/SideBar";
import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";

test("renders the SideBar correctly", () => {
    const testRenderer = renderer.create(<BrowserRouter><SideBar /></BrowserRouter>);
    expect(testRenderer).toMatchSnapshot();
});
