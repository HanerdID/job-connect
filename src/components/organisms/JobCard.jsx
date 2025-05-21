// src/components/organisms/JobCard.jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job, index = 0 }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";

      setTimeout(() => {
        card.style.transition = "all 0.5s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 100 * (index % 4));
    }
  }, [index]);

  // Determine if job is remote
  const isRemote = job.location?.toLowerCase().includes("remote");

  return (
    <div ref={cardRef} className="card p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-[#3E3A74] mb-1 group-hover:opacity-80 transition-colors">
            {job.position}
          </h3>
          <div className="flex items-center flex-wrap">
            <p className="text-[#3E3A74]/80 font-medium">{job.company}</p>
            <span className="inline-block mx-2 w-1 h-1 rounded-full bg-[#3E3A74]/50"></span>
            <p className="text-gray-600">{job.location}</p>
          </div>
        </div>

        {/* Job tags */}
        <div>
          {isRemote && (
            <span className="inline-block rounded-full text-xs font-medium px-3 py-1 bg-[#FFC857] text-[#3E3A74]">
              Remote
            </span>
          )}
          {!isRemote && (
            <span className="inline-block rounded-full text-xs font-medium px-3 py-1 bg-[#FAF9F6] text-[#3E3A74] border border-indigo/20">
              {job.type || "Full-time"}
            </span>
          )}
        </div>
      </div>

      {/* Salary info */}
      <div className="my-3 text-[#FFC857] font-medium">
        {job.salary || "Rp 8.000.000 - 12.000.000"}
      </div>

      {/* Short description */}
      <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
        {job.description?.substring(0, 120)}...
      </p>

      <div className="mt-4 flex justify-between items-center">
        <Link
          to={`/jobs/${job.id}`}
          className="text-[#3E3A74] hover:opacity-80 hover:underline transition flex items-center text-sm"
        >
          Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
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

        <Link
          to={`/jobs/${job.id}/apply`}
          className="btn btn-primary text-sm px-4 py-2"
        >
          Apply
        </Link>
      </div>

      {/* Posted date */}
      <div className="absolute bottom-3 left-6 text-xs text-gray-500">
        {job.postedDate || "2 hari lalu"}
      </div>
    </div>
  );
};

export default JobCard;
