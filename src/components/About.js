import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-heading">About CommuSpace</h1>
      </div>
      <div className="about-content">
        <p className="about-description">
          CommuSpace is a chat application designed to help you connect with others in a safe and inclusive environment. Our platform offers a range of features, including group chats, direct messaging, and customizable profiles.
        </p>
        <h2 className="about-subheading">Our Mission</h2>
        <p className="about-description">
          At CommuSpace, we believe that everyone deserves to have a space where they can communicate with others free from harassment or discrimination. Our goal is to create a platform that promotes open and respectful dialogue, and fosters a sense of community among our users.
        </p>
        <h2 className="about-subheading">Meet the Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Profile" />
            <h3 className="team-member-name">Abhishek P</h3>
          </div>
      
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Profile" />
            <h3 className="team-member-name">Mariya Benny</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
