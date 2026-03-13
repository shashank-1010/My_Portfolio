import "./styles/Career.css";

const Career = () => {
return (
  <div className="career-section section-container">
    <div className="career-container">
      <h2>
        My career <span>&</span>
        <br /> experience
      </h2>

      <div className="career-info">
        <div className="career-timeline">
          <div className="career-dot"></div>
        </div>

        {/* Tiffo */}
        <div className="career-info-box">
          <div className="career-info-in">
            <div className="career-role">
              <h4>Founder & CEO</h4>
              <h5>Tiffo</h5>
            </div>
            <h3>2025</h3>
          </div>
          <p>
            Founded Tiffo, a tiffin delivery platform connecting users with
            homemade food providers. Built the complete web application using
            the MERN stack and managed both product development and technical
            implementation.
          </p>
        </div>

        {/* IEEE */}
        <div className="career-info-box">
          <div className="career-info-in">
            <div className="career-role">
              <h4>Tech Co-Lead</h4>
              <h5>IEEE Student Branch</h5>
            </div>
            <h3>2026</h3>
          </div>
          <p>
            Serving as Technical Co-Lead where I contribute to organizing
            technical events, guiding students in programming, and promoting
            innovation in software development and emerging technologies.
          </p>
        </div>

        {/* CU Coding Club */}
        <div className="career-info-box">
          <div className="career-info-in">
            <div className="career-role">
              <h4>Technical Head</h4>
              <h5>CU Coding Club</h5>
            </div>
            <h3>2026</h3>
          </div>
          <p>
            Leading technical activities of the coding club, mentoring students
            in web development and Data Structures & Algorithms, and organizing
            coding sessions, workshops, and development projects.
          </p>
        </div>

      </div>
    </div>
  </div>
);
};

export default Career;
