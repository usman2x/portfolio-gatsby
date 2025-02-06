import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      
      <div className="row justify-content-center">
        {/* Contact Form */}
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
              <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="row text-center mt-5">
        <div className="col-md-4">
          <h5>Email</h5>
          <a href="mailto:hafizusman@gmail.com" className="text-decoration-none">hafizusman@gmail.com</a>
        </div>
        <div className="col-md-4">
          <h5>Phone</h5>
          <p>+123 456 7890</p>
        </div>
        <div className="col-md-4">
          <h5>Follow Me</h5>
          <div className="d-flex justify-content-center gap-3">
            <a href="https://github.com/yourgithub" target="_blank">
              <img src="/icons/github.svg" alt="GitHub" width="30" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank">
              <img src="/icons/linkedin.svg" alt="LinkedIn" width="30" />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank">
              <img src="/icons/twitter.svg" alt="Twitter" width="30" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
