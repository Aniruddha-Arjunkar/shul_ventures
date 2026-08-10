
import SolarService from "../assets/images/solar-solutions-services.png";
import PestControlService from "../assets/images/pest-control-services.png";
import ElectricalServices from "../assets/images/electrical-services.png";
import TrainingDevelopments from "../assets/images/training-development.png";
import Placements from "../assets/images/placements-services.png";


import "./Services.css";
function Services() {

  const services_list = [
    {
      image: SolarService,
      title:"Solar Services",
      description:"We provide reliable and sustainable solar energy solutions designed to help residential, commercial, and industrial customers reduce energy costs and adopt cleaner sources of power. Our solutions are tailored to meet specific energy requirements while focusing on efficiency, performance, and long-term value.From solar system installation and setup to maintenance and performance support, our team helps customers make a smooth transition toward renewable energy.",
      button:"#009933",
      background:"#F5FFF5"

    },
    {
      image:PestControlService,
      title:"Pest Control Services",
      description:"We provide professional pest control solutions to help maintain clean, safe, and hygienic residential, commercial, and industrial environments. Our services are designed to address common pest problems effectively while focusing on responsible treatment methods and long-term prevention.From routine preventive services to targeted pest management, we provide solutions tailored to the specific requirements of each property.",
      button:"#ff6600",
      background:"#FEFBF5"
    },
    {
      image:ElectricalServices,
      title:"Eletrical Services",
      description:"We provide reliable and professional electrical solutions designed to meet the needs of residential, commercial, and industrial clients. Our services cover electrical installation, maintenance, repair, troubleshooting, and system upgrades, with a strong focus on safety, quality, and efficiency.Our experienced professionals work to ensure that electrical systems are properly installed, maintained, and optimized for dependable performance.From routine electrical maintenance to complex requirements, we deliver practical solutions tailored to each client's needs.",
      button:"#0000ff",
      background:"#F5FBFF"
    },
    {
      image:TrainingDevelopments,
      title:"Traning & Development",
      description:"We provide industry-oriented training and development programs for both freshers and experienced professionals, designed to build relevant skills, enhance professional capabilities, and support long-term career growth.Our programs combine practical learning, technical knowledge, real-world applications, and professional development to help participants meet evolving industry requirements.",
      button:"#9900ff",
      background:"#F3E8FF"
    },
    {
      image:Placements,
      title:"Placement",
      description:"We connect skilled and aspiring professionals with suitable career opportunities across various industries and domains. Our placement services are designed to understand the requirements of both candidates and employers, helping create meaningful connections between talent and opportunity.We support candidates throughout the recruitment journey, from identifying suitable opportunities and preparing for interviews to connecting them with relevant organizations.",
      button:"#3366cc",
      background:"#ebf0fa"
    },
  
  ];
  return (
    <section>
      <div className="services-list-section">
        <div className="service-page-content">
          <h1>Our Services</h1>
          <p className="short-info">Delivering innovative, reliable, and industry-focused solutions through 
           specialized teams dedicated to excellence across multiple domains. </p>
        </div>  

          <div className="service-list">
             { services_list.map((service)=>(
              <div className="about-service" key={service.title}>
                         <img src={service.image}  className="service-image" alt="Service Image"/>
                         <div className="service-details-info" style={{borderRight:`5px solid ${service.button}`,backgroundColor:service.background}}>
                             <h3 className="service-info-title">{service.title}</h3>
                             <p className="service-info-desc">{service.description}</p>
                             <button onClick={() => window.location.href = "/contact"} className="service-but" style={{backgroundColor:service.button}}>
                              Book Appointment
                             </button>
                         </div>
                </div>
             ))
             }
          </div>
      </div>
    </section>
  );
}

export default Services;