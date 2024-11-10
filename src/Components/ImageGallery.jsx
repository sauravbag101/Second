import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const ImageGallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const galleryData = [
    {
      id: 1,
      image: "https://images.moneycontrol.com/static-mcnews/2024/11/20241107075818_donald-770x433.jpg?impolicy=website&width=400&height=225",
      thumbnail: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-11/06/full/1730879020-1729.jpg?im=FeatureCrop,size=(328,185)",
      title: "Thumbnail Gallery",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi aliquam eius, blanditiis quae, explicabo praesentium corporis tempora quam et rem nulla repellendus placeat."
    },
    {
        id: 1,
        image: "https://th-i.thgim.com/public/news/international/xlbe18/article68852392.ece/alternates/LANDSCAPE_1200/2024-01-26T210925Z_1795462371_RC2NC3ANIRKB_RTRMADP_3_CANADA-INDIA.JPG",
        thumbnail: "https://www.shutterstock.com/image-photo/tv-live-news-program-professional-600nw-2160015507.jpg",
        title: "Thumbnail Gallery",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi aliquam eius, blanditiis quae, explicabo praesentium corporis tempora quam et rem nulla repellendus placeat."
      },
      {
        id: 1,
        image: "https://th-i.thgim.com/public/incoming/kewkho/article68852010.ece/alternates/LANDSCAPE_960/PTI11_10_2024_000118B.jpg",
        thumbnail: "https://th-i.thgim.com/public/incoming/kewkho/article68852010.ece/alternates/LANDSCAPE_960/PTI11_10_2024_000118B.jpg",
        title: "Thumbnail Gallery",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi aliquam eius, blanditiis quae, explicabo praesentium corporis tempora quam et rem nulla repellendus placeat."
      },
      {
        id: 1,
        image: "https://th-i.thgim.com/public/incoming/f4w9f7/article68851738.ece/alternates/LANDSCAPE_1200/Election_2024_House_Washington_22701.jpg",
        thumbnail: "https://th-i.thgim.com/public/incoming/f4w9f7/article68851738.ece/alternates/LANDSCAPE_1200/Election_2024_House_Washington_22701.jpg",
        title: "Thumbnail Gallery",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi aliquam eius, blanditiis quae, explicabo praesentium corporis tempora quam et rem nulla repellendus placeat."
      },
      {
        id: 1,
        image: "https://th-i.thgim.com/public/incoming/j6mdid/article68851723.ece/alternates/LANDSCAPE_1200/2248_23_2_2023_15_10_15_1_DSC_5427.JPG",
        thumbnail: "https://th-i.thgim.com/public/incoming/j6mdid/article68851723.ece/alternates/LANDSCAPE_1200/2248_23_2_2023_15_10_15_1_DSC_5427.JPG",
        title: "Thumbnail Gallery",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi aliquam eius, blanditiis quae, explicabo praesentium corporis tempora quam et rem nulla repellendus placeat."
      },
     
    // Repeat similar objects for other items
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % galleryData.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [isHovered, galleryData.length]);

  const nextSlide = () => setActiveIndex((current) => (current + 1) % galleryData.length);
  const prevSlide = () => setActiveIndex((current) => (current - 1 + galleryData.length) % galleryData.length);

  const Loader = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <svg className="w-10 h-10 animate-spin" viewBox="0 0 50 50">
        <path fill="#ED1B28" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" />
      </svg>
    </div>
  );

  return (
    <div className='z-[-10px]'>
        
    <div className="absolute w-full mt-[-540px]">
      {isLoading && <Loader />}

      <div className="relative z-10 h-screen bg-gradient-to-l from-gray-800 to-gray-900 py-12">
        {/* Main Gallery */}
        <div 
          className="relative h-[80vh] flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full h-full overflow-hidden">
            {galleryData.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 w-full h-full transition-all duration-500 transform ${
                  index === activeIndex ? 'opacity-100 translate-x-0' : 
                  index < activeIndex ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}`}
              >
                <div className="relative w-full h-full group">
                  <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-12 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100">
                    <h3 className="mb-2 text-4xl font-bold text-white">{item.title}</h3>
                    <p className="text-lg leading-relaxed text-white">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 z-10 w-16 h-16 text-white transition-opacity duration-300 bg-black/30 rounded-full opacity-50 hover:opacity-100 top-1/2 -translate-y-1/2 ml-4"
          >
            <ChevronLeft className="w-8 h-8 ml-3" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 z-10 w-16 h-16 text-white transition-opacity duration-300 bg-black/30 rounded-full opacity-50 hover:opacity-100 top-1/2 -translate-y-1/2 mr-4"
          >
            <ChevronRight className="w-8 h-8 ml-4" />
          </button>
          
        </div>

        {/* Thumbnails */}
        <div className="relative max-w-5xl mx-auto px-12 grid grid-cols-5 gap-4 mt-8">
          {galleryData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`relative h-24 transition-transform duration-200 transform hover:scale-105 ${index === activeIndex ? 'ring-2 ring-red-600' : ''}`}
            >
              <img src={item.thumbnail} alt={item.title} className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 bg-gray-900/60 opacity-0 hover:opacity-100">
                <Eye className="w-6 h-6 text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Signature */}
      
    </div>
    </div>
  );
};

export default ImageGallery;
