import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Contact Form */}
        <form className="bg-white shadow-md rounded-lg p-6 w-full md:w-2/3">
          <label className="block mb-4">
            <span className="text-gray-700">Name</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring focus:ring-blue-200"
              placeholder="Your Name"
              required
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring focus:ring-blue-200"
              placeholder="Your Email"
              required
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700">Message</span>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring focus:ring-blue-200"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info & Social Links */}
        <div className="mt-8 md:mt-0 md:w-1/3 flex flex-col items-center md:items-start">
          <p className="text-gray-700 text-lg font-semibold">Email:</p>
          <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
            your.email@example.com
          </a>

          <p className="text-gray-700 text-lg font-semibold mt-4">Phone:</p>
          <p className="text-gray-600">+123 456 7890</p>

          <p className="text-gray-700 text-lg font-semibold mt-4">Follow Me:</p>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.svg" alt="GitHub" className="w-8" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8" />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" className="w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
