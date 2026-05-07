import React from "react";
import type { RatingApi } from "@/types/reflect";

interface RatingRowProps {
  rating: RatingApi;
}

const RatingRow: React.FC<RatingRowProps> = ({ rating }) => {
  const percent = Math.max(
    0,
    Math.min(100, Math.round((rating.score / rating.max_score) * 100))
  );

  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm text-gray-700 mb-1">
        <span>{rating.label}</span>
        <span>
          {rating.score}/{rating.max_score}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default RatingRow;