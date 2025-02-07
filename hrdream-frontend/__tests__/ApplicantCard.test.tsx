import React from "react";
import { render, screen } from "@testing-library/react";
import ApplicantCard from "@/components/applicantTracker/ApplicantCard";
import "@testing-library/jest-dom";

describe("ApplicantCard Component", () => {
    const applicantData = {
        name: "John Doe",
        email: "johndoe@example.com",
        location: "New York",
        position: "Software Engineer",
        department: "Engineering"
    };

    beforeEach(() => {
        render(<ApplicantCard {...applicantData} />);
    });

    it("renders the applicant card correctly", () => {
        expect(screen.getByTestId("applicant-card")).toBeInTheDocument();
    });

    it("displays the correct applicant details", () => {
        expect(screen.getByTestId("applicant-name")).toHaveTextContent(applicantData.name);
        expect(screen.getByTestId("applicant-email")).toHaveTextContent(applicantData.email);
        expect(screen.getByTestId("applicant-location")).toHaveTextContent(applicantData.location);
        expect(screen.getByTestId("applicant-position")).toHaveTextContent(applicantData.position);
        expect(screen.getByTestId("applicant-department")).toHaveTextContent(applicantData.department);
    });
});
