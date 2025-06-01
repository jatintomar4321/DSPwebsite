import { motion } from "framer-motion";
const Applynow = () => {
  return (
    <section className="relative w-screen h-[60vh] flex items-center justify-center bg-white overflow-hidden">
      {/* Left background image, fixed to left side */}
      <div className="absolute left-0 top-0 bottom-0 w-[400px] max-w-[40vw] pointer-events-none z-0 hidden md:block">
        <img
          src="/leaf.png"
          alt="Background Leaves"
          className="h-full w-full object-contain object-left"
          draggable="false"
        />
      </div>
      <div className="relative z-10 w-full max-w-2xl md:ml-24 text-center flex flex-col items-center">
        <div className="text-3xl md:text-4xl font-bold mb-6 text-black font-sans">
          Admissions Open For 2025 - 2026
        </div>
        <div className="text-lg md:text-xl font-light text-black mb-30 md:mb-10 lg:mb:10 font-sans">
          Click to Begin Your Child’s Journey
        </div>
        <motion.div
            className="cursor-pointer bg-gradient-to-r from-[#699940] to-[#00713C] px-6 py-2 text-sm font-semibold text-white rounded-lg shadow-lg border-none outline-none transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl select-none inline-block
              absolute bottom-6 left-1/2 -translate-x-1/2 w-[90vw] max-w-xs md:static md:translate-x-0 md:w-auto md:max-w-none md:px-20 md:py-2 md:text-base md:rounded-xl"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Apply Now
          </motion.div>
      </div>
    </section>
  );
};

export default Applynow;
