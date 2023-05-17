import React from "react";
import Navbar from "../Component/Navbar";
import Social from "../Component/Social";
import Footer from "../Component/Footer";
// import Signup from '../Component/Signup'
import HeroBG from "../Images/Sprinkle.svg";
import Learning from "../Images/Learning.svg";
import Challenge from "../Images/Challenge.svg";
import Shared from "../Images/Shared.svg";
import Review from "../Images/Review.svg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Social />
      <main>
        <section className="hero">
          <img src={HeroBG} alt="" />
          <div className="mask"></div>
          <div className="div">
            <h1>
              <span className="herobrand">CleverCode</span> is the Best Platform
              to
            </h1>
            <h1>Build something Great.</h1>
            <p>CleverCode is the Best Platform for Developers,</p>
            <p>Build , Test and Deploy.</p>
            <a href="#link" className="btn p-bg">
              Watch Video
            </a>
          </div>
        </section>

        <section className="Feature" id="Feature">
          <h1 className="SectionHeading">
            Power up your <span className="FeatureBrand">Coding Skills</span>.
          </h1>
          <div className="FeatureSection">
            <div className="FeatureCard">
              <div className="CardImg">
                <img src={Learning} alt="" />
              </div>
              <div className="CardText">
                <h1>Project-Based Learning</h1>
                <p>
                  Develop practical coding skills with hands-on experience in
                  real-world projects.
                </p>
              </div>
            </div>
            <div className="FeatureCard">
              <div className="CardImg">
                <img src={Challenge} alt="" />
              </div>
              <div className="CardText">
                <h1>Coding Challenges</h1>
                <p>
                  Challenge yourself with fun and engaging coding exercises that
                  apply real-world scenarios.
                </p>
              </div>
            </div>
            <div className="FeatureCard">
              <div className="CardImg">
                <img src={Shared} alt="" />
              </div>
              <div className="CardText">
                <h1>Code Sharing</h1>
                <p>
                  Collaborate with other developers to share code snippets,
                  projects, and ideas in a supportive community.
                </p>
              </div>
            </div>
            <div className="FeatureCard">
              <div className="CardImg">
                <img src={Review} alt="" />
              </div>
              <div className="CardText">
                <h1>Code Review</h1>
                <p>
                  Improve your skills with feedback and suggestions from
                  experienced developers through our code review process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="LearningPath" id="LearningPath"></section>
      </main>

      {/* <Signup /> */}
      <Footer />
    </div>
  );
};

export default Home;
