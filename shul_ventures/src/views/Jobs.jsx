import Job from "../assets/images/job_page.jpg";
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
      <div className="job-banner">
        <img src={ Job } alt="Job Image"/>
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