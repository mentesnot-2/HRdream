import React from "react";

interface FilterPanelProps {
  departments: string[];
  onFilter: (selectedDepartment: string) => void;
  onReset: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ departments, onFilter, onReset }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
        <h2 className="text-lg font-bold mb-4">Filter by Department</h2>
        <div className="space-y-2">
          {departments.map((department) => (
            <button
              key={department}
              onClick={() => onFilter(department)}
              className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded"
            >
              {department}
            </button>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onReset}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
