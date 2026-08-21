import { useParams, Link } from "react-router";

import servicesData from "../../data/ServicesData.js";

import ServiceInquiryForm from "./../../components/ServiceInquiryForm.jsx";

import "./ServiceDetails.css";

function ServiceDetails() {

  /*
    Get serviceId from URL.

    Example:

    /services/solar

    serviceId = "solar"
  */
  const { serviceId } = useParams();


  /*
    Find the service from our data.
  */
  const service = servicesData[serviceId];


  /*
    If someone enters an invalid URL,
    show this message.
  */
  if (!service) {
    return (
      <section className="service-not-found">

        <h1>Service Not Found</h1>

        <p>
          The service you are looking for
          does not exist.
        </p>

        <Link to="/services">
          Back to Services
        </Link>

      </section>
    );
  }


  return (
    <main className="service-details-page">

      {/* =====================================
          HERO / INTRO
      ===================================== */}

      <section className="service-detail-hero">

        <div className="service-detail-image">

          <img
            src={service.image}
            alt={service.title}
          />

        </div>


        <div className="service-detail-intro">

          <span className="service-label">
            SHUL VENTURES PVT. LTD.
          </span>

          <h1>{service.title}</h1>

          <p>
            {service.description}
          </p>

          <Link
            to="/services"
            className="back-services-link"
          >
            ← Back to Services
          </Link>

        </div>

      </section>


      {/* =====================================
          WHAT WE PROVIDE
      ===================================== */}

      <section className="service-content-section">

        <div className="section-heading">

          <span></span>

          <h2>
            What We Provide
          </h2>

        </div>


        <div className="service-detail-list">

          {service.whatWeProvide.map(
            (item, index) => (
              <div
                className="service-list-item"
                key={index}
              >
                <span>✓</span>

                <p>{item}</p>
              </div>
            )
          )}

        </div>

      </section>


      {/* =====================================
          WHY CHOOSE US
      ===================================== */}

      <section className="service-content-section">

        <div className="section-heading">

          <span></span>

          <h2>
            Why Choose Us
          </h2>

        </div>


        <div className="service-detail-list">

          {service.whyChooseUs.map(
            (item, index) => (
              <div
                className="service-list-item"
                key={index}
              >
                <span>✓</span>

                <p>{item}</p>
              </div>
            )
          )}

        </div>

      </section>


      {/* =====================================
          OUR PROCESS
      ===================================== */}

      <section className="service-content-section">

        <div className="section-heading">

          <span></span>

          <h2>
            Our Process
          </h2>

        </div>


        <div className="service-process">

          {service.process.map(
            (step, index) => (
              <div
                className="process-card"
                key={index}
              >

                <div className="process-number">
                  {index + 1}
                </div>

                <p>
                  {step}
                </p>

              </div>
            )
          )}

        </div>

      </section>


      {/* =====================================
          INQUIRY FORM
      ===================================== */}

      <section className="service-inquiry-section">

        <div className="section-heading">

          <span></span>

          <h2>
            {service.formTitle}
          </h2>

        </div>


        <ServiceInquiryForm
          service={service}
        />

      </section>

    </main>
  );
}

export default ServiceDetails;