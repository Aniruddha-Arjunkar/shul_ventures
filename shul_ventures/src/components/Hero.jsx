import {useState , useEffect} from "react";
import Hero1 from "../assets/images/hero1.png";
import Electric from "../assets/images/electric.png";
import Solar from "../assets/images/solar.png";
import Training from "../assets/images/training.png";
import Pest from "../assets/images/pest_control.png";


import "./Hero.css";

  const heroImages=[
    Hero1,
    Electric,
    Solar,
    Training,
    Pest  
  ];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previousImage) => {
        return (previousImage + 1) % heroImages.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={
            index === currentImage
              ? "hero-slide active"
              : "hero-slide"
          }
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
    </section>
  );
}

export default Hero;