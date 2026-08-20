import { useEffect, useLayoutEffect, useRef, useState } from "react";

import Hero1 from "../assets/images/hero1.png";
import Training from "../assets/images/hero2.png";
import Electric from "../assets/images/hero3.png";
import Pest from "../assets/images/hero4.png";
import Solar from "../assets/images/hero5.png";
import Placement from "../assets/images/hero6.png";

import "./Hero.css";

const heroImages = [
  Hero1,
  Electric,
  Solar,
  Training,
  Pest,
  Placement,
];

function Hero() {
  /*
    Clone last slide at the beginning
    Clone first slide at the end

    Original:
    [1] [2] [3] [4] [5] [6]

    Extended:
    [6] [1] [2] [3] [4] [5] [6] [1]
     ↑                  ↑              ↑
    clone              last         clone
  */
  const slides = [
    heroImages[heroImages.length - 1],
    ...heroImages,
    heroImages[0],
  ];

  /*
    Start at index 1 because index 0 is
    the cloned last slide.
  */
  const [currentIndex, setCurrentIndex] = useState(1);

  const [slideWidth, setSlideWidth] = useState(0);

  const [transitionEnabled, setTransitionEnabled] =
    useState(true);

  const slideRef = useRef(null);

  /*
    =========================================
    MEASURE SLIDE WIDTH
    =========================================
  */
  useLayoutEffect(() => {
    const updateSlideWidth = () => {
      if (slideRef.current) {
        const width =
          slideRef.current.getBoundingClientRect().width;

        setSlideWidth(width);
      }
    };

    updateSlideWidth();

    window.addEventListener(
      "resize",
      updateSlideWidth
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateSlideWidth
      );
    };
  }, []);

  /*
    =========================================
    NEXT SLIDE
    =========================================
  */
  const nextSlide = () => {
    setTransitionEnabled(true);

    setCurrentIndex((previous) => previous + 1);
  };

  /*
    =========================================
    PREVIOUS SLIDE
    =========================================
  */
  const previousSlide = () => {
    setTransitionEnabled(true);

    setCurrentIndex((previous) => previous - 1);
  };

  /*
    =========================================
    AUTOMATIC SLIDE
    =========================================
  */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /*
    =========================================
    HANDLE INFINITE LOOP
    =========================================

    When:

    last real slide -> cloned first slide

    we instantly move back to the
    real first slide AFTER animation.

    Same for reverse direction.
  */
  const handleTransitionEnd = () => {
    /*
      We reached cloned first slide.
    */
    if (currentIndex === slides.length - 1) {
      setTransitionEnabled(false);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setCurrentIndex(1);

          requestAnimationFrame(() => {
            setTransitionEnabled(true);
          });
        });
      });
    }

    /*
      We reached cloned last slide.
    */
    if (currentIndex === 0) {
      setTransitionEnabled(false);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setCurrentIndex(slides.length - 2);

          requestAnimationFrame(() => {
            setTransitionEnabled(true);
          });
        });
      });
    }
  };

  /*
    =========================================
    DOT CLICK
    =========================================
  */
  const goToSlide = (index) => {
    setTransitionEnabled(true);

    /*
      Real image index starts from 1
      because index 0 is the clone.
    */
    setCurrentIndex(index + 1);
  };

  /*
    =========================================
    CALCULATE TRACK POSITION
    =========================================

    Goal:

          |------- SCREEN -------|
                    |
                    ↓
             [ ACTIVE SLIDE ]
                    |
                  CENTER

    Formula moves the current slide
    exactly to the center of the viewport.
  */

  const gap = 20;

  const trackOffset =
    slideWidth > 0
      ? window.innerWidth / 2 -
        slideWidth / 2 -
        currentIndex * (slideWidth + gap)
      : 0;

  /*
    Current dot index.

    currentIndex:
    1 -> dot 0
    2 -> dot 1
    3 -> dot 2
    ...
  */
  const activeDot =
    (currentIndex - 1 + heroImages.length) %
    heroImages.length;

  return (
    <section className="hero-wrapper">

      <div className="hero-carousel">

        {/* =====================================
            CAROUSEL TRACK
        ===================================== */}
        <div
          className={`hero-track ${
            transitionEnabled
              ? "hero-track-animated"
              : "hero-track-no-transition"
          }`}
          style={{
            transform: `translate3d(${trackOffset}px, 0, 0)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >

          {slides.map((image, index) => (
            <div
              key={index}
              ref={
                index === 1
                  ? slideRef
                  : null
              }
              className={`hero-slide ${
                index === currentIndex
                  ? "active-slide"
                  : "side-slide"
              }`}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}

        </div>


        {/* =====================================
            PREVIOUS BUTTON
        ===================================== */}
        <button
          className="hero-arrow hero-arrow-left"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          &#10094;
        </button>


        {/* =====================================
            NEXT BUTTON
        ===================================== */}
        <button
          className="hero-arrow hero-arrow-right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#10095;
        </button>


        {/* =====================================
            DOTS
        ===================================== */}
        <div className="hero-dots">

          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${
                activeDot === index
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                goToSlide(index)
              }
              aria-label={`Go to slide ${
                index + 1
              }`}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Hero;


