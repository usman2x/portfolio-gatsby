import React from "react";

const About = () => {
  return (
    <section id="about" className="container py-12">
      <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full shadow-lg mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <p className="text-gray-700 leading-relaxed">
            Hi, I'm a passionate developer with experience in front-end and back-end technologies. 
            I love building clean, user-friendly applications and continuously learning new technologies.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            In my free time, I contribute to open-source projects and write technical blogs.
          </p>
        </div>
      </div>
      {/* Optional Video */}
      <div className="mt-6 text-center">
        <iframe
          className="w-full md:w-3/4 h-64 mx-auto rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/sample-video"
          title="Intro Video"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default About;
