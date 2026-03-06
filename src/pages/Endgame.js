import React from 'react';
import PageHero from '../components/PageHero';
import './Endgame.css';

const Endgame = () => {
  const endgameChallenges = [
    {
      id: "abyss",
      name: "Spiral Abyss",
      wallpaper: "/Assets/Spiral_Abyss_Wallpaper.png",
      description: "We will expertly clear Floors 9-12 for you starting at just $1.",
      icon: "🌀"
    },
    {
      id: "theater",
      name: "Imaginarium Theater",
      wallpaper: "/Assets/Imaginrium_Theater_Wallpaper.png",
      description: "Full completion of all acts with our elite roster for only $3.",
      icon: "🎭"
    },
    {
      id: "onslaught",
      name: "Stygian Onslaught",
      wallpaper: "/Assets/Stygian_Onslaught_wallpaper.png",
      description: "Maximum difficulty conquest of all bosses starting at $3.",
      icon: "⚔️"
    }
  ];

  return (
    <div className="endgame">
      <PageHero 
        title="Premium Endgame Services"
        subtitle="Let our elite team handle the toughest challenges for you."
      />
      
      <section className="endgame-content">
        <div className="container">
          <div className="endgame-parent-grid">
            {endgameChallenges.map((challenge) => (
              <div key={challenge.id} className="endgame-parent-card">
                <div className="card-background">
                  <img src={challenge.wallpaper} alt={challenge.name} />
                  <div className="card-overlay">
                    <div className="card-main-info">
                      <span className="card-icon">{challenge.icon}</span>
                      <h3>{challenge.name}</h3>
                    </div>
                    <div className="card-hover-info">
                      <p>{challenge.description}</p>
                      <button className="book-service-btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Endgame;
