import Hero from "./../components/Hero.jsx";

import "./Services.css";
function Services() {

  const services_list = [
    {
      image:"image",
      title:"TITLE",
      discription:"The solar system consists of the Sun and everything that orbits it due to gravity.This includes eight planets, their moons, dwarf planets, asteroids, and comets. It formed about 4.6 billion years ago from a collapsing cloud of gas and dust"
    },
    {
      image:"image",
      title:"TITLE",
      discription:"The solar system consists of the Sun and everything that orbits it due to gravity.This includes eight planets, their moons, dwarf planets, asteroids, and comets. It formed about 4.6 billion years ago from a collapsing cloud of gas and dust"
    },
    {
      image:"image",
      title:"TITLE",
      discription:"The solar system consists of the Sun and everything that orbits it due to gravity.This includes eight planets, their moons, dwarf planets, asteroids, and comets. It formed about 4.6 billion years ago from a collapsing cloud of gas and dust"
    },
    {
      image:"image",
      title:"TITLE",
      discription:"The solar system consists of the Sun and everything that orbits it due to gravity.This includes eight planets, their moons, dwarf planets, asteroids, and comets. It formed about 4.6 billion years ago from a collapsing cloud of gas and dust"
    },
    {
      image:"image",
      title:"TITLE",
      discription:"The solar system consists of the Sun and everything that orbits it due to gravity.This includes eight planets, their moons, dwarf planets, asteroids, and comets. It formed about 4.6 billion years ago from a collapsing cloud of gas and dust"
    }
  ];
  return (
    <section>
      <Hero/>

      <div className="services-list-section">
         <h1>Our Services</h1>
         <p className="short-info">Delivering innovative, reliable, and industry-focused solutions through 
          specialized teams dedicated to excellence across multiple domains. </p>
          
          <div className="service-list">
                <div className="about-service">
                         <img src=""  className="service-image" alt="Service Image"/>
                         <div className="service-details-info">
                             <h3 className="service-info-title">Solar Services</h3>
                             <p className="service-info-desc">The solar system consists of the Sun and everything that orbits it due to 
                              gravity.This includes eight planets, their moons, dwarf planets, asteroids, 
                              and comets. It formed about 4.6 billion years ago from a collapsing cloud of
                               gas and dust</p>
                         </div>
                </div>
          </div>
      </div>
    </section>
  );
}

export default Services;