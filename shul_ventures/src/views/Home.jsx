import Hero from "../components/Hero";
import InquiryForm from "../components/InquiryForm";
import ServiceCard from "../components/ServiceCard";

function Home() {
  const services = [
    {
      image: "./../assets/images/image.jpg",
      title: "Training & Development",
      description:
        "Professional training programs in IT and other domains, with placement support.",
    },
    {
      image: "./../assets/images/image.jpg",
      title: "Pest Control",
      description:
        "Effective pest management solutions ensuring hygiene and safety.",
    },
    {
      image: "../../public/image.jpg",
      title: "Electrical Services",
      description:
        "Complete electrical installations, maintenance, and project solutions.",
    },
    {
      image: "../../public/image.jpg",
      title: "Solar Services",
      description:
        "End-to-end solar engineering with design, installation, and maintenance.",
    },
    { 
      image: "../../public/image.jpg",
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
        <div className="container about-home-grid">

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

            <button className="primary-button">
              Know More
            </button>
          </div>

        </div>
      </section>

      {/* Quick Inquiry */}
      <InquiryForm />

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
