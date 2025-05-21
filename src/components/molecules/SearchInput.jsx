// src/components/molecules/SearchInput.jsx
import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = React.useState("");
  const [location, setLocation] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.({ query, location });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#FAF9F6] rounded-xl shadow-card p-6"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Posisi atau keyword..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
        </div>
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Lokasi..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
        </div>
        <Button type="submit" variant="secondary">
          Search
        </Button>
      </div>

      {/* Quick filter tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        <p className="text-sm text-neutral-500 mr-2">Filter cepat:</p>
        {["Remote", "Full Time", "IT & Software", "Entry Level"].map(
          (filter) => (
            <button
              key={filter}
              type="button"
              className="text-sm text-[#3E3A74] bg-[#FAF9F6] px-3 py-1 rounded-full border border-primary/20 hover:bg-[#3E3A74]/5 transition-colors"
            >
              {filter}
            </button>
          )
        )}
      </div>
    </form>
  );
};

export default SearchInput;
