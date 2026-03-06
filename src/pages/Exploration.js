import React from 'react';
import PageHero from '../components/PageHero';
import './Exploration.css';

const Exploration = () => {
  const regions = [
    {
      id: "mondstadt",
      name: "Mondstadt",
      version: "1.0",
      wallpaper: "/Assets/Mondstadt_wallpaper_1.png",
      emoji: "🕊️",
      description: "The Nation of Freedom and the City of Wind.",
      pricing: [
        { label: "Full Completion", price: "$8" }
      ]
    },
    {
      id: "liyue",
      name: "Liyue",
      version: "1.0",
      wallpaper: "/Assets/Liyue_Wallpaper.png",
      emoji: "⚖️",
      description: "The Nation of Contracts and the source of Mora.",
      pricing: [
        { label: "Full Exploration", price: "$7" },
        { label: "Note", price: "No WQ included" }
      ]
    },
    {
      id: "chenyu-vale",
      name: "Chenyu Vale",
      version: "4.4",
      wallpaper: "/Assets/Liyue_Wallpaper.png",
      emoji: "🍵",
      description: "Primal tea mountains of northern Liyue.",
      pricing: [
        { label: "Full Completion", price: "$13" }
      ]
    },
    {
      id: "dragonspine",
      name: "Dragonspine",
      version: "1.2",
      wallpaper: "/Assets/DragonSpine_wallpaper_1.png",
      emoji: "❄️",
      description: "An ancient, frozen mountain reaching for the stars.",
      pricing: [
        { label: "Base Exploration", price: "$10" },
        { label: "World Quests", price: "$2" },
        { label: "Hidden Layers", price: "$2" },
        { label: "Full Bundle", price: "$14" }
      ]
    },
    {
      id: "inazuma",
      name: "Inazuma",
      version: "2.0",
      wallpaper: "/Assets/Inazuma_wallpaper_1.png",
      emoji: "⚡",
      description: "The Nation of Eternity, an archipelago across the sea.",
      pricing: [
        { label: "3 Main Islands", price: "$7" },
        { label: "Tsurumi Island", price: "$5" },
        { label: "Watatsumi Island", price: "$4" },
        { label: "Seirai Island", price: "$4" }
      ]
    },
    {
      id: "enkanomiya",
      name: "Enkanomiya",
      version: "2.4",
      wallpaper: "/Assets/Enkanomiya_wallpaper.png",
      emoji: "🌗",
      description: "The deep, lightless underwater depths of the abyss.",
      pricing: [
        { label: "Full Completion", price: "$7" }
      ]
    },
    {
      id: "chasm",
      name: "The Chasm",
      version: "2.6",
      wallpaper: "/Assets/Chasm_Wallpaper.png",
      emoji: "💎",
      description: "A dual-layered landscape of mining peaks and dark depths.",
      pricing: [
        { label: "Surface + Underground", price: "$7" }
      ]
    },
    {
      id: "sumeru",
      name: "Sumeru",
      version: "3.0",
      wallpaper: "/Assets/Sumeru_Wallpaper.png",
      emoji: "🌿",
      description: "The Nation of Wisdom, from rainforests to burning sands.",
      pricing: [
        { label: "Rainforest (Full)", price: "$14" },
        { label: "Desert (Full)", price: "$16" }
      ]
    },
    {
      id: "fontaine",
      name: "Fontaine",
      version: "4.0",
      wallpaper: "/Assets/Fontaine_wallpaper_1.png",
      emoji: "💧",
      description: "The Nation of Justice and the source of all waters.",
      pricing: [
        { label: "Arle Mandatory", price: "$4" },
        { label: "3 Regions (Compass)", price: "$6" },
        { label: "3 Regions (No Compass)", price: "$8" }
      ]
    },
    {
      id: "natlan",
      name: "Natlan",
      version: "5.0",
      wallpaper: "/Assets/Natlan_wallpaper_1.png",
      emoji: "🔥",
      description: "The Nation of War, dragon-fire and spirit.",
      pricing: [
        { label: "Varesa Pack", price: "$4" },
        { label: "Chasca Pack", price: "$4" },
        { label: "Citlali / Mulani", price: "$3 / $2" },
        { label: "Knicch (1 WQ)", price: "$2" },
        { label: "Xilonen / Benethh", price: "$4 / $4" },
        { label: "Mauvika Island", price: "Free w/ Full" }
      ]
    },
    {
      id: "nod-krai",
      name: "Nod-Krai",
      version: "6.0",
      wallpaper: "/Assets/Nod-Krai_wallpaper_1.png",
      emoji: "🏔️",
      description: "Mysterious northern expanse of frost and legend.",
      pricing: [
        { label: "Lauma / Nicole", price: "$2 ea" },
        { label: "Aino / Varka", price: "$2 ea" },
        { label: "Flins / Illuga", price: "$4 ea" }
      ]
    }
  ];

  return (
    <div className="exploration">
      <PageHero 
        title="Regional Exploration"
        subtitle="Discover Teyvat with our expert 100% completion services."
      />
      
      <section className="exploration-content">
        <div className="container">
          <div className="flip-regions-grid">
            {regions.map((region) => (
              <div key={region.id} className="flip-card">
                <div className="flip-card-inner">
                  {/* Card Front */}
                  <div className="flip-card-front">
                    <div className="card-image-box">
                      <img src={region.wallpaper} alt={region.name} />
                      <div className="v-badge">{region.version}</div>
                    </div>
                    <div className="card-info-box">
                      <h3>{region.emoji} {region.name}</h3>
                      <p>{region.description}</p>
                      <div className="flip-hint-text">Hover for details ↺</div>
                    </div>
                  </div>
                  
                  {/* Card Back */}
                  <div className="flip-card-back">
                    <div className="back-header">
                      <h3>{region.emoji} {region.name}</h3>
                      <p>Service Details & Pricing</p>
                    </div>
                    <div className="pricing-grid">
                      {region.pricing.map((p, i) => (
                        <div key={i} className="pricing-row">
                          <span className="p-label">{p.label}</span>
                          <span className="p-value">{p.price}</span>
                        </div>
                      ))}
                    </div>
                    <a href="https://discord.gg/dv278mRWp" target="_blank" rel="noopener noreferrer" className="card-cta">
                      Contact on Discord
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="exploration-footer">
            <div className="guide-card-premium">
              <h2>Expert Completion Benefits</h2>
              <div className="benefits-grid">
                <div className="benefit">
                  <span className="b-icon">🎯</span>
                  <h4>100% Guaranteed</h4>
                  <p>Every single chest, oculi, and world quest completed.</p>
                </div>
                <div className="benefit">
                  <span className="b-icon">🚀</span>
                  <h4>Bypass the Grind</h4>
                  <p>Save hundreds of hours. We do the work, you get the rewards.</p>
                </div>
                <div className="benefit">
                  <span className="b-icon">🔐</span>
                  <h4>Account Safety</h4>
                  <p>Hand-farmed only. Secure and professional handling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exploration;
