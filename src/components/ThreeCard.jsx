
const ThreeCard = ({ features = [], backgroundColor = "bg-white", heading = "Features" }) => {
  const defaultFeatures = [
    {
      image: "/2.png",
      title: "Experienced Teachers",
      description: "We pride ourselves on having highly qualified and experienced faculty members dedicated to nurturing the potential of every student."
    },
    {
      image: "/3.png",
      title: "Sports Activities",
      description: "Our comprehensive sports program helps students develop physical fitness, teamwork skills, and a healthy competitive spirit."
    },
    {
      image: "/25.png",
      title: "Modern Facilities",
      description: "State-of-the-art infrastructure and modern facilities ensure that students have access to the best learning resources and environment."
    }
  ];

  const displayFeatures = features.length > 0 ? features : defaultFeatures;

  return (
    <section className={`py-16 px-4 sm:px-8 ${backgroundColor}`}>
      <h1 className="text-5xl font-bold text-[#2E7D32] text-center mb-16">{heading}</h1>
      <div className="max-w-7xl mx-auto flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory no-scrollbar justify-center items-center">
        {displayFeatures.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl border border-green-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg flex-shrink-0 w-[380px] h-[500px] snap-center flex flex-col" style={{ boxShadow: '0 1px 8px 0 rgba(60, 120, 60, 0.04)' }}>
            <div className="h-[240px] flex-shrink-0">
              <img 
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreeCard;