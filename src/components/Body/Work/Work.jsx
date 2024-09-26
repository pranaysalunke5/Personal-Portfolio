import React from 'react';
import './Work.css'; // Import your CSS file for styling
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles

const Work = () => {
  return (
    <div className="work-carousel-container">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
      >
        <div className="work-card bg-black">
          <h2 className="work-title">Project 1</h2>
          <p className="work-description">
            Brief description of the project. Technologies used: React, Node.js.
          </p>
        </div>
        <div className="work-card bg-black">
          <h2 className="work-title">Project 2</h2>
          <p className="work-description">
            Brief description of the project. Technologies used: Angular, Express.
          </p>
        </div>
        <div className="work-card bg-black">
          <h2 className="work-title">Project 3</h2>
          <p className="work-description">
            Brief description of the project. Technologies used: Vue.js, MongoDB.
          </p>
        </div>
        <div className="work-card bg-black">
          <h2 className="work-title">Project 4</h2>
          <p className="work-description">
            Brief description of the project. Technologies used: React Native, Firebase.
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Work;
