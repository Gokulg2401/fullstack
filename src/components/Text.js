import { useState } from "react";

export default function RealTimeForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const [bgColor, setBgColor] = useState("bg-white");
    const [fontSize, setFontSize] = useState("text-base");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className={`max-w-md mx-auto mt-10 p-6 rounded-2xl shadow ${bgColor === 'blue' ? 'bg-blue-100' : bgColor === 'green' ? 'bg-green-100' : 'bg-white'}`}>

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

            <div className="mt-6 space-x-2">
                <button
                    onClick={() => setBgColor("bg-blue-100")}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                    Blue Background
                </button>
                <button
                    onClick={() => setBgColor("bg-green-100")}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                >
                    Green Background
                </button>
                <button
                    onClick={() => setFontSize("text-sm")}
                    className="px-3 py-1 bg-gray-500 text-white rounded"
                >
                    Small Font
                </button>
                <button
                    onClick={() => setFontSize("text-lg")}
                    className="px-3 py-1 bg-gray-700 text-white rounded"
                >
                    Large Font
                </button>
            </div>

            <div className={`mt-6 bg-gray-50 p-4 rounded ${fontSize}`}>
                <h3 className="text-lg font-semibold mb-2">Live Preview</h3>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
            </div>
        </div>
    );
}
