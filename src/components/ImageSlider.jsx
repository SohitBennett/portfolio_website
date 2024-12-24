


import React, { useState, useEffect } from "react";

const ImageSlider = ({ folderPath }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      
      const allImageModules = {
        bookshelf: import.meta.glob('../assets/projects/bookshelf/*.png'),
        launcher: import.meta.glob('../assets/projects/launcher/*.png'),
        portfolio: import.meta.glob('../assets/projects/portfolio/*.png'),
        parakh: import.meta.glob('../assets/projects/parakh/*.png'),
        about: import.meta.glob('../assets/about/*.{png,jpg}'),
      };

      
      const selectedFolderImages = allImageModules[folderPath];

    
      if (selectedFolderImages) {
        const resolvedPaths = await Promise.all(
          Object.keys(selectedFolderImages).map(async (key) => {
            const imageModule = await selectedFolderImages[key]();
            return imageModule.default;
          })
        );

        setImages(resolvedPaths);
      }
    };

    fetchImages();
  }, [folderPath]); 

  useEffect(() => {
    if(folderPath == "about"){
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }    
  }, [images.length]);


  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg group">
      {/* Images */}
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-contain max-h-[500px]"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-100 group-hover:opacity-100 opacity-0 transition-opacity duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-100 group-hover:opacity-100 opacity-0 transition-opacity duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-gray-800" : "bg-gray-400"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
