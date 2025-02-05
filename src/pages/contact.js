import React from "react";
import Layout from "../components/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p>Feel free to reach out through the form below or via my social media.</p>

      <form className="mt-6">
        <input type="text" placeholder="Your Name" className="block w-full p-2 border rounded mb-4" />
        <input type="email" placeholder="Your Email" className="block w-full p-2 border rounded mb-4" />
        <textarea placeholder="Your Message" className="block w-full p-2 border rounded mb-4"></textarea>
        <button className="bg-blue-500 text-white p-2 rounded">Send Message</button>
      </form>

      <div className="mt-6">
        <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
        <p>Follow me on: <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></p>
      </div>
    </Layout>
  );
};

export default ContactPage;
