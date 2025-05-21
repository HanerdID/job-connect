// src/components/LatestJobs.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import JobCard from "./JobCard";
import GradientHeader from "./GradientHeader";

const LatestJobs = ({ jobs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic
    console.log("Search for:", searchTerm, "in", location);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <GradientHeader
          title="Latest Jobs"
          subtitle="Pekerjaan terbaru yang mungkin sesuai dengan keahlian Anda"
        />

        {/* Search Bar */}
        <div className="bg-cream rounded-xl p-4 md:p-6 mb-10 shadow-sm">
          <form
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row gap-4"
          >
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Posisi atau keyword..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg outline-none ring-2 ring-blue-teal"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Lokasi..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg outline-none ring-2 ring-blue-teal"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-blue-teal text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Quick filter tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            <p className="text-sm text-gray mr-2">Filter cepat:</p>
            <button className="text-sm text-dark-teal bg-white px-3 py-1 rounded-full hover:bg-light-teal transition-colors">
              Remote
            </button>
            <button className="text-sm text-dark-teal bg-white px-3 py-1 rounded-full hover:bg-light-teal transition-colors">
              Full Time
            </button>
            <button className="text-sm text-dark-teal bg-white px-3 py-1 rounded-full hover:bg-light-teal transition-colors">
              IT & Software
            </button>
            <button className="text-sm text-dark-teal bg-white px-3 py-1 rounded-full hover:bg-light-teal transition-colors">
              Entry Level
            </button>
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs?.map((job, index) => (
            <JobCard key={job.id || index} job={job} index={index} />
          ))}
        </div>

        {/* View All Jobs button */}
        <div className="text-center mt-10">
          <Link
            to="/jobs"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-blue-teal border border-blue-teal hover:bg-blue-teal hover:text-white transition-colors font-medium"
          >
            View All Jobs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
