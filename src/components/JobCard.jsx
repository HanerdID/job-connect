// src/components/JobCard.jsx
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const JobCard = ({ job, index }) => {
  const cardRef = useRef(null);

  // Add animation effect on mount
  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";

      // Staggered animation based on index
      setTimeout(() => {
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 100 * (index % 4));
    }
  }, [index]);

  // Determine if job is remote or has a special tag
  const isRemote = job.location.toLowerCase().includes("remote");
  const jobType = job.type || "Full-time";

  return (
    <div ref={cardRef} className="card p-6 group">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-dark-teal mb-1 group-hover:text-blue-teal transition-colors">
            {job.position}
          </h3>
          <div className="flex items-center">
            <p className="text-blue-teal font-medium">{job.company}</p>
            <span className="inline-block mx-2 w-1 h-1 rounded-full bg-blue-teal"></span>
            <p className="text-gray">{job.location}</p>
          </div>
        </div>

        {/* Job tags */}
        <div>
          {isRemote && <span className="badge badge-remote">Remote</span>}
          {!isRemote && <span className="badge badge-fulltime">{jobType}</span>}
        </div>
      </div>

      {/* Salary info */}
      <div className="my-3 text-dark-orange font-medium">
        {job.salary || "Rp 8.000.000 - 12.000.000"}
      </div>

      {/* Short description */}
      <p className="text-gray mb-4 line-clamp-2 text-sm">
        {job.description?.substring(0, 120)}...
      </p>

      <div className="mt-4 flex justify-between items-center">
        <Link
          to={`/jobs/${job.id}`}
          className="text-blue-teal hover:underline transition flex items-center"
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
          className="btn btn-primary py-2 px-5 text-sm"
        >
          Apply
        </Link>
      </div>

      {/* Posted date - small badge at bottom */}
      <div className="absolute bottom-3 left-6 text-xs text-gray">
        {job.postedDate || "2 hari lalu"}
      </div>
    </div>
  );
};

export default JobCard;
