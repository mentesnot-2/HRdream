import React from "react";
import { render, screen } from "@testing-library/react";
import ApplicantCard from "@/components/applicantTracker/ApplicantCard";
import type { ApplicantApi } from "@/types/applicants";
import "@testing-library/jest-dom";

describe("ApplicantCard Component", () => {
    const applicant: ApplicantApi = {
        id: 1,
        full_name: "John Doe",
        email: "johndoe@example.com",
        location: "New York",
        position: "Software Engineer",
        department: "Engineering",
        stage: "applied",
        created_at: "2026-01-01T00:00:00Z",
        updated_at: "2026-01-01T00:00:00Z",
    };

    beforeEach(() => {
        render(<ApplicantCard applicant={applicant} />);
    });

    it("renders the applicant card correctly", () => {
        expect(screen.getByTestId("applicant-card")).toBeInTheDocument();
    });

    it("displays the correct applicant details", () => {
        expect(screen.getByTestId("applicant-name")).toHaveTextContent(
            applicant.full_name
        );
        expect(screen.getByTestId("applicant-email")).toHaveTextContent(
            applicant.email
        );
        expect(screen.getByTestId("applicant-location")).toHaveTextContent(
            applicant.location
        );
        expect(screen.getByTestId("applicant-position")).toHaveTextContent(
            applicant.position
        );
        expect(screen.getByTestId("applicant-department")).toHaveTextContent(
            applicant.department
        );
    });
});
