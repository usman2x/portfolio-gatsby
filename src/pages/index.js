import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Full-Stack Engineer for Scalable Product Delivery"
        description="I help teams design and ship reliable full-stack, data, and AI-enabled software with measurable business outcomes."
        pathname="/"
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
