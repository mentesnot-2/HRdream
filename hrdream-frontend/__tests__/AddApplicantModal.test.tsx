import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddApplicantModal from "@/components/applicantTracker/AddApplicantModal";

describe("AddApplicantModal Component", () => {
    const mockOnClose = jest.fn();
    const mockOnCreated = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        render(
            <AddApplicantModal onClose={mockOnClose} onCreated={mockOnCreated} />
        );
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
        expect(screen.getByTestId("stage-select")).toBeInTheDocument();
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

    it("submits form and calls onCreated with form data", () => {
        fireEvent.change(screen.getByTestId("name-input"), {
            target: { value: "Jane Doe" },
        });
        fireEvent.change(screen.getByTestId("email-input"), {
            target: { value: "jane@example.com" },
        });
        fireEvent.change(screen.getByTestId("location-input"), {
            target: { value: "Boston" },
        });
        fireEvent.change(screen.getByTestId("position-input"), {
            target: { value: "Engineer" },
        });
        fireEvent.change(screen.getByTestId("department-input"), {
            target: { value: "Product" },
        });
        fireEvent.change(screen.getByTestId("stage-select"), {
            target: { value: "interviewed" },
        });

        fireEvent.click(screen.getByTestId("submit-button"));

        expect(mockOnCreated).toHaveBeenCalledTimes(1);
        expect(mockOnCreated).toHaveBeenCalledWith({
            full_name: "Jane Doe",
            email: "jane@example.com",
            location: "Boston",
            position: "Engineer",
            department: "Product",
            stage: "interviewed",
        });
        expect(mockOnClose).not.toHaveBeenCalled();
    });
});
