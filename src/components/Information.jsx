const cards = [
  {
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="40" height="40" rx="8" stroke="#4B9B7A" strokeWidth="3" fill="none" />
        <circle cx="40" cy="36" r="8" stroke="#4B9B7A" strokeWidth="3" fill="none" />
        <rect x="32" y="48" width="16" height="8" rx="2" stroke="#4B9B7A" strokeWidth="3" fill="none" />
      </svg>
    ),
    title: "Admission Process",
  },
  {
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="28" width="40" height="24" rx="4" stroke="#4B9B7A" strokeWidth="3" fill="none" />
        <text x="40" y="48" textAnchor="middle" fontSize="24" fill="#4B9B7A">₹</text>
      </svg>
    ),
    title: "Fee Structure",
  },
  {
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="16" stroke="#4B9B7A" strokeWidth="3" fill="none" />
        <circle cx="40" cy="40" r="6" stroke="#4B9B7A" strokeWidth="3" fill="none" />
        <path d="M40 56V46" stroke="#4B9B7A" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    title: "Location",
  },
  {
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="24" width="32" height="40" rx="4" stroke="#4B9B7A" strokeWidth="3" fill="none" />
        <rect x="32" y="32" width="16" height="4" rx="2" fill="#4B9B7A" />
        <rect x="32" y="40" width="16" height="4" rx="2" fill="#4B9B7A" />
        <rect x="32" y="48" width="16" height="4" rx="2" fill="#4B9B7A" />
      </svg>
    ),
    title: "Enquiry Form",
  },
];

const Information = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#EEF4E9] to-[#D2E6DB] py-16">
      <div className="text-center mb-3 text-[16px] text-black xs:text-[16px] sm:text-[18px] font-md">Get in Touch With Us</div>
      <div className="text-center mb-10 text-[28px] xs:text-[26px] sm:text-[30px] md:text-[36px] font-semibold text-[#338A4B]">Informations</div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 w-full sm:w-[80vw] justify-center items-center max-w-[800px] mx-auto px-4">
        <div className="flex flex-row gap-4 justify-center">
          <div className="bg-white rounded-xl shadow-sm border border-[#b7e0c7] flex flex-col items-center justify-center aspect-square w-[140px] sm:w-[140px] md:w-[140px] lg:w-[160px] transition-shadow hover:shadow-lg">
            <div className="mb-1 lg:mb-2">{cards[0].icon}</div>
            <div className="text-[9px] md:text-[11px] lg:text-[13px] font-medium text-[#222] text-center mt-1">{cards[0].title}</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-[#b7e0c7] flex flex-col items-center justify-center aspect-square w-[140px] sm:w-[140px] md:w-[140px] lg:w-[160px] transition-shadow hover:shadow-lg">
            <div className="mb-1 lg:mb-2">{cards[1].icon}</div>
            <div className="text-[9px] md:text-[11px] lg:text-[13px] font-medium text-[#222] text-center mt-1">{cards[1].title}</div>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center">
          <div className="bg-white rounded-xl shadow-sm border border-[#b7e0c7] flex flex-col items-center justify-center aspect-square w-[140px] sm:w-[140px] md:w-[140px] lg:w-[160px] transition-shadow hover:shadow-lg">
            <div className="mb-1 lg:mb-2">{cards[2].icon}</div>
            <div className="text-[9px] md:text-[11px] lg:text-[13px] font-medium text-[#222] text-center mt-1">{cards[2].title}</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-[#b7e0c7] flex flex-col items-center justify-center aspect-square w-[140px] sm:w-[140px] md:w-[140px] lg:w-[160px] transition-shadow hover:shadow-lg">
            <div className="mb-1 lg:mb-2">{cards[3].icon}</div>
            <div className="text-[9px] md:text-[11px] lg:text-[13px] font-medium text-[#222] text-center mt-1">{cards[3].title}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
