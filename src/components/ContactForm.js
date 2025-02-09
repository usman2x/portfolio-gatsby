import React from "react";

const ContactForm = () => {
  return (
    <div className="col-md-8">
      <div className="card shadow-sm p-4">
        <form action="https://formsubmit.co/6551e8a48e219af93478c4fd931e9449" method="POST">
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input 
              type="text" 
              name="name" 
              className="form-control" 
              placeholder="Enter your name" 
              required 
            />
          </div>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              name="email" 
              className="form-control" 
              placeholder="Enter your email" 
              required 
            />
          </div>
          {/* Message */}
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea 
              name="message" 
              className="form-control" 
              rows="4" 
              placeholder="Write your message..." 
              required
            ></textarea>
          </div>
          {/* Hidden Input for Redirect */}
          <input type="hidden" name="_next" value="http://localhost:8000/thank-you" />
          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;