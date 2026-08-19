import { useEffect, useState } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previous) =>
        previous === heroImages.length - 1
          ? 0
          : previous + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((previous) =>
      previous === heroImages.length - 1
        ? 0
        : previous + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((previous) =>
      previous === 0
        ? heroImages.length - 1
        : previous - 1
    );
  };

  return (
    <section className="hero-wrapper">
      <div className="hero-carousel">

        {/* ==============================
            SLIDE TRACK
        ============================== */}
    <div
  className="hero-track"
  style={{
    transform: `translateX(calc(-36vw - ${currentIndex} * (72vw + 20px)))`,
  }}
>
  {heroImages.map((image, index) => (
    <div
      key={index}
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

        {/* ==============================
            PREVIOUS BUTTON
        ============================== */}
        <button
          className="hero-arrow hero-arrow-left"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          &#10094;
        </button>

        {/* ==============================
            NEXT BUTTON
        ============================== */}
        <button
          className="hero-arrow hero-arrow-right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#10095;
        </button>

        {/* ==============================
            DOTS
        ============================== */}
        <div className="hero-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;


// import { useEffect, useState } from "react";

// import Hero1 from "../assets/images/hero1.png";
// import Training from "../assets/images/hero2.png";
// import Electric from "../assets/images/hero3.png";
// import Pest from "../assets/images/hero4.png";
// import Solar from "../assets/images/hero5.png";
// import Placement from "../assets/images/hero6.png";

// import "./Hero.css";

// const heroImages = [
//   Hero1,
//   Electric,
//   Solar,
//   Training,
//   Pest,
//   Placement,
// ];

// function Hero() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatic slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((previous) =>
//         previous === heroImages.length - 1
//           ? 0
//           : previous + 1
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => {
//     setCurrentIndex((previous) =>
//       previous === heroImages.length - 1
//         ? 0
//         : previous + 1
//     );
//   };

//   const previousSlide = () => {
//     setCurrentIndex((previous) =>
//       previous === 0
//         ? heroImages.length - 1
//         : previous - 1
//     );
//   };

//   return (
//     <section className="hero-wrapper">

//       <div className="hero-carousel">

//         <div className="hero-track">

//           {/* Previous slide */}
//           <div
//             className="hero-slide side-slide previous-slide"
//             style={{
//               backgroundImage: `url(${
//                 heroImages[
//                   (currentIndex - 1 + heroImages.length) %
//                   heroImages.length
//                 ]
//               })`,
//             }}
//           />

//           {/* Main slide */}
//           <div
//             className="hero-slide main-slide"
//             style={{
//               backgroundImage: `url(${heroImages[currentIndex]})`,
//             }}
//           />

//           {/* Next slide */}
//           <div
//             className="hero-slide side-slide next-slide"
//             style={{
//               backgroundImage: `url(${
//                 heroImages[
//                   (currentIndex + 1) %
//                   heroImages.length
//                 ]
//               })`,
//             }}
//           />

//         </div>

//         {/* Previous button */}
//         <button
//           className="hero-arrow hero-arrow-left"
//           onClick={previousSlide}
//           aria-label="Previous slide"
//         >
//           &#10094;
//         </button>

//         {/* Next button */}
//         <button
//           className="hero-arrow hero-arrow-right"
//           onClick={nextSlide}
//           aria-label="Next slide"
//         >
//           &#10095;
//         </button>

//         {/* Dots */}
//         <div className="hero-dots">

//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               className={`hero-dot ${
//                 currentIndex === index ? "active" : ""
//               }`}
//               onClick={() => setCurrentIndex(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Hero;





