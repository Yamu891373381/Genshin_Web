import React from 'react';
import PageHero from '../components/PageHero';
import './Dailies.css';

const Dailies = () => {
  const dailyPackages = [
    {
      id: "daily-single",
      name: "Daily Commission",
      duration: "1 Day",
      price: "$0.5",
      description: "Quick completion of all 4 commissions plus bonus rewards.",
      icon: "☀️",
      image: "/Assets/Inazuma_wallpaper_1.png"
    },
    {
      id: "weekly-pack",
      name: "Weekly Grind",
      duration: "7 Days",
      price: "$2",
      description: "Full week of commissions and resin management.",
      icon: "📅",
      image: "/Assets/Liyue_Wallpaper.png"
    },
    {
      id: "monthly-pack",
      name: "Monthly Loyalty",
      duration: "30 Days",
      price: "$6",
      description: "Complete hands-off monthly commission management.",
      icon: "💎",
      image: "/Assets/Sumeru_Wallpaper.png"
    },
    {
      id: "ultimate-pack",
      name: "Zenith Bundle",
      duration: "30 Days + Bosses",
      price: "$8",
      description: "Monthly commissions + 3 Weekly Bosses of your choice every week.",
      icon: "👑",
      image: "/Assets/DragonSpine_wallpaper_1.png"
    }
  ];

  return (
    <div className="dailies-page">
      <PageHero 
        title="Dailies & Maintenance"
        subtitle="Never miss a Primogem again. We handle the grind, you enjoy the game."
      />
      
      <section className="dailies-content">
        <div className="container">
          <div className="dailies-grid">
            {dailyPackages.map((pkg) => (
              <div key={pkg.id} className="daily-package-card">
                <div className="pkg-image">
                  <img src={pkg.image} alt={pkg.name} />
                  <div className="pkg-duration-badge">{pkg.duration}</div>
                </div>
                <div className="pkg-overlay">
                  <div className="pkg-main-info">
                    <span className="pkg-icon">{pkg.icon}</span>
                    <h3>{pkg.name}</h3>
                  </div>
                  <div className="pkg-hover-info">
                    <p>{pkg.description}</p>
                    <div className="pkg-price">{pkg.price}</div>
                    <button className="order-now-btn">Order Package</button>
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

export default Dailies;
