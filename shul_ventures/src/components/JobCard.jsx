import "./JobCard.css";
function JobCard({title ,experience ,skills , qualification , color}){
    return (
        <article className="job_card">
            <div className="job-details" style={{"--card-color": color}}>
              <h3>{title}</h3>
              <p><b>Experience :</b> {experience}</p>
              <p>{qualification}</p>
              <div className="skills_section">
                  {
                     skills.map((skill)=> (
                        <span className="skill" key={skill}>
                            {skill}
                        </span>
                     ))
                  }
              </div>
            </div>
            <div className="job-footer">
                <span>Apply Now</span>
                <button>→</button>
            </div>
        </article>
    )
}
export default JobCard;