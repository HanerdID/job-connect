// src/components/molecules/SectionHeader.jsx

const SectionHeader = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`mb-8 text-center ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-indigo relative inline-block">
        {title}
        <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#FFC857] rounded-full"></span>
      </h2>
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
