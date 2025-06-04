import React, { useState, useRef } from 'react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef(null);

  const galleryCards = [
    {
      id: 1,
      title: 'Sports Day',
      image: "/gallery1.png",
      alt: 'Sports Day - Students lined up in sports uniforms'
    },
    {
      id: 2,
      title: 'Arts Day',
      image: "/gallery2.png",
      alt: 'Arts Day - Students doing arts and crafts activities'
    },
    {
      id: 3,
      title: 'Earth Day',
      image: "/gallery3.png",
      alt: 'Earth Day - Students holding environmental awareness signs'
    }
  ];

  const scrollToSlide = (index) => {
    setCurrentSlide(index);
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.offsetWidth;
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const newSlide = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newSlide);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EEF4E9] to-[#D2E6DB] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-black font-normal text-base lg:text-[22px] mb-2">DSP International School</h2>
          <h1 className="text-[32px] lg:text-[42px] font-bold text-[#2E7D32] mb-8">Gallery</h1>
        </div>

        {/* Gallery Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {galleryCards.map((card) => (
            <div key={card.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="overflow-hidden">
                <img 
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-xl font-medium text-black">{card.title}</h3>
                <div className="w-10 h-10 bg-gradient-to-r from-[#699940] to-[#00713C] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src='/galleryArrow.svg' alt="Arrow Icon" className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="max-w-sm mx-auto">
            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onScroll={handleScroll}
            >
              {galleryCards.map((card) => (
                <div key={card.id} className="w-full flex-shrink-0 snap-center">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden mx-2">
                    <div className="overflow-hidden">
                      <img 
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex items-center justify-between">
                      <h3 className="text-xl font-medium text-black">{card.title}</h3>
                      <div className="w-10 h-10 bg-gradient-to-r from-[#699940] to-[#00713C] rounded-full flex items-center justify-center">
                        <img src='/galleryArrow.svg' alt="Arrow Icon" className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {galleryCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? '!bg-[#00713C]' : '!bg-[#6D6D6D]'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -webkit-overflow-scrolling: touch;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Gallery;