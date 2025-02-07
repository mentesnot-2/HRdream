import React from 'react';

interface AddApplicantModalProps {
    onClose: () => void;
}

const AddApplicantModal: React.FC<AddApplicantModalProps> = ({ onClose }) => {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        location: "",
        position: "",
        department: "",
        category: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" data-testid="modal-container">
            <div className="bg-white rounded-lg shadow-lg p-6 w-3/6 max-sm:w-full max-sm:h-full" data-testid="modal-content">
                <h2 className="text-lg font-bold mb-4">Add Applicant</h2>
                <form onSubmit={handleSubmit} className="space-y-4" data-testid="applicant-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
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
                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                        data-testid="category-input"
                    />
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
