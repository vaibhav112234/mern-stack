// src/ServicesPage.js
import React from "react";


const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">Our Services</h1>
      
      <div className="service-item">
        <h2 className="service-title">Personalized Netflix Recommendations</h2>
        <p className="service-description">
          Our platform provides you with personalized Netflix series recommendations based on your interests. We use an advanced algorithm
          to analyze your viewing habits and suggest the best shows for you to enjoy.
        </p>
      </div>

      <div className="service-item">
        <h2 className="service-title">Trending Series Updates</h2>
        <p className="service-description">
          Stay up to date with the latest trending Netflix series. Our platform automatically updates the list of top series so that
          you never miss out on the most popular shows on Netflix.
        </p>
      </div>

      <div className="service-item">
        <h2 className="service-title">Binge-Worthy Show Guides</h2>
        <p className="service-description">
          Discover binge-worthy shows through our detailed guides, reviews, and recommendations. We help you find the best shows
          that match your interests and are perfect for your next binge-watch session.
        </p>
      </div>

      <div className="service-item">
        <h2 className="service-title">Community Reviews</h2>
        <p className="service-description">
          Our community of Netflix lovers shares their thoughts, ratings, and reviews on the latest series. Check out user reviews
          and share your own opinions with fellow Netflix fans.
        </p>
      </div>

      <div className="service-item">
        <h2 className="service-title">Exclusive Offers and Deals</h2>
        <p className="service-description">
          Get exclusive access to special offers and deals for Netflix subscriptions or related services. We provide you with
          discounts and special promotions to enhance your Netflix experience.
        </p>
      </div>
    </div>
  );
};

export default Services;
