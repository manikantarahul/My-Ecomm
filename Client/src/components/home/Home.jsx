import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to My-Ecomm</h1>
          <p>Your one-stop shop for everything awesome</p>
          <button className="cta-btn">Shop Now</button>
        </div>
        <div className="hero-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKo2hdasSNC_JJ-r9LzxlVYPOXOoTotzROA&s" alt="Shopping" />
        </div>
      </section>

      <section className="about">
        <h2>Why My-Ecomm?</h2>
        <p>
          My-Ecomm brings you the best deals, latest trends, and a seamless shopping experience.
          Whether you're browsing on your phone or your laptop, we make sure your favorite items are just a click away.
        </p>
      </section>
      
      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>Subscribe to get the latest offers and updates.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
