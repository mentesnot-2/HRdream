import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import VerifyEmailForm from "@/components/auth/VerifyEmail"; 

describe("VerifyEmailForm Component", () => {
    it("should render the form container", () => {
        render(<VerifyEmailForm />);
        expect(screen.getByTestId("verify-email-form")).toBeInTheDocument();
    });

    it("should display login prompt and link", () => {
        render(<VerifyEmailForm />);
        expect(screen.getByTestId("already-member")).toHaveTextContent("Already a member?");
        expect(screen.getByTestId("login-link")).toHaveTextContent("Log in");
    });

    it("should display the form title and description", () => {
        render(<VerifyEmailForm />);
        expect(screen.getByTestId("form-title")).toHaveTextContent("Verify your email");
        expect(screen.getByTestId("form-description")).toHaveTextContent("We have sent a verification code to your email inbox.");
    });

    it("should render 4 input fields for verification code", () => {
        render(<VerifyEmailForm />);
        for (let i = 0; i < 4; i++) {
            expect(screen.getByTestId(`verification-input-${i}`)).toBeInTheDocument();
        }
    });

    it("should display the verify button", () => {
        render(<VerifyEmailForm />);
        expect(screen.getByTestId("verify-button")).toBeInTheDocument();
        expect(screen.getByTestId("verify-button")).toHaveTextContent("Verify");
    });

    it("should display the reCAPTCHA text", () => {
        render(<VerifyEmailForm />);
        expect(screen.getByTestId("recaptcha-text")).toHaveTextContent("This site is protected by reCAPTCHA and the Google Privacy Policy.");
    });
});
