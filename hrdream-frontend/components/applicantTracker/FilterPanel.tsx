import React from "react";

interface FilterPanelProps {
  onClose: () => void;
  onSubmit?:(e:React.FormEvent<HTMLFormElement>) => void
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onClose,onSubmit }) => {


  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center" data-testid = "filter-panel">
      <div className="bg-white rounded-lg shadow-lg w-3/6 p-6 max-sm:w-full max-sm:h-full" data-testid = "filter-panel-content">
        <h2 className="text-lg font-bold mb-4" data-testid = "filter-title">Filter Applicants</h2>
        <form className="space-y-4" data-testid = "filter-form" onSubmit={onSubmit}>
          <div data-testid = "filter-form-inputs">
            <label className="block text-sm font-medium text-gray-700" data-testid = "filter-form-label-location">
              Location
            </label>
            <input
              type="text"
              placeholder="Enter location"
              className="w-full p-2 border rounded"
              data-testid = "filter-form-input-location"
            />
          </div>
          <div data-testid = "filter-form-inputs">
            <label className="block text-sm font-medium text-gray-700" data-testid = "filter-form-label-position">
              Position
            </label>
            <input
              type="text"
              placeholder="Enter position"
              className="w-full p-2 border rounded"
              data-testid = "filter-form-input-position"
            />
          </div>
          <div data-testid = "filter-form-inputs">
            <label className="block text-sm font-medium text-gray-700" data-testid = "filter-form-label-department">
              Department
            </label>
            <input
              type="text"
              placeholder="Enter department"
              className="w-full p-2 border rounded"
              data-testid = "filter-form-input-department"
            />
          </div>
          <div className="flex justify-end space-x-4" data-testid = "filter-form-buttons">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={onClose}
              data-testid = "filter-form-button-cancel"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              data-testid = "filter-form-button-apply"
            >
              Apply Filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterPanel;
