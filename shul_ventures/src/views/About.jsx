import AboutWhoAreWe from "./../assets/images/about-who-are-we.png"
import HeroImage from "../assets/images/about-zero-image.png"

import "./About.css";

function About() {
  const strengths = [
    {
      icon: "👥",
      title: "Experienced Professionals",
      description:
        "Our team brings industry knowledge, technical expertise, and practical experience."
    },
    {
      icon: "🛡️",
      title: "Quality Assurance",
      description:
        "We follow proven standards and best practices to ensure high-quality services."
    },
    {
      icon: "👤",
      title: "Customer First",
      description:
        "Understanding customer needs and delivering tailored solutions is our highest priority."
    },
    {
      icon: "⚙️",
      title: "End-to-End Solutions",
      description:
        "From consultation and planning to execution and support, we manage everything."
    },
    {
      icon: "🏷️",
      title: "Affordable Pricing",
      description:
        "We provide cost-effective solutions without compromising on quality."
    },
    {
      icon: "◷",
      title: "Timely Delivery",
      description:
        "We value your time and ensure projects are completed efficiently and on schedule."
    }
  ];

  const industries = [
    {
      icon: "☀️",
      title: "Solar Energy"
    },
    {
      icon: "🐞",
      title: "Pest Control"
    },
    {
      icon: "⚡",
      title: "Electrical Services"
    },
    {
      icon: "🎓",
      title: "Training & Development"
    },
    {
      icon: "👥",
      title: "Placement Services"
    },
    {
      icon: "💻",
      title: "IT & Software Solutions"
    }
  ];

  const values = [
    {
      icon: "🤝",
      title: "Integrity",
      description:
        "We believe in honesty, transparency, and ethical business practices."
    },
    {
      icon: "💡",
      title: "Innovation",
      description:
        "We continuously adopt modern technologies and smarter solutions."
    },
    {
      icon: "🏆",
      title: "Excellence",
      description:
        "We strive to exceed expectations through quality workmanship and improvement."
    },
    {
      icon: "❤️",
      title: "Commitment",
      description:
        "We are dedicated to delivering reliable services and building long-term relationships."
    }
  ];

  return (
    <main className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <div className="about-hero-content">

          <p className="section-label">ABOUT SHUL VENTURES</p>

          <h1>
            About Shul Ventures Pvt. Ltd.
          </h1>

          <div className="blue-line"></div>

          <p className="about-hero-description">
            Delivering innovative solutions across multiple industries
            through expertise, quality, and customer-focused services.
          </p>

          <div className="hero-stats">

            <div className="hero-stat">
              <span className="stat-icon">👥</span>
              <div>
                <strong>100+</strong>
                <span>Happy Clients</span>
              </div>
            </div>

            <div className="hero-stat">
              <span className="stat-icon">💼</span>
              <div>
                <strong>10+</strong>
                <span>Years of Experience</span>
              </div>
            </div>

            <div className="hero-stat">
              <span className="stat-icon">🏅</span>
              <div>
                <strong>20+</strong>
                <span>Expert Professionals</span>
              </div>
            </div>

          </div>

        </div>

        <div className="about-hero-image">
          <img src={HeroImage} alt="hero image" />
        </div>

      </section>


      {/* WHO WE ARE  */}

      <section className="who-we-are">

        <div className="who-content">

          <p className="section-label">
            WHO WE ARE
          </p>

          <h2>
            Building Solutions.
            <br />
            Creating Value.
          </h2>

          <div className="blue-line"></div>

          <p>
            Shul Ventures Pvt. Ltd. is a diversified service company
            committed to delivering reliable, innovative, and high-quality
            solutions across multiple industries.
          </p>

          <p>
            Our team consists of experienced professionals specializing in
            technology, renewable energy, facility management, electrical
            solutions, and workforce development.
          </p>

          <p>
            With a strong focus on customer satisfaction, we combine
            technical expertise with practical experience to provide
            efficient, cost-effective, and sustainable services.
          </p>

        </div>

        <div className="who-image-container">

          <img
            src={AboutWhoAreWe}
            alt="Shul Ventures Team"
          />

          <div className="strength-card">

            <span className="strength-icon">👥</span>

            <div>
              <h3>Our Strength</h3>
              <p>
                People, Technology
                <br />
                and Commitment
              </p>
            </div>

          </div>

        </div>

      </section>


      {/*  MISSION / VISION  */}

      <section className="mission-vision">

        <div className="mission-vision-card">

          <div className="mv-icon">
            🎯
          </div>

          <div>
            <p className="section-label">
              OUR MISSION
            </p>

            <div className="blue-line"></div>

            <p>
              To provide dependable, innovative, and value-driven solutions
              that help our clients achieve their goals while maintaining
              the highest standards of quality, professionalism, and
              customer satisfaction.
            </p>
          </div>

        </div>


        <div className="mv-divider"></div>


        <div className="mission-vision-card">

          <div className="mv-icon">
            👁️
          </div>

          <div>
            <p className="section-label">
              OUR VISION
            </p>

            <div className="blue-line"></div>

            <p>
              To become one of India's most trusted multi-service companies
              by delivering excellence across every project and building
              long-lasting relationships with our customers through
              integrity, innovation, and continuous improvement.
            </p>
          </div>

        </div>

      </section>


      {/*  WHY CHOOSE US  */}

      <section className="why-choose-us">

        <p className="section-label">
          WHY CHOOSE US
        </p>

        <h2>
          We Deliver More Than Promises
        </h2>

        <div className="strength-grid">

          {strengths.map((strength) => (

            <article
              className="strength-item"
              key={strength.title}
            >

              <div className="strength-item-icon">
                {strength.icon}
              </div>

              <h3>
                {strength.title}
              </h3>

              <div className="small-blue-line"></div>

              <p>
                {strength.description}
              </p>

            </article>

          ))}

        </div>

      </section>


      {/*  INDUSTRIES */}

      <section className="industries-section">

        <p className="section-label">
          INDUSTRIES WE SERVE
        </p>

        <h2>
          Solutions for Every Sector
        </h2>

        <div className="industries-grid">

          {industries.map((industry) => (

            <article
              className="industry-card"
              key={industry.title}
            >

              <div className="industry-icon">
                {industry.icon}
              </div>

              <h3>
                {industry.title}
              </h3>

            </article>

          ))}

        </div>

      </section>


      {/*  CORE VALUES  */}

      <section className="values-section">

        <div className="values-container">

          <p className="section-label">
            OUR CORE VALUES
          </p>

          <div className="values-grid">

            {values.map((value) => (

              <article
                className="value-card"
                key={value.title}
              >

                <div className="value-icon">
                  {value.icon}
                </div>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.description}
                </p>

              </article>

            ))}

          </div>

        </div>


        {/* CTA */}

        <div className="about-cta">

          <div>

            <h2>
              Ready to Work With Us?
            </h2>

            <p>
              Whether you're looking for professional services,
              business solutions, or career opportunities, our team
              is here to help.
            </p>

            <button
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Contact Us
              <span>→</span>
            </button>

          </div>

        </div>

      </section>


      {/*  BOTTOM STATS  */}

      <section className="about-bottom-stats">

        <div>
          <strong>100+</strong>
          <span>Happy Clients</span>
        </div>

        <div>
          <strong>150+</strong>
          <span>Projects Completed</span>
        </div>

        <div>
          <strong>20+</strong>
          <span>Expert Professionals</span>
        </div>

        <div>
          <strong>10+</strong>
          <span>Service Locations</span>
        </div>

      </section>

    </main>
  );
}

export default About;