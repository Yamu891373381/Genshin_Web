import React from 'react';
import PageHero from '../components/PageHero';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <PageHero 
        title="About Our Elite Team"
        subtitle="The architects behind Teyvat's most reliable completion service."
      />
      
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-card">
              <h2>Our Story</h2>
              <p>
                Founded by veteran Travelers with thousands of hours in Teyvat, our mission is to help 
                fellow adventurers overcome the most daunting challenges. We provide a bridge between 
                casual exploration and expert-level completion.
              </p>
              <p>
                Whether it's the lightless depths of Enkanomiya or the fire-tempered peaks of Natlan, 
                our team has been there. We bring that expertise to you, ensuring yours is a journey 
                of enjoyment, not frustration.
              </p>
            </div>
            
            <div className="about-card">
              <h2>Our Values</h2>
              <ul className="values-list">
                <li><span>💎</span> <strong>Reliability:</strong> We treat every account as our own.</li>
                <li><span>🛡️</span> <strong>Security:</strong> Safe and professional service protocols.</li>
                <li><span>⚡</span> <strong>Efficiency:</strong> Rapid completion of time-sensitive tasks.</li>
                <li><span>🌟</span> <strong>Quality:</strong> Professional builds and optimized strategies.</li>
              </ul>
            </div>
          </div>
          
          <div className="team-section">
            <h2 className="section-title">The Masterminds</h2>
            <div className="team-grid">
              <a href="https://discord.gg/TmS3Bu7h" target="_blank" rel="noopener noreferrer" className="team-member-link">
                <div className="team-member-card">
                  <div className="member-avatar">
                    <img src="/Assets/Yamu(Scholare)_dp.jpg" alt="Yamu" />
                  </div>
                  <h3>Yamu</h3>
                  <p>Lead Scholar & Strategist</p>
                  <div className="member-tag">Scholar Expert</div>
                </div>
              </a>
              <a href="https://discord.gg/dv278mRWp" target="_blank" rel="noopener noreferrer" className="team-member-link">
                <div className="team-member-card">
                  <div className="member-avatar">
                    <img src="/Assets/Aryan(Expert_adventurer)_dp.jpg" alt="Aryan" />
                  </div>
                  <h3>Aryan</h3>
                  <p>Expert Adventurer & Combat Lead</p>
                  <div className="member-tag">Combat Specialist</div>
                </div>
              </a>
              <a href="https://discord.gg/DZxvWfCa" target="_blank" rel="noopener noreferrer" className="team-member-link">
                <div className="team-member-card">
                  <div className="member-avatar">
                    <img src="/Assets/Cameo(Explorer)_dp.png" alt="Cameo" />
                  </div>
                  <h3>Cameo</h3>
                  <p>World Explorer & Navigation Elite</p>
                  <div className="member-tag">Explorer Specialist</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
