import SolarService from "./../assets/images/solar-solutions-services.png";
import PestControlService from "./../assets/images/pest-control-services.png";
import ElectricalServices from "./../assets/images/electrical-services.png";
import TrainingDevelopments from "./../assets/images/training-development.png";
import Placements from "./../assets/images/placements-services.png";

const ServicesData ={
    solar : {
        id:"solar",
        title:"Solar Services",
        shortTitle:"Solar",
        image:SolarService,
        description:"We Provide reliable and Sustainable solar energy solutions designed to help RESIDENTIAL, COMMERCIAL and INDUSTRIAL CUSTOMERS reduce energy cost and adopt cleaner sources of power.",
        whatWeProvide:[
            "Solar Panal Installation",
            "Solar System Design",
            "Residential Solar Solutions",
            "Commercial Solar Solution",
            "Solar System Maintenance",
            "Performance Monitoring"
            ],
        whyChooseUs: [
            "Experienced Technical Team",
            "Quality Solar Equipment",
            "Professional Installation",
            "Reliable After-Sales Support",
            "Customized Solar Solutions",
            "Focus on Long-term Performance"
             ],
        process:[
            "Requirement Analysis",
            "Site Inspection",
            "System Design",
            "Installation",
            "Testing & Commissioning",
            "Maintenance & Support"
         ],
        formTitle:"Get a Solar Service Consultation"
    },
    
    electrical:{
        id:"electrical",
        title:"Electrical Services",
        shortTitle:"Electical",
        image:ElectricalServices,
        description:"We provide safe, reliable, and professional electrical solutions for residential, commercial, and industrial requirements.",
        whatWeProvide: [
          "Electrical Installation",
          "Electrical Maintenance",
          "Wiring and Rewiring",
          "Industrial Electrical Services",
          "Electrical Inspection",
          "Troubleshooting",
          "Preventive Maintenance",
             ],
        whyChooseUs: [
         "Experienced technicians",
         "Safety-focused work",
         "Reliable service",
         "Professional installation",
         "Timely support",
         "Quality workmanship"
      ],
        process: [
         "Requirement Understanding",
         "Site Inspection",
         "Planning",
         "Installation",
         "Testing",
         "Final Handover"
    ],

    formTitle: "Get an Electrical Service Consultation",
  },
   "pest-control": {
    id: "pest-control",
    title: "Pest Control Services",
    shortTitle: "Pest Control",
    image:PestControlService,
    description:"We provide professional pest control solutions to help maintain clean, safe, and hygienic residential, commercial, and industrial environments.",
    whatWeProvide: [
        "Residential Pest Control",
        "Commercial Pest Control",
        "Industrial Pest Control",
        "Cockroach Control",
        "Termite Control",
        "Mosquito Control",
        "Preventive Pest Management"
    ],
    whyChooseUs: [
       "Trained Professionals",
       "Safe Treatment Methods",
       "Effective Pest Control",
       "Customized Solutions",
       "Regular Maintenance Support",
       "Professional Service"
    ],
    process: [
      "Inspection",
      "Pest Identification",
      "Treatment Planning",
      "Treatment",
      "Monitoring",
      "Follow-up Service"
    ],
    formTitle: "Get a Pest Control Consultation",
  },


  training: {
    id:"training",
    title:"Training & Development",
    shortTitle:"Training",
    image: TrainingDevelopments,
    description:"We provide professional training and development programs designed to improve technical skills, professional capabilities, and career readiness.",
    whatWeProvide: [
      "Technical Training",
      "Professional Development",
      "Industry-Oriented Programs",
      "Skill Development",
      "Practical Learning",
      "Career Guidance"
    ],
    whyChooseUs: [
      "Industry-Oriented Training",
      "Experienced Trainers",
      "Practical Learning",
      "Career-Focused Programs",
      "Structured Learning",
      "Professional Guidance"
    ],
    process: [
      "Requirement Analysis",
      "Program Selection",
      "Training",
      "Practical Sessions",
      "Assessment",
      "Certification"
    ],
    formTitle: "Enquire About Training Programs",
  },


  placement: {
    id: "placement",
    title: "Placement Services",
    shortTitle: "Placement",
    image:Placements,
    description:"We connect job seekers with suitable career opportunities while helping organizations identify skilled and suitable candidates.",
    whatWeProvide: [
      "Job Placement Assistance",
      "Candidate Screening",
      "Career Guidance",
      "Resume Support",
      "Interview Preparation",
      "Employer Coordination"
    ],
    whyChooseUs: [
      "Industry Connections",
      "Career-Focused Guidance",
      "Candidate Support",
      "Professional Recruitment Process",
      "Suitable Job Opportunities",
      "Continuous Assistance"
    ],
    process: [
      "Candidate Registration",
      "Profile Assessment",
      "Job Matching",
      "Interview Coordination",
      "Selection",
      "Joining Support"
    ],
    formTitle: "Get Placement Assistance",
  },
};

export default ServicesData;
