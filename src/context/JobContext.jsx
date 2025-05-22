// src/context/JobContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const JobContext = createContext();

export const useJob = () => useContext(JobContext);

const LOCAL_KEYS = {
  saved: "savedJobs",
  applied: "appliedJobs",
};

export const JobProvider = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(LOCAL_KEYS.saved)) || [];
    const applied = JSON.parse(localStorage.getItem(LOCAL_KEYS.applied)) || [];
    setSavedJobs(saved);
    setAppliedJobs(applied);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_KEYS.saved, JSON.stringify(savedJobs));
    localStorage.setItem(LOCAL_KEYS.applied, JSON.stringify(appliedJobs));
  }, [savedJobs, appliedJobs]);

  const saveJob = (job) => {
    if (!savedJobs.find((j) => j.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  const applyJob = (job) => {
    if (!appliedJobs.find((j) => j.id === job.id)) {
      setAppliedJobs([...appliedJobs, { ...job, status: "Diproses" }]);
    }
  };

  const removeSaved = (id) => {
    setSavedJobs(savedJobs.filter((j) => j.id !== id));
  };

  return (
    <JobContext.Provider
      value={{ savedJobs, appliedJobs, saveJob, applyJob, removeSaved }}
    >
      {children}
    </JobContext.Provider>
  );
};
