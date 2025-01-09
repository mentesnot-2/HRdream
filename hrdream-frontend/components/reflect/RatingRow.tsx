"use client";
import React, { useState } from "react";

interface RatingRow {
  label: string;
  selectedRating: number;
  colors: string[];
}

const initialRatings: RatingRow[] = [
  {
    label: "Quality of work",
    selectedRating: 8,
    colors:["bg-cyan-100"]
  },
  {
    label: "Time management",
    selectedRating: 2,
    colors:["bg-red-200"]
  },
  {
    label: "Absences",
    selectedRating: 4,
    colors:["bg-amber-100"]
  },
  {
    label: "Fatigue and irritability",
    selectedRating: 3,
    colors:["bg-orange-200"]
  },
];

const RatingTable: React.FC = () => {
  const [ratings, setRatings] = useState<RatingRow[]>(initialRatings);
  const [comment, setComment] = useState("");

  const handleRatingChange = (rowIndex: number, rating: number) => {
    const updatedRatings = ratings.map((row, index) =>
      index === rowIndex ? { ...row, selectedRating: rating } : row
    );
    setRatings(updatedRatings);
  };

  return (
    <div className="p-4 rounded-lg max-w-4xl pt-0 pl-8">
      <div className="flex">
        <div className="w-3/4">
          <ul>
            {ratings.map((row, rowIndex) => (
              <li key={row.label} className="flex items-center py-2">
                <span className="w-40 text-sm font-medium text-gray-700">
                  {row.label}
                </span>
                <div className="flex space-x-2 mx-auto">
                  {[...Array(10).keys()].map((num) => {
                    const ratingValue = num + 1;
                    const isHighlighted = ratingValue <= row.selectedRating;
                    const colorClass = isHighlighted
                      ? row.colors[rowIndex % row.colors.length]
                      : "bg-gray-100";

                    return (
                      <span
                        key={ratingValue}
                        className={`flex items-center justify-center w-8 h-8 text-sm font-medium text-gray-900 rounded-md cursor-pointer ${colorClass}`}
                        onClick={() => handleRatingChange(rowIndex, ratingValue)}
                      >
                        {ratingValue}
                      </span>
                    );
                  })}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/4 pl-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Comments:</h3>
          <textarea
            className="w-full h-32 p-2 border rounded text-sm"
            placeholder="No comments"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default RatingTable;
