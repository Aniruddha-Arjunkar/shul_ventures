import X from "../assets/images/x.png";
import Facebook from "../assets/images/facebook.png";
import LinkedIn from "../assets/images/linkedin.png";
import "./TopBar.css";
function TopBar() {
  return (
    <div className="top-bar">
      <div className="social-links">
        <a href="" target="_blank" rel="noopener noreferrer">
        <img src={X} alt="X"/>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={Facebook} alt="Facebook"/>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt="LinkedIn"/>
        </a>
      </div>
      <div className="contact-info">
        <a href="tel:+919307376934">📞+91-9307376934</a>
        <a href="mailto:career@shulventures.com">
          ✉️career@shulventures.com
        </a>
      </div>
    </div>
  );
}

export default TopBar;