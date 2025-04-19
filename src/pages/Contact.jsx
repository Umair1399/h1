import { useState } from "react";
import Impact from "../D & I Impact_Component/Impact";
import Cimpact from "../addonpage/Cimpact";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        reason: "Others",
        linkedin: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "This field is required. Please input your name.";
        if (!formData.email) newErrors.email = "This field is required.";
        if (!formData.phone) newErrors.phone = "This field is required.";
        if (!formData.message) newErrors.message = "This field is required.";
        if (!formData.consent) newErrors.consent = "You must provide consent.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Form Submitted!");
        }
    };

    return (
        <>
      <Cimpact></Cimpact>
            <div className="max-w-4xl mx-auto px-6 py-10">
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Left Section */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700">MESSAGE US</h2>
                        <p className="text-gray-500 mt-2">
                            Ready to embark on a results-focused partnership with the world's leading talent solutions provider?
                            Count on us to prioritize your business and career needs above all else.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-3 mt-5">
                            <a href="#" className="bg-blue-600 text-white p-3 rounded-lg">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="bg-blue-500 text-white p-3 rounded-lg">
                                <i className="fab fa-x-twitter"></i>
                            </a>
                            <a href="#" className="bg-blue-700 text-white p-3 rounded-lg">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="bg-pink-500 text-white p-3 rounded-lg">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Form */}
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
                        <div>
                            <label className="text-sm font-semibold">Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-red-400"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Reason to connect *</label>
                            <select
                                name="reason"
                                value={formData.reason}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg mt-1"
                            >
                                <option>Others</option>
                                <option>Business Inquiry</option>
                                <option>Job Opportunity</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm font-semibold">LinkedIn URL *</label>
                            <input
                                type="url"
                                name="linkedin"
                                value={formData.linkedin}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg mt-1"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Email Address *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg mt-1"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="text-sm font-semibold flex items-center">
                                🇮🇳 Phone Number *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg mt-1"
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Message *</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg mt-1"
                                rows="4"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>

                        <div className="flex items-start space-x-2">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                className="mt-1"
                            />
                            <label className="text-sm">
                                By providing your contact details, you consent to receive communications regarding events, promotions, and relevant information.
                                We respect your privacy and will not share your information with third parties.
                            </label>
                        </div>
                        {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

                        {/* reCAPTCHA Placeholder */}
                        <div className="bg-gray-200 p-4 rounded-lg text-center text-gray-500">
                            <input type="checkbox" /> I'm not a robot (reCAPTCHA placeholder)
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
