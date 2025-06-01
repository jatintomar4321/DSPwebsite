import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-x-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/bg.png)",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-top px-6 md:px-12 py-7 lg:px-32">
        <div className="max-w-5xl">
          {/* Main Heading */}
          <div className="mb-2 text-[1.7rem] font-semibold leading-9 lg:leading-tight text-white md:text-3xl lg:text-4xl">
            Where Learning
            <br />
            <span className="text-white">Begins with Wonder & Grows with Purpose.</span>
          </div>

          {/* Subtitle */}
          <p className="mb-8 text-sm text-white/90 md:text-lg">Nursery to Grade XII | CBSE Affiliation No. 1131093</p>

          {/* Admissions Button */}
          <motion.div
            className="cursor-pointer bg-gradient-to-r from-[#699940] to-[#00713C] px-4 py-2 text-sm font-semibold text-white rounded-lg shadow-lg border-none outline-none transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl select-none inline-block
              absolute bottom-6 left-1/2 -translate-x-1/2 w-[90vw] max-w-xs md:static md:translate-x-0 md:w-auto md:max-w-none md:px-6 md:py-3 md:text-base md:rounded-xl"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Admissions Open For 2025 - 2026
          </motion.div>
        </div>
      </div>


    </div>
  )
}

export default Hero
