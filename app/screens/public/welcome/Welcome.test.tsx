import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import renderer from "react-test-renderer";

import "@testing-library/jest-dom";
import Welcome from "./Welcome"; // Replace with your component path

jest.mock("@react-navigation/native", () => ({
  // Mock navigation for testing
  NavigationContainer: ({ children }: any) => children,
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe("Home component", () => {
  it("renders the logo image", () => {
    const { getByTestId } = render(<Welcome />);
    const image = getByTestId("image");
    expect(image).toBeTruthy();
  });

  it("renders the welcome text", () => {
    const { getByText } = render(<Welcome />);
    const welcomeText = getByText("Welcome to HiDelivery");
    expect(welcomeText).toBeTruthy();
  });

  it("renders the description text", () => {
    const { getByText } = render(<Welcome />);
    const descriptionText = getByText(/deliver to you as quickly as possible/i);
    expect(descriptionText).toBeTruthy();
  });

  it('renders the "Get Started" button', () => {
    const { getByText } = render(<Welcome />);
    const getStartedButton = getByText("Get Started");
    expect(getStartedButton).toBeTruthy();
  });

  it('navigates to "Products" screen on "Get Started" button press', () => {
    const navigateMock = jest.fn();
    const { getByText } = render(
      <Welcome navigation={{ navigate: navigateMock }} />
    );

    const getStartedButton = getByText("Get Started");
    fireEvent.press(getStartedButton);

    expect(navigateMock).toHaveBeenCalledWith("Products");
  });

  it('renders the "Driver Dashboard" button', () => {
    const { getByText } = render(<Welcome />);
    const driverDashboardButton = getByText("Driver Dashboard");
    expect(driverDashboardButton).toBeTruthy();
  });

  it('navigates to "Driver Dashboard" screen on button press', () => {
    const navigateMock = jest.fn();
    const { getByText } = render(
      <Welcome navigation={{ navigate: navigateMock }} />
    );

    const driverDashboardButton = getByText("Driver Dashboard");
    fireEvent.press(driverDashboardButton);

    expect(navigateMock).toHaveBeenCalledWith("Driver Dashboard");
  });
});
