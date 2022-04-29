import SideBar from "../../Components/SideBar";
import React from "react";
import renderer from "react-test-renderer";

test("renders the SideBar correctly", () => {
    const testRenderer = renderer.create(<SideBar />);
    expect(testRenderer).toMatchSnapshot();
});
