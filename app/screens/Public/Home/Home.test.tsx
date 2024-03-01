import React from "react";
import { render } from "@testing-library/react-native";

import Home from "./Home";

describe("<Home />", () => {
  it("renders correctly", () => {
    const home = render(<Home />);

    expect(home).toBeTruthy();
  });
});
