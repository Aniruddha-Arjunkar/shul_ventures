import Job from "../assets/images/jobpage-zero-bgimage.png";
import JobCard from "../components/JobCard";

import "./Jobs.css";
function Jobs() {
 
  const jobs = [
    { sr : 1,
      title : "WEB DEVELOPER",
      experience : "Fresher",
      skills :[
        "HTML",
        "CSS",
        "Javascript"
      ],
      qualification : "Graduate (From the Branch Related to Computer Science).",
      color:"#ffffcc"
    },
    { sr : 2,
      title : "SENIOR JAVA DEVELOPER",
      experience : "2-3 Years",
      skills : [
        "Java",
        "JDBC",
        "SpringBoot",
        "REST APIs"
      ],
      qualification : "Education in MTech / MS / Btech in Computer Science or Engineering.",
      color : "#ccffcc"
    },
    { sr : 3,
      title : "CERTIFIED INTERNET CONSULTANT",
      experience : "Fresher",
      skills : [
        "Good Comunication",
        "Customer Interaction"
      ],
      qualification : "Any Graduate can Apply.",
      color : "#99ccff"
    },
    { sr : 4,
      title : "GRADUATE TRANEE",
      experience : "Fresher",
      skills : [
        "Any Programing Language",
        "DBMS",
        "Frontend Technologies"
      ],
      qualification : "BCA ,Bsc.IT ,Btech ,BCCA .",
      color : "#ccccff"
    },
    { sr : 5,
      title : "UI & UX DESIGNER",
      experience : "Fresher",
      skills : [
        "Figma",
        "Dowker",
        "Kubernetes",
        "Git",
        "Agaile Methodologies"
      ],
      qualification : "MTech, MS, BTech in Computer Science or Engineering",
      color : "#ffe6ff"
    }
  ];

  return (
    <section className="jobs-page">
      <div className="jobpage-hero-section" style={{ backgroundImage: `url(${Job})`}}>
        <h1 className="jobpage-hero-title">Join Our Team</h1>
        <div className="blue-line"></div>
        <p className="jobpage-hero-message">Be a part of our dynamic Team and Build your Career with us.</p>
      </div>
      <div className="job-list">
        {
          jobs.map((job)=>(
            <JobCard
            key={job.sr}
            title={job.title}
            experience={job.experience}
            skills={job.skills}
            qualification={job.qualification}
            color={job.color}
            />
          ))
        }
      </div>
    </section>
  );
}

export default Jobs;