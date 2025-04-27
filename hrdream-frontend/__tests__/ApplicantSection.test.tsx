import React from "react";
import { render, screen } from "@testing-library/react";
import ApplicantSection from "@/components/applicantTracker/ApplicantSection";

jest.mock("../components/applicantTracker/ApplicantCard", () => ({
  __esModule: true,
  default: ({ name }: { name: string }) => <div data-testid="applicant-card">{name}</div>,
}));

describe("ApplicantSection Component", () => {
  const mockApplicants = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      location: "New York",
      position: "Software Engineer",
      department: "Engineering",
      category: "Full-Time",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      location: "San Francisco",
      position: "Product Manager",
      department: "Product",
      category: "Part-Time",
    },
  ];

  it("renders the title", () => {
    render(<ApplicantSection title="Engineering Team" applicants={mockApplicants} />);

    expect(screen.getByText("Engineering Team")).toBeInTheDocument();
  });

  it("renders the correct number of applicant cards", () => {
    render(<ApplicantSection title="Engineering Team" applicants={mockApplicants} />);

    const applicantCards = screen.getAllByTestId("applicant-card");
    expect(applicantCards).toHaveLength(mockApplicants.length);
  });

  it("renders the correct applicant names", () => {
    render(<ApplicantSection title="Engineering Team" applicants={mockApplicants} />);

    mockApplicants.forEach((applicant) => {
      expect(screen.getByText(applicant.name)).toBeInTheDocument();
    });
  });

  it("renders an empty state if no applicants are provided", () => {
    render(<ApplicantSection title="No Applicants" applicants={[]} />);

    expect(screen.getByText("No Applicants")).toBeInTheDocument();
    expect(screen.queryByTestId("applicant-card")).not.toBeInTheDocument();
  });
});
