import { useState } from "react";

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    type: "Full Time",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.category || !formData.location) return;

    // Add new job entry
    setJobs([...jobs, { ...formData, posted: "3 months ago" }]);

    // Clear input fields
    setFormData({ title: "", category: "", location: "", type: "Full Time" });
  };

  return (
    <>
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-4 rounded-lg shadow-md space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg bg-gray-50 text-gray-500 focus:ring-2 focus:ring-gray-400"
        >
          <option value="">Choose a category...</option>
          <option value="IT">IT</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
        </select>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          ADD JOB
        </button>
      </form>

      {/* Job Listings */}
      <div className="mt-6 space-y-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition"
            onClick={() => alert(`Redirecting to ${job.title}`)}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                {job.category[0]}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-gray-500 text-sm">{job.category}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-gray-600">{job.location}</p>
              <p className="text-green-500 font-semibold">{job.type}</p>
              <p className="text-gray-400 text-sm">{job.posted}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Job;
