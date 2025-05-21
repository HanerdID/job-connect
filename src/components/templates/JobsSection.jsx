// src/components/templates/JobsSection.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { jobs } from "../../data/jobs";
import Button from "../atoms/Button";
import SearchInput from "../molecules/SearchInput";
import SectionHeader from "../molecules/SectionHeader";
import JobCard from "../organisms/JobCard";

const JobsSection = () => {
  const [searchParams, setSearchParams] = useState({});

  const handleSearch = (params) => {
    setSearchParams(params);
    console.log("Search for:", params);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Latest Jobs"
          subtitle="Pekerjaan terbaru yang mungkin sesuai dengan keahlian Anda"
        />

        <SearchInput onSearch={handleSearch} />

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {jobs.map((job, index) => (
            <JobCard key={job.id || index} job={job} index={index} />
          ))}
        </div>

        {/* View All Jobs button */}
        <div className="text-center mt-10">
          <Button
            as={Link}
            to="/jobs"
            variant="outline"
            className="flex items-center mx-auto hover:cursor-pointer"
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
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobsSection;
