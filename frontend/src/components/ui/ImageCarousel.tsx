import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

const ImageCarousel: React.FC<CarouselProps> = ({ images, autoPlayInterval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [isHovered, nextSlide, autoPlayInterval]);

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto h-[400px] sm:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden glass-card-dark border border-white/10 shadow-premium group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contenedor de Imágenes */}
      <div 
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img 
              src={img} 
              alt={`Galería ${index + 1}`} 
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            {/* Overlay sutil para oscurecer la base y que resalten los textos si existieran */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05111F] via-transparent to-transparent opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Botones de Navegación */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-primary/80 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
        aria-label="Anterior imagen"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-primary/80 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 z-10"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores (Puntos) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-accent w-8 shadow-[0_0_10px_rgba(230,95,30,0.8)]' 
                : 'bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
