import Hero from "../components/Hero";
import InquiryForm from "../components/InquiryForm";
import ServiceCard from "../components/ServiceCard";

import "./Home.css";

function Home() {
  const services = [
    {
      image: "/training_card.png",
      title: "Training & Development",
      description:
        "Professional training programs in IT and other domains, with placement support.",
    },
    {
      image: "/pest_control_card.png",
      title: "Pest Control",
      description:
          "Effective pest management solutions ensuring hygiene and safety.",
    },  
    {
      image: "/electric_card.png",
      title: "Electrical Services",
      description:
        "Complete electrical installations, maintenance, and project solutions.",
    },
    {
      image: "/solar_card.png",
      title: "Solar Services",
      description:
        "End-to-end solar engineering with design, installation, and maintenance.",
    },
    { 
      image: "/placements_card.png",
      title: "Placement",
      description:
        "Job placement assistance focused on matching skills with the right career opportunities.",
    },
  ];

  return (
    <>
      <Hero />
       
      {/* About Company */}
      <section className="about-home-section">

          <div className="about-home-content">
            <p className="section-label">
              ABOUT SHUL VENTURES
            </p>

            <h2>
              We deliver solutions in an easy way
            </h2>

            <p>
              Shul Ventures Pvt. Ltd. is a team of skilled
              and experienced workforce in respective domains.
            </p>

            <p>
              For each domain, we have a team of qualified
              professionals who focus on understanding the
              root cause of problems and delivering effective
              solutions.
            </p>

            <p>
              We are committed to quality results, client
              satisfaction, and continuous improvement.
            </p>

            <button className="primary-button" onClick={() => window.location.href = "/about"}>
              Know More
            </button>
          </div>

        <InquiryForm />
      </section>

      {/* Quick Inquiry */}
      
     

      {/* Services */}
      <section className="services-section">
        <div className="container">

          <div className="section-heading">
            <p>WHAT WE DO</p>

            <h2>
              Our Services
            </h2>

            <span>
              We provide multi-domain solutions with
              expert teams in each sector.
            </span>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;
