"use client";


import React, { useState } from "react";
import ApplicantSection from "@/components/applicantTracker/ApplicantSection";
import filter from "@/public/filter.svg";
import Image from "next/image";
import AddApplicantModal from "@/components/applicantTracker/AddApplicantModal";
import FilterPanel from "@/components/applicantTracker/FilterPanel";

const applicantsData = {
  applied: [
    {
      id: 1,
      name: "Harper Stone",
      email: "harperstone@email.com",
      location: "Copenhagen",
      position: "Head of HR",
      department: "People & Culture",
      category: "Applied",
    },
    {
      id: 2,
      name: "Alojz Novak",
      email: "alojznovak@email.com",
      location: "Prague",
      position: "Engineering - Front end",
      department: "IT",
      category: "Applied",
    },
    {
      id: 3,
      name: "Jay Raver",
      email: "jayraver@email.com",
      location: "Berlin",
      position: "Accountant",
      department: "Finance",
      category: "Applied",
    },
  ],
  interviewed: [
    {
      id: 4,
      name: "Lucy Keyword",
      email: "lucykeyword@email.com",
      location: "Copenhagen",
      position: "SEO Specialist",
      department: "Marketing",
      category: "Interviewed",
    },
  ],
  madeOffer: [
    {
      id: 5,
      name: "Millie Ligma",
      email: "millieligma@email.com",
      location: "Los Angeles",
      position: "Junior Designer",
      department: "Design",
      category: "Made Offer",
    },
    {
      id: 6,
      name: "Mike Star",
      email: "mikestar@email.com",
      location: "Dublin",
      position: "Scrum Master",
      department: "Management",
      category: "Made Offer",
    },
  ],
  hired: [
    {
      id: 7,
      name: "Victor Kowalski",
      email: "kowalskianalysis@email.com",
      location: "Athens",
      position: "Engineering - Back end",
      department: "IT",
      category: "Hired",
    },
  ],
};

const ApplicationTracker: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleFilter = () => {
    setIsFilterPanelVisible((prev) => !prev);
  }
  return (
    <div className=" bg-white flex w-full max-sm:w-full">
      <div className="p-4 bg-gray-50 min-h-screen w-full px-6 max-sm:w-full">
        <header className="mb-3">
          <h1 className="text-2xl font-bold text-gray-900 max-sm:text-lg">Application tracker</h1>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 max-sm:text-xs">
              Here’s your selection process overview.
            </p>
            <div className="flex items-center text-sm text-gray-600 gap-2 cursor-pointer"
              onClick={toggleFilter}>
              <Image src={filter} alt="filter" />
              Filter
            </div>
          </div>
        </header>
        <hr />
        <div className="grid grid-cols-4 gap-4 mt-3 sm:grid-cols-1 lg:grid-cols-4 max-sm:grid-cols-1 md:grid-cols-2">
          <ApplicantSection title="Applied" applicants={applicantsData.applied} />
          <ApplicantSection title="Interviewed" applicants={applicantsData.interviewed} />
          <ApplicantSection title="Made offer" applicants={applicantsData.madeOffer} />
          <ApplicantSection title="Hired" applicants={applicantsData.hired} />
        </div>
        <button
          className="fixed bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 max-sm:bottom-2 max-sm:right-2"
          onClick={openModal}
        >
          + Add applicant
        </button>
        {isModalOpen && <AddApplicantModal onClose={closeModal} />}
        {isFilterPanelVisible && <FilterPanel onClose={toggleFilter} />}
      </div>
    </div>
  );
};

export default ApplicationTracker;
