import { useState } from "react";

import "./ServiceInquiryForm.css";

function ServiceInquiryForm({ service }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });


  /*
    Handle input changes
  */
  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };


  /*
    Handle form submit
  */
  const handleSubmit = (event) => {

    event.preventDefault();

    console.log({
      service: service.id,
      ...formData,
    });

    alert(
      "Thank you! Your inquiry has been submitted."
    );

    /*
      Clear form
    */
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    });
  };


  return (
    <form
      className="service-inquiry-form"
      onSubmit={handleSubmit}
    >

      {/* SERVICE */}

      <div className="form-input-group">

        <label>
          Service
        </label>

        <input
          type="text"
          value={service.title}
          readOnly
        />

      </div>


      {/* NAME */}

      <div className="form-input-group">

        <label>
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

      </div>


      {/* EMAIL */}

      <div className="form-input-group">

        <label>
          Email Address
        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

      </div>


      {/* PHONE */}

      <div className="form-input-group">

        <label>
          Phone Number
        </label>

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

      </div>


      {/* CITY */}

      <div className="form-input-group">

        <label>
          City
        </label>

        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your city"
        />

      </div>


      {/* MESSAGE */}

      <div className="form-input-group">

        <label>
          Message
        </label>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your requirement"
          rows="5"
        />

      </div>


      {/* SUBMIT */}

      <button
        type="submit"
        className="service-submit-button"
      >
        Submit Inquiry
      </button>

    </form>
  );
}

export default ServiceInquiryForm;