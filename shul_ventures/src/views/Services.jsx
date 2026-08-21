import { Link } from "react-router";

import SolarService from "../assets/images/solar-solutions-services.png";
import PestControlService from "../assets/images/pest-control-services.png";
import ElectricalServices from "../assets/images/electrical-services.png";
import TrainingDevelopments from "../assets/images/training-development.png";
import Placements from "../assets/images/placements-services.png";

import ServiceHeroImage from "../assets/images/service-hero-image.png";

import "./Services.css";


function Services() {
  const services_list = [
  {
    id: "solar",
    image: SolarService,
    title: "Solar Services",
    description:
      "We provide reliable and sustainable solar energy solutions designed to help residential, commercial, and industrial customers reduce energy costs and adopt cleaner sources of power. Our solutions are tailored to meet specific energy requirements while focusing on efficiency, performance, and long-term value. From solar system installation and setup to maintenance and performance support, our team helps customers make a smooth transition toward renewable energy.",
  },

  {
    id: "pest-control",
    image: PestControlService,
    title: "Pest Control Services",
    description:
      "We provide professional pest control solutions to help maintain clean, safe, and hygienic residential, commercial, and industrial environments. Our services are designed to address common pest problems effectively while focusing on responsible treatment methods and long-term prevention. From routine preventive services to targeted pest management, we provide solutions tailored to the specific requirements of each property.",
  },

  {
    id: "electrical",
    image: ElectricalServices,
    title: "Electrical Services",
    description:
      "We provide reliable and professional electrical solutions designed to meet the needs of residential, commercial, and industrial clients. Our services cover electrical installation, maintenance, repair, troubleshooting, and system upgrades, with a strong focus on safety, quality, and efficiency. Our experienced professionals work to ensure that electrical systems are properly installed, maintained, and optimized for dependable performance.",
  },

  {
    id: "training",
    image: TrainingDevelopments,
    title: "Training & Development",
    description:
      "We provide industry-oriented training and development programs for both freshers and experienced professionals, designed to build relevant skills, enhance professional capabilities, and support long-term career growth. Our programs combine practical learning, technical knowledge, real-world applications, and professional development to help participants meet evolving industry requirements.",
  },

  {
    id: "placement",
    image: Placements,
    title: "Placement",
    description:
      "We connect skilled and aspiring professionals with suitable career opportunities across various industries and domains. Our placement services are designed to understand the requirements of both candidates and employers, helping create meaningful connections between talent and opportunity. We support candidates throughout the recruitment journey, from identifying suitable opportunities and preparing for interviews to connecting them with relevant organizations.",
  }
  ];

  return (
    <section className="services-page">

      {/* =========================
          PAGE HEADER
      ========================== */}

       <section className="services-hero">

  <div className="services-hero-content">

    {/* LEFT CONTENT */}
    <div className="services-hero-text">

      <span className="service-header-label">
        WHAT WE OFFER
      </span>

      <h1>
        Solutions That Drive
        <br />
        Your Business
      </h1>

      <div className="blue-line"></div>

      <p>
        We deliver reliable and innovative solutions across multiple
        domains, helping businesses and individuals address their
        unique needs with quality, expertise, and practical results.
        Our services are designed to create lasting value, improve
        efficiency, and support sustainable growth.
      </p>

      <button
       className="explore-services-btn"
       onClick={() => {
       document.getElementById("services-list")?.scrollIntoView({
       behavior: "smooth",
       block: "start",
    });
  }}
>
  Explore Services
  <span>↓</span>
</button>

    </div>


    {/* RIGHT IMAGE */}
    <div className="services-hero-image-wrapper">

      <img
        src={ServiceHeroImage}
        alt="Our Services"
        className="services-hero-image"
      />

    </div>

  </div>

</section>

        {/* =====================================================
          EXPERTISE SECTION
      ====================================================== */}

      <section className="services-expertise"  id="services-list">

        <div className="expertise-heading">

          <span>OUR EXPERTISE</span>

          <h2>
            Services Built Around
            <strong> Your Needs</strong>
          </h2>

          <p>
            Explore our range of specialized services designed to
            deliver practical solutions and long-term value.
          </p>

        </div>

      </section>

      {/* =========================
          SERVICES LIST
      ========================== */}

      <div className="service-list">

        {services_list.map((service, index) => (

          <article
            className="about-service"
            key={service.title}
          >

            {/* IMAGE */}

            <div className="service-image-wrapper">

              <img
                src={service.image}
                className="service-image"
                alt={service.title}
              />

              <div className="image-overlay"></div>

            </div>


            {/* CONTENT */}

            <div className="service-details-info">

              <div className="service-content-top">

                <div className="service-title-line"></div>

                <h3 className="service-info-title">
                  {service.title}
                </h3>

                <p className="service-info-desc">
                  {service.description}
                </p>

                 {/* BUTTON */}

              <Link
                to={`/services/${service.id}`}
                className="service-but">
                Explore Service
                <span>→</span>
              </Link>

              </div>


            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Services;