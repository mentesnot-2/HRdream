"use client";


import React, { useEffect, useMemo, useState } from "react";
import ApplicantSection from "@/components/applicantTracker/ApplicantSection";
// import filter from "@/public/filter.svg";
import Image from "next/image";
import AddApplicantModal from "@/components/applicantTracker/AddApplicantModal";
import FilterPanel from "@/components/applicantTracker/FilterPanel";
import { ApplicantApi, PaginatedResponse } from "@/types/applicants";
import { apiGet } from "@/lib/api";
import type { NewApplicantInput } from "@/types/applicants";

const ApplicationTracker: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
  const [applicants, setApplicants] = useState<ApplicantApi[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState({
    location: "",
    position: "",
    department: "",
  });
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleFilter = () => {
    setIsFilterPanelVisible((prev) => !prev);
  };

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await apiGet<PaginatedResponse<ApplicantApi>>("/api/v1/applicants/");
        setApplicants(res.results);

      } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to load applicants";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    void run();
  }, []);

  const filteredApplicants = useMemo(() => {
    return applicants.filter((a) => {
      const byLocation =
        !filters.location || a.location.toLowerCase().includes(filters.location.toLowerCase());

      const byPosition =
        !filters.position || a.position.toLowerCase().includes(filters.position.toLowerCase());

      const byDepartment =
        !filters.department || a.department.toLowerCase().includes(filters.department.toLowerCase());

      return byLocation && byPosition && byDepartment;
    });
  }, [applicants, filters]);

  const grouped = useMemo(
    () => ({
      applied: filteredApplicants.filter((applicant) => applicant.stage === "applied"),
      interviewed: filteredApplicants.filter((applicant) => applicant.stage === "interviewed"),
      made_offer: filteredApplicants.filter((applicant) => applicant.stage === "made_offer"),
      hired: filteredApplicants.filter((applicant) => applicant.stage === "hired"),
    }),
    [filteredApplicants]
  );

  const handleCreateApplicant = (newApplicant: NewApplicantInput) => {
    const now = new Date().toISOString();
    const optimistic: ApplicantApi = {
      id: Date.now(),
      full_name: newApplicant.full_name,
      email: newApplicant.email,
      location: newApplicant.location,
      position: newApplicant.position,
      department: newApplicant.department,
      stage: newApplicant.stage,
      stage_label: undefined,
      created_at: now,
      updated_at: now,
    };
    setApplicants((prev) => [optimistic, ...prev]);
    closeModal();
  };

  if (loading) {
    return (
      <div className="bg-white flex w-full max-sm:w-full">
        <div className="p-4 bg-gray-50 min-h-screen w-full px-6 max-sm:w-full">
          <h1 className="text-2xl font-bold text-gray-900 max-sm:text-lg">Application tracker</h1>
          <p className="text-sm text-gray-600 mt-2">Loading applicants...</p>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="bg-white flex w-full max-sm:w-full">
        <div className="p-4 bg-gray-50 min-h-screen w-full px-6 max-sm:w-full">
          <h1 className="text-2xl font-bold text-gray-900 max-sm:text-lg">Application tracker</h1>
          <p className="text-sm text-red-600 mt-2">{error}</p>
        </div>
      </div>
    );
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
            <button
              type="button"
              className="flex items-center text-sm text-gray-600 gap-2 cursor-pointer"
              onClick={toggleFilter}
            >
              <Image src="/filter.svg" alt="filter" width={18} height={18} />
              Filter
            </button>
          </div>
        </header>
        <hr />
        <div className="grid grid-cols-4 gap-4 mt-3 sm:grid-cols-1 lg:grid-cols-4 max-sm:grid-cols-1 md:grid-cols-2">
          <ApplicantSection title="Applied" applicants={grouped.applied} />
          <ApplicantSection title="Interviewed" applicants={grouped.interviewed} />
          <ApplicantSection title="Made offer" applicants={grouped.made_offer} />
          <ApplicantSection title="Hired" applicants={grouped.hired} />
        </div>
        <button
          className="fixed bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 max-sm:bottom-2 max-sm:right-2"
          onClick={openModal}
        >
          + Add applicant
        </button>
        {isModalOpen && <AddApplicantModal onClose={closeModal} onCreated={handleCreateApplicant} />}

        {isFilterPanelVisible && (
          <FilterPanel
            onClose={toggleFilter}
            onApply={(next) => {
              setFilters(next);
              setIsFilterPanelVisible(false);
            }}
            onReset={() => {
              setFilters({ location: "", position: "", department: "" });
              setIsFilterPanelVisible(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ApplicationTracker;
