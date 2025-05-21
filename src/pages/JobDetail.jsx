// src/pages/JobDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { jobs } from "../data/jobs";

const JobDetail = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Animation on page load
    setTimeout(() => setLoaded(true), 100);
  }, []);

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="card p-8 max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-dark-teal">
            Lowongan tidak ditemukan
          </h2>
          <p className="text-gray mb-6">
            Maaf, lowongan yang Anda cari tidak tersedia atau telah dihapus.
          </p>
          <Link
            to="/"
            className="inline-flex items-center text-teal hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Kembali ke daftar lowongan
          </Link>
        </div>
      </div>
    );
  }

  // Determine if job is remote
  const isRemote = job.location.toLowerCase().includes("remote");

  return (
    <div className="container mx-auto px-4 py-12">
      <div
        className="transition-all duration-500"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(10px)",
        }}
      >
        {/* Job header */}
        <div className="card p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-dark-teal">
                {job.position}
              </h1>
              <div className="mb-4">
                <span className="text-xl font-medium text-teal">
                  {job.company}
                </span>
                <div className="text-gray mt-1 flex items-center flex-wrap gap-2">
                  <span>{job.location}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray"></span>
                  <span>{job.type}</span>
                </div>
                <div className="text-orange font-medium mt-2">{job.salary}</div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {isRemote && <span className="badge badge-remote">Remote</span>}
                <span className="badge badge-fulltime">{job.type}</span>
                <span
                  className="badge"
                  style={{
                    backgroundColor: "var(--color-light-teal)",
                    color: "var(--color-dark-teal)",
                  }}
                >
                  Posted: {job.postedDate}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="btn btn-secondary px-8 py-3 rounded-full font-medium">
                Apply Now
              </button>
              <button className="btn btn-outline px-8 py-3 rounded-full font-medium">
                Save Job
              </button>
            </div>
          </div>
        </div>

        {/* Job content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="card p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-dark-teal">
                Deskripsi Pekerjaan
              </h2>
              <p className="text-gray">{job.description}</p>
            </div>

            {/* Requirements */}
            <div className="card p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-dark-teal">
                Persyaratan
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-teal mt-0.5 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-bold mb-4 text-dark-teal">
                Tentang Perusahaan
              </h3>
              <p className="text-gray mb-4">
                {job.company} adalah perusahaan terkemuka di bidangnya dengan
                budaya kerja yang dinamis dan inklusif.
              </p>
              <a href="#" className="text-teal hover:underline">
                Kunjungi website
              </a>
            </div>

            <div
              className="p-6 rounded-2xl shadow-md"
              style={{ backgroundColor: "var(--color-light-teal)" }}
            >
              <h3 className="text-lg font-bold mb-4 text-dark-teal">
                Bagikan Lowongan
              </h3>
              <div className="flex space-x-3">
                <button
                  className="p-2 rounded-full hover:opacity-70 transition"
                  style={{
                    backgroundColor: "var(--color-cream)",
                    color: "var(--color-dark-teal)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </button>
                <button
                  className="p-2 rounded-full hover:opacity-70 transition"
                  style={{
                    backgroundColor: "var(--color-cream)",
                    color: "var(--color-dark-teal)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </button>
                <button
                  className="p-2 rounded-full hover:opacity-70 transition"
                  style={{
                    backgroundColor: "var(--color-cream)",
                    color: "var(--color-dark-teal)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-bold mb-4 text-dark-teal">
                Lowongan Serupa
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/jobs/2"
                    className="block hover:bg-light-teal hover:bg-opacity-30 p-3 rounded-lg transition"
                  >
                    <h4 className="font-medium text-dark-teal">
                      UI/UX Designer
                    </h4>
                    <p className="text-teal text-sm">Creative Agency</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs/3"
                    className="block hover:bg-light-teal hover:bg-opacity-30 p-3 rounded-lg transition"
                  >
                    <h4 className="font-medium text-dark-teal">
                      Product Designer
                    </h4>
                    <p className="text-teal text-sm">Tech Company</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jobs/4"
                    className="block hover:bg-light-teal hover:bg-opacity-30 p-3 rounded-lg transition"
                  >
                    <h4 className="font-medium text-dark-teal">
                      Graphic Designer
                    </h4>
                    <p className="text-teal text-sm">Marketing Firm</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;