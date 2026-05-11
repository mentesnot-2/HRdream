import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterPanel from "@/components/applicantTracker/FilterPanel";

describe("FilterPanel Component", () => {
    const mockOnClose = jest.fn();
    const mockOnApply = jest.fn();
    const mockOnReset = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    beforeAll(() => {
        HTMLFormElement.prototype.requestSubmit = jest.fn();
    });

    function renderPanel() {
        return render(
            <FilterPanel
                onClose={mockOnClose}
                onApply={mockOnApply}
                onReset={mockOnReset}
            />
        );
    }

    it("render filter pane correctly", () => {
        renderPanel();

        expect(screen.getByTestId("filter-panel")).toBeInTheDocument();
        expect(screen.getByTestId("filter-title")).toHaveTextContent(
            "Filter Applicants"
        );
        expect(screen.getByTestId("filter-form-input-location")).toBeInTheDocument();
        expect(screen.getByTestId("filter-form-input-position")).toBeInTheDocument();
        expect(
            screen.getByTestId("filter-form-input-department")
        ).toBeInTheDocument();
        expect(screen.getByTestId("filter-form-button-cancel")).toBeInTheDocument();
        expect(screen.getByTestId("filter-form-button-apply")).toBeInTheDocument();
    });

    it("calls onClose when cancel button is clicked", () => {
        renderPanel();

        const cancelButton = screen.getByTestId("filter-form-button-cancel");
        fireEvent.click(cancelButton);

        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it("allows users to input values", () => {
        renderPanel();

        const locationInput = screen.getByTestId("filter-form-input-location");
        const positionInput = screen.getByTestId("filter-form-input-position");
        const departmentInput = screen.getByTestId(
            "filter-form-input-department"
        );

        fireEvent.change(locationInput, { target: { value: "New York" } });
        fireEvent.change(positionInput, { target: { value: "Software Engineer" } });
        fireEvent.change(departmentInput, { target: { value: "Engineering" } });

        expect(locationInput).toHaveValue("New York");
        expect(positionInput).toHaveValue("Software Engineer");
        expect(departmentInput).toHaveValue("Engineering");
    });

    it("submits the form and calls onApply with filter values", () => {
        renderPanel();

        fireEvent.change(screen.getByTestId("filter-form-input-location"), {
            target: { value: "Austin" },
        });
        fireEvent.change(screen.getByTestId("filter-form-input-position"), {
            target: { value: "Designer" },
        });
        fireEvent.change(screen.getByTestId("filter-form-input-department"), {
            target: { value: "Design" },
        });

        const form = screen.getByTestId("filter-form");
        fireEvent.submit(form);

        expect(mockOnApply).toHaveBeenCalledTimes(1);
        expect(mockOnApply).toHaveBeenCalledWith({
            location: "Austin",
            position: "Designer",
            department: "Design",
        });
    });
});
