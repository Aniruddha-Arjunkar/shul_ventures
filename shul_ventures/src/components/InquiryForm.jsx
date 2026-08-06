function InquiryForm() {
  function handleSubmit(event) {
    event.preventDefault();

    console.log("Inquiry submitted");
  }

  return (
    <section className="inquiry-section">
      <div className="container">
        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>Quick Inquiry</h2>
        </div>

        <form
          className="inquiry-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>

            <input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>

            <input
              id="address"
              type="text"
              placeholder="Enter your address"
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="service">Select Service</label>

            <select id="service">
              <option value="">Select a service</option>
              <option value="training">
                Training & Development
              </option>
              <option value="pest">
                Pest Control
              </option>
              <option value="electrical">
                Electrical Services
              </option>
              <option value="solar">
                Solar Services
              </option>
              <option value="placement">
                Placement
              </option>
            </select>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              rows="5"
              placeholder="Enter your message"
            />
          </div>

          <div className="full-width">
            <button
              type="submit"
              className="primary-button"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default InquiryForm;
