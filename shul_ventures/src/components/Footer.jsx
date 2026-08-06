import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <section>
          <h2>Shul Ventures</h2>
          <p>
            Delivering professional services and practical solutions across
            multiple industries.
          </p>
        </section>

        <section>
          <h3>Our Credentials</h3>
          <p>CIN: U74999MH2018PTC308404</p>
          <p>PAN: ABACS2141Q</p>
          <p>TAN: NGPS17088B</p>
          <p>GST: 27ABACS2141Q1Z3</p>
        </section>

        <section>
          <h3>Contact</h3>
          <p>+91-9307376934</p>
          <p>career@shulventures.com</p>
          <p>Nagpur, Maharashtra, India</p>
        </section>
      </div>

      <div className="copyright">
        © 2026 Shul Ventures Pvt. Ltd. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;