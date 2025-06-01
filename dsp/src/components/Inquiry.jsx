import { useState } from 'react';

const standards = [
  'Nursery', 'LKG', 'UKG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'
];
const states = [
  'Maharashtra', 'Gujarat', 'Madhya Pradesh', 'Rajasthan', 'Other'
];
const cities = [
  'Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Other'
];

export default function Inquiry() {
  const [form, setForm] = useState({
    studentName: '',
    parentName: '',
    standard: '',
    state: '',
    city: '',
    email: '',
    mobile: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic here
    alert('Enquiry submitted!');
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center relative overflow-hidden px-2 sm:px-4 md:px-8">
      <div className="hidden md:block absolute right-0 top-0 h-full z-0 pointer-events-none select-none">
        <img src="/leaf.png" alt="leaves" className="h-full opacity-50" />
      </div>
      <form onSubmit={handleSubmit} className="w-full bg-[#fafafa] max-w-[700px] sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-2xl px-2 sm:px-4 md:px-8 py-8 sm:py-10 z-10 relative mx-auto flex flex-col items-center  rounded-2xl ">
        <div className="text-center mb-4">
          <div className="text-[22px] sm:text-[28px] font-medium text-gray-900 mb-1">Get in Touch With Us</div>
          <div className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-green-700 mb-3">Enquiry Form</div>
          <div className="text-[16px] sm:text-[20px] md:text-[24px] text-gray-900 mb-2 font-normal">
            We’re here to answer your questions and<br />help you explore DSP International School.
          </div>
        </div>
        <input
          type="text"
          name="studentName"
          value={form.studentName}
          onChange={handleChange}
          placeholder="Student’s Full Name"
          className="w-full h-12 my-2 px-4 sm:px-5 rounded-xl bg-[gray-100] text-base sm:text-lg text-gray-900 font-normal border-none outline-none shadow-sm placeholder-gray-400"
          required
        />
        <input
          type="text"
          name="parentName"
          value={form.parentName}
          onChange={handleChange}
          placeholder="Parent’s / Guardian Name"
          className="w-full h-12 my-2 px-4 sm:px-5 rounded-xl bg-gray-100 text-base sm:text-lg text-gray-900 font-normal border-none outline-none shadow-sm placeholder-gray-400"
          required
        />
        <select
          name="standard"
          value={form.standard}
          onChange={handleChange}
          className="w-full h-12 my-2 px-4 sm:px-5 rounded-xl bg-gray-100 text-base sm:text-lg text-gray-900 font-normal border-none outline-none shadow-sm appearance-none"
          required
        >
          <option value="" disabled>Standard</option>
          {standards.map(std => <option key={std} value={std}>{std}</option>)}
        </select>
        <select
          name="state"
          value={form.state}
          onChange={handleChange}
          className="w-full h-12 my-2 px-4 sm:px-5 rounded-xl bg-gray-100 text-base sm:text-lg text-gray-900 font-normal border-none outline-none shadow-sm appearance-none"
          required
        >
          <option value="" disabled>State</option>
          {states.map(st => <option key={st} value={st}>{st}</option>)}
        </select>
        <select
          name="city"
          value={form.city}
          onChange={handleChange}
          className="w-full h-12 my-2 px-4 sm:px-5 rounded-xl bg-gray-100 text-base sm:text-lg text-gray-900 font-normal border-none outline-none shadow-sm appearance-none"
          required
        >
          <option value="" disabled>City</option>
          {cities.map(city => <option key={city} value={city}>{city}</option>)}
        </select>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full h-12 my-2 px-4 sm:px-5 rounded-xl bg-gray-100 text-base sm:text-lg text-gray-900 font-normal border-none outline-none shadow-sm placeholder-gray-400"
          required
        />
        <input
          type="tel"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          className="w-full h-12 my-2 px-4 sm:px-5 rounded-xl bg-gray-100 text-base sm:text-lg text-gray-900 font-normal border-none outline-none shadow-sm placeholder-gray-400"
          pattern="[0-9]{10}"
          required
        />
        <button
          type="submit"
          className="w-full mt-6 bg-gradient-to-r from-green-500 to-green-800 text-white font-semibold text-xl sm:text-2xl rounded-xl py-3 sm:py-4 cursor-pointer shadow-md hover:from-green-600 hover:to-green-900 transition-all duration-200"
        >
          Send Enquiry
        </button>
      </form>
    </div>
  );
}
