import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";


import "./Contact.css";

function Contact() {

  const contactList = [
    {
      icon: <FiPhone />,
      type: "Phone",
      detail: "+91 7218316701",
    },
    {
      icon: <FiMail />,
      type: "Email",
      detail: "career@shulVentures.com",
    },
    {
      icon: <FiMapPin />,
      type: "Location",
      detail:
        "2nd Floor, Ganesh Apartment, Mankapur Ring Rd, Gumasta Layout, Tatya Tope Nagar, Pragap Nagar, Nagpur 440015",
    },
  ];

  return (
    <section className="contact-page">

      {/* =========================
          CONTACT INFORMATION
      ========================== */}

      <div className="contact-info-section">


        <h1 className="contact-detail-title">
          Get In Touch
        </h1>

        <div className="contact-blue-line"></div>

        <p className="contact-detail-message">
          We would love to hear from you. Reach out for any
          inquiries or support.
        </p>


        {/* Contact Details */}

        <div className="contact-details-list">

          {contactList.map((item) => (

            <div
              className="contact-detail"
              key={item.type}
            >

              {/* Icon */}

              <div className="contact-icon">
                {item.icon}
              </div>


              {/* Information */}

              <div className="contactpage-contact-info">

                <p className="contact-type">
                  {item.type}
                </p>

                {item.type === "Email" ? (

                  <a
                    href="mailto:career@shulVentures.com"
                    className="contact contact-email"
                  >
                    {item.detail}
                  </a>

                ) : (

                  <p className="contact">
                    {item.detail}
                  </p>

                )}

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* =========================
          QUICK INQUIRY FORM
      ========================== */}

     <div className="form-section">

        <span className="form-label">
          GET IN TOUCH
        </span>

        <h2>Quick Inquiry</h2>

        <form className="inquiry-form">

          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>


          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
            />
          </div>


          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>


          {/* Service */}
          <div className="form-group">
            <label htmlFor="service">
              Select Service
            </label>

            <select
              id="service"
              name="service"
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>

              <option value="solar">
                Solar Services
              </option>

              <option value="pest-control">
                Pest Control Services
              </option>

              <option value="electrical">
                Electrical Services
              </option>

              <option value="training">
                Training & Development
              </option>

              <option value="placement">
                Placement
              </option>
            </select>
          </div>


          {/* Address */}
          <div className="form-group full-width">
            <label htmlFor="address">
              Address
            </label>

            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
            />
          </div>


          {/* Message */}
          <div className="form-group full-width">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="5"
            ></textarea>
          </div>


          {/* Submit */}
          <div className="form-button-wrapper">
            <button type="submit" className="contact-submit-button">
              Send Inquiry
              <span> →</span>
            </button>
          </div>

        </form>

      </div>



      {/* =========================
          LOCATION / MAP
      ========================== */}

      <div className="location-map-section">

        <div className="location-map">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(
                 "2nd Floor, Ganesh Apartment, Mankapur Ring Rd, Gumasta Layout, Tatya Tope Nagar, Pratap Nagar, Nagpur, Maharashtra 440015"
                  )}&output=embed`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shul Ventures Pvt. Ltd. Office Location"
         ></iframe>
       </div>

      </div>

    </section>
  );
}

export default Contact;