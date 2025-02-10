import React from "react";
import Layout from "../components/Layout";
import contactData from "../content/misc/contact-data.json";

const ThankYouPage = () => {
  return (
    <Layout>
      <div className="thank-you-page">
        <h1>Thank You!</h1>
        <p>I appreciate you reaching out. I'll get back to you as soon as possible.</p>
        <a href={contactData["path-prefix"]} className="btn">Back to Home</a>
      </div>
    </Layout>
  );
};

export default ThankYouPage;