import React from 'react'
const jobs = [
    {
      id: 1,
      title: "Senior Detection Developer",
      location: "Bangalore (Hybrid)",
      type: "IT",
      status: "Full Time",
      link: "/job-details/1",
    },
    {
      id: 2,
      title: "Advertising Sales Manager",
      location: "Chennai",
      type: "Sales",
      status: "Full Time",
      link: "/job-details/2",
    },
    {
      id: 3,
      title: "Server-Side Software Architect",
      location: "Bangalore",
      type: "IT",
      status: "Full Time",
      link: "/job-details/3",
    },
  ];
function JobCards() {
    return (
        <>
         <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Recent Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <a
              key={job.id}
              href={job.link}
              className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {job.title}
              </h3>
              <p className="text-gray-500 mt-1 text-sm">
                {job.location} • {job.type} •{" "}
                <span className="text-green-500">{job.status}</span>
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
        </>
    )
}

export default JobCards
