import React from "react";
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import HeroBG from '../Images/Sprinkle.svg'


const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section className="hero">
          <img src={HeroBG} alt="" />
          <div>
          <h1> <span className="herobrand">CleverCode</span> is the Best Platform to </h1>
          <h1>Build something Great.</h1>
          <p>CleverCode is the Best Platform for Developers,</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <a href="#link" className="btn p-bg">Watch Video</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
