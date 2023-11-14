import React from 'react';

function AboutProject() {
    return (
      <section className="about-project" id="about-project-section">
        <h2 className="about-project__section-name">About</h2>
        <div className="about-project__grid-description">
            <h3 className="about-project__text">The project was devided into 5 steps</h3>
            <p className="about-project__description">Planning, Backend development, Frontend development, Combining Backend and Frontend and Final alterations.</p>
            
            <h3 className="about-project__text about-project__text_with-margin">Duration of the project: 5 weeks</h3>
            <p className="about-project__description">Each step had its deadline to be met to proceed with the project</p>
        </div>
        <div className="about-project__grid-timeline">
            <p className="about-project__duration">1 week</p>
            <p className="about-project__course-name">Back-end</p>
            
            <p className="about-project__duration">4 weeks</p>
            <p className="about-project__course-name">Front-end</p>
        </div>
      </section>
    );
}
  
export default AboutProject;