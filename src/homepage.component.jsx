import React from "react";

import "./homepage.style.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Hats</h1>
          <span className="subtitle">SHOW NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Boots</h1>
          <span className="subtitle">SHOW NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Coats</h1>
          <span className="subtitle">SHOW NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Shirts</h1>
          <span className="subtitle">SHOW NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Jeans</h1>
          <span className="subtitle">SHOW NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
