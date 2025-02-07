import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddApplicantModal from "@/components/applicantTracker/AddApplicantModal";

describe("AddApplicantModal Component", () => {
    const mockOnClose = jest.fn();

    beforeEach(() => {
        render(<AddApplicantModal onClose={mockOnClose} />);
    });

    it("renders the modal correctly", () => {
        expect(screen.getByTestId("modal-container")).toBeInTheDocument();
        expect(screen.getByTestId("modal-content")).toBeInTheDocument();
        expect(screen.getByTestId("applicant-form")).toBeInTheDocument();
    });

    it("renders input fields correctly", () => {
        expect(screen.getByTestId("name-input")).toBeInTheDocument();
        expect(screen.getByTestId("email-input")).toBeInTheDocument();
        expect(screen.getByTestId("location-input")).toBeInTheDocument();
        expect(screen.getByTestId("position-input")).toBeInTheDocument();
        expect(screen.getByTestId("department-input")).toBeInTheDocument();
        expect(screen.getByTestId("category-input")).toBeInTheDocument();
    });

    it("updates input values on change", () => {
        const nameInput = screen.getByTestId("name-input");
        fireEvent.change(nameInput, { target: { value: "John Doe" } });
        expect(nameInput).toHaveValue("John Doe");
    });

    it("calls onClose when cancel button is clicked", () => {
        fireEvent.click(screen.getByTestId("cancel-button"));
        expect(mockOnClose).toHaveBeenCalled();
    });

    it("submits form and closes modal", () => {
        const submitButton = screen.getByTestId("submit-button");
        fireEvent.click(submitButton);
        expect(mockOnClose).toHaveBeenCalled();
    });
});
