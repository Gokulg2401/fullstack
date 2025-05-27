import { useState } from "react";

export default function RealTimeForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow">
            <h2 className="text-xl font-bold mb-4">User Form</h2>
            <form className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
            </form>

            <div className="mt-6 bg-gray-50 p-4 rounded">
                <h3 className="text-lg font-semibold mb-2">Live Preview</h3>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
            </div>
        </div>
    );
}
