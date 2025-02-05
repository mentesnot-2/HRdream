import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";
import AuthForm from "../components/auth/AuthForm";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("AuthForm", () => {
  it("should render sign-in form", () => {
    render(<AuthForm type="sign-in" />);
    expect(screen.getByTestId("auth-heading")).toHaveTextContent("Sign in");
    expect(screen.getByTestId("auth-subtext")).toHaveTextContent("Sign in using your account with");
  });

  it("should render sign-up form", () => {
    render(<AuthForm type="sign-up" />);
    expect(screen.getByTestId("auth-heading")).toHaveTextContent("Sign up");
    expect(screen.getByTestId("auth-subtext")).toHaveTextContent("Sign up with an already existing account");
  });

  it("should navigate to /profile when sign-in button is clicked", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });

    render(<AuthForm type="sign-in" />);
    fireEvent.click(screen.getByTestId("auth-button"));

    expect(push).toHaveBeenCalledWith("/profile");
  });
});
