"use client";

import React, { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";
import type { PaginatedResponse, RatingApi, ReportApi } from "@/types/reflect";
import EmployeeWellnessChart from "./EmployeeWellnessChart";
import LatestReport from "./LatestReport";
import RatingRow from "./RatingRow";

export default function ReflectPage() {
  const [ratings, setRatings] = useState<RatingApi[]>([]);
  const [reports, setReports] = useState<ReportApi[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        setError(null);

        const [ratingsRes, reportsRes] = await Promise.all([
          apiGet<PaginatedResponse<RatingApi>>("/api/v1/reflect/ratings/"),
          apiGet<PaginatedResponse<ReportApi>>("/api/v1/reflect/reports/"),
        ]);

        setRatings(ratingsRes.results);
        setReports(reportsRes.results);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load reflect data.");
      } finally {
        setLoading(false);
      }
    };

    void run();
  }, []);

  const latestReport = reports[0];

  return (
    <div className="bg-neutral-100 flex w-full p-6 flex-col gap-6 max-sm:w-full max-sm:h-screen">
      <EmployeeWellnessChart />

      <section className="p-4 bg-white rounded-lg shadow-md w-4/5 max-sm:w-full">
        <h2 className="text-lg font-semibold mb-4">Ratings</h2>
        {loading ? (
          <p className="text-sm text-gray-500">Loading ratings...</p>
        ) : error ? (
          <p className="text-sm text-red-600">{error}</p>
        ) : ratings.length === 0 ? (
          <p className="text-sm text-gray-500">No ratings available.</p>
        ) : (
          ratings.map((rating) => <RatingRow key={rating.id} rating={rating} />)
        )}
      </section>

      <section className="w-4/5 max-sm:w-full">
        <h2 className="text-lg font-semibold mb-3">Latest report</h2>
        {loading ? (
          <p className="text-sm text-gray-500">Loading latest report...</p>
        ) : latestReport ? (
          <LatestReport report={latestReport} />
        ) : (
          <p className="text-sm text-gray-500">No reports available.</p>
        )}
      </section>
    </div>
  );
}