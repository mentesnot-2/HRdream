import React from "react";
import type { NewApplicantInput } from "@/types/applicants";

interface AddApplicantModalProps {
    onClose: () => void;
    onCreated: (newApplicant: NewApplicantInput) => void;
}

const AddApplicantModal: React.FC<AddApplicantModalProps> = ({ onClose, onCreated }) => {
    const [formData, setFormData] = React.useState<NewApplicantInput>({
        full_name: "",
        email: "",
        location: "",
        position: "",
        department: "",
        stage: "applied",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.currentTarget;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreated(formData);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" data-testid="modal-container">
            <div className="bg-white rounded-lg shadow-lg p-6 w-3/6 max-sm:w-full max-sm:h-full" data-testid="modal-content">
                <h2 className="text-lg font-bold mb-4">Add Applicant</h2>
                <form onSubmit={handleSubmit} className="space-y-4" data-testid="applicant-form">
                    <input
                        type="text"
                        name="full_name"
                        placeholder="Full Name"
                        value={formData.full_name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        data-testid="name-input"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        data-testid="email-input"
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        data-testid="location-input"
                    />
                    <input
                        type="text"
                        name="position"
                        placeholder="Position"
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        data-testid="position-input"
                    />
                    <input
                        type="text"
                        name="department"
                        placeholder="Department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        data-testid="department-input"
                    />
                    <select
                        name="stage"
                        value={formData.stage}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        data-testid="stage-select"
                    >
                        <option value="applied">Applied</option>
                        <option value="interviewed">Interviewed</option>
                        <option value="made_offer">Made offer</option>
                        <option value="hired">Hired</option>
                    </select>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            data-testid="cancel-button"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            data-testid="submit-button"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddApplicantModal;
