const ShortAbout = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-8">
        <div className="font-semibold text-3xl md:text-4xl max-w-xl leading-tight mx-auto bg-gradient-to-r from-[#699940] to-[#00713C] bg-clip-text text-transparent">
          Fostering The Distinct Potential of Every Student
        </div>
        <p className="text-gray-800 text-sm md:text-lg mt-4">
          Beyond Academics, Inspiring Excellence
        </p>
      </div>
      <div className="flex flex-col md:flex-row max-w-5xl mx-2 lg:mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-green-200">
        <div className="md:w-1/2 w-full min-w-0">
          <img
            src="/1.png"
            alt="Champion School Students"
            className="w-full h-full object-cover block"
          />
        </div>
        <div className="md:w-7/12 w-full p-8 flex flex-col justify-center">
          <h2 className="bg-gradient-to-r from-[#699940] to-[#00713C] bg-clip-text text-transparent font-semibold text-2xl md:text-[1.7rem] mb-4">
            Learning Begins With Us
          </h2>
          <p className="text-gray-700 text-md font-light md:text-md leading-6 mb-4">
            We, at Champion School offer supportive and inspirational environments
            for young enquiring minds to learn and grow with us. Our passion for
            learning means we achieve more than outstanding results. We strive to
            build confident and creative thinkers and aim at delivering an
            education that is truly relevant to their future.
          </p>
          <p className="text-gray-700 text-md font-light md:text-md leading-6 mb-7">
            We are an early learning academy focused on social-emotional
            development and early literacy and numeracy. Our students walk out
            with the character and confidence to make their mark in the world,
            equipped with the knowledge and real-world skills that take them way
            ahead in the industry they may serve.
          </p>
          <div
            href="#"
            className="bg-gradient-to-r from-[#699940] to-[#00713C] bg-clip-text text-transparent font-normal text-md inline-flex items-center hover:underline"
          >
            Read More{" "}
            <span className="ml-2 text-xl " aria-hidden="true">
              →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortAbout;
