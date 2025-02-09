// src/pages/thank-you.js
import React from "react";
import Layout from "../components/Layout";

const ThankYouPage = () => {
  return (
    <Layout>
      <div className="thank-you-page">
        <h1>Thank You!</h1>
        <p>I appreciate you reaching out. I'll get back to you as soon as possible.</p>
        <a href="/" className="btn">Back to Home</a>
      </div>
    </Layout>
  );
};

export default ThankYouPage;