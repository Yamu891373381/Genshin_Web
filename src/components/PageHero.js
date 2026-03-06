import React from 'react';
import './PageHero.css';

const PageHero = ({ title, subtitle, children }) => {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="hero-content">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
          {children && <div className="hero-extras">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
