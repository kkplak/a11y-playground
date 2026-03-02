import React, { useState } from 'react';
import { useAnnouncer } from '../context/AnnouncementContext';

// CarouselDemo implements a basic accessible carousel.  It does not
// auto‑advance and includes labelled previous/next controls.  When the
// slide changes, a message is sent to the announcement log.

const CarouselDemo: React.FC = () => {
  const slides = [
    { id: 'slide1', img: '/images/decorative.png', alt: 'Decorative pattern slide' },
    { id: 'slide2', img: '/images/informative.png', alt: 'Bar chart slide' },
    { id: 'slide3', img: '/images/complex.png', alt: 'Network diagram slide' },
  ];
  const [index, setIndex] = useState(0);
  const { announce } = useAnnouncer();

  const goTo = (newIndex: number) => {
    setIndex(newIndex);
    announce(`Carousel moved to slide ${newIndex + 1} of ${slides.length}`);
  };
  const prev = () => {
    const newIndex = (index - 1 + slides.length) % slides.length;
    goTo(newIndex);
  };
  const next = () => {
    const newIndex = (index + 1) % slides.length;
    goTo(newIndex);
  };

  return (
    <div>
      <p>
        <strong>What this demonstrates:</strong> Carousels must not auto‑advance
        without user interaction. Controls are clearly labelled, focusable and
        slides are announced to assistive technologies.
      </p>
      <ul>
        <li>Use the Next and Previous buttons to navigate between slides.</li>
      </ul>
      <div
        className="carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Image carousel"
      >
        <div className="carousel-slides" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${i + 1} of ${slides.length}`}
              style={{ minWidth: '100%' }}
            >
              <img src={slide.img} alt={slide.alt} style={{ width: '100%' }} />
            </div>
          ))}
        </div>
        <button type="button" className="prev" onClick={prev} aria-label="Previous slide">
          ‹
        </button>
        <button type="button" className="next" onClick={next} aria-label="Next slide">
          ›
        </button>
      </div>
    </div>
  );
};

export default CarouselDemo;