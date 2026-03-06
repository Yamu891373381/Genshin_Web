import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  // Exploration Regions - "Expo Cards"
  const explorationRegions = [
    { id: "mondstadt", name: "Mondstadt", wallpaper: "/Assets/Mondstadt_wallpaper_1.png", emoji: "🕊️" },
    { id: "liyue", name: "Liyue", wallpaper: "/Assets/Liyue_Wallpaper.png", emoji: "⚖️" },
    { id: "dragonspine", name: "Dragonspine", wallpaper: "/Assets/DragonSpine_wallpaper_1.png", emoji: "❄️" },
    { id: "inazuma", name: "Inazuma", wallpaper: "/Assets/Inazuma_wallpaper_1.png", emoji: "⚡" },
    { id: "enkanomiya", name: "Enkanomiya", wallpaper: "/Assets/Enkanomiya_wallpaper.png", emoji: "🌗" },
    { id: "chasm", name: "The Chasm", wallpaper: "/Assets/Chasm_Wallpaper.png", emoji: "💎" },
    { id: "sumeru", name: "Sumeru", wallpaper: "/Assets/Sumeru_Wallpaper.png", emoji: "🌿" },
    { id: "fontaine", name: "Fontaine", wallpaper: "/Assets/Fontaine_wallpaper_1.png", emoji: "💧" },
    { id: "sea-of-bygone-eras", name: "Sea of Bygone Eras", wallpaper: "/Assets/Sea_off_Bygone_eras_wallpaper.png", emoji: "🔱" },
    { id: "natlan", name: "Natlan", wallpaper: "/Assets/Natlan_wallpaper_1.png", emoji: "🔥" },
    { id: "nod-krai", name: "Nod-Krai", wallpaper: "/Assets/Nod-Krai_wallpaper_1.png", emoji: "🏔️" }
  ];

  // Site Sections corresponding to Navbar links
  const siteSections = [
    {
      title: "Endgame",
      description: "Master the Abyss and Theater challenges.",
      path: "/endgame",
      image: "/Assets/Sea_off_Bygone_eras_wallpaper.png"
    },
    {
      title: "Quest",
      description: "World and Side quest completion guides.",
      path: "/quest",
      image: "/Assets/Sumeru_Wallpaper.png"
    },
    {
      title: "Dailies",
      description: "Daily maintenance and maintenance packs.",
      path: "/dailies",
      image: "/Assets/Nod-Krai_wallpaper_1.png"
    },
    {
      title: "About Us",
      description: "Learn more about our elite team.",
      path: "/about",
      image: "/Assets/Mondstadt_wallpaper_1.png"
    }
  ];

  const handleNavigation = (path, state = {}) => {
    navigate(path, { state });
  };

  return (
    <div className="home">
      <PageHero 
        title="Explore the World of Teyvat"
        subtitle="Your ultimate companion for every adventure across the seven nations."
      >
        <button className="cta-button" onClick={() => handleNavigation('/exploration')}>Start Exploring</button>
      </PageHero>

      <section className="exploration-regions">
        <div className="container">
          <h2 className="section-title">Regional Exploration</h2>
          <div className="regions-grid">
            {explorationRegions.map((region, index) => (
              <div 
                key={index} 
                className="region-card"
                onClick={() => handleNavigation('/exploration', { regionId: region.id })}
              >
                <div className="region-wallpaper">
                  <img src={region.wallpaper} alt={region.name} />
                  <div className="region-overlay">
                    <h3 className="overlay-name">{region.emoji} {region.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="features-grid">
            {siteSections.map((section, index) => (
              <div 
                key={index} 
                className="feature-card-new"
                onClick={() => handleNavigation(section.path)}
              >
                <div className="feature-bg">
                  <img src={section.image} alt={section.title} />
                  <div className="feature-overlay">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                    <span className="explore-btn">Explore →</span>
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

export default Home;
