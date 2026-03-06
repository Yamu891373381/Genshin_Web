import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import './Quest.css';

const Quest = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    {
      id: "mondstadt",
      name: "Mondstadt",
      wallpaper: "/Assets/Mondstadt_wallpaper_1.png",
      color: "#4CAF50",
      emoji: "🕊️",
      description: "Side quests and world quests throughout the land of freedom.",
      quests: [
        { name: "In the Aftermath", duration: "1.5h", items: "Venture Rank 25", price: "$5" },
        { name: "Mondstadt's Gourmet", duration: "45m", items: "None", price: "$2" },
        { name: "The Art of Cooking", duration: "30m", items: "Ingredients", price: "$1" },
        { name: "Time and Wind", duration: "2h", items: "Level 40+", price: "$8" }
      ]
    },
    {
      id: "liyue",
      name: "Liyue",
      wallpaper: "/Assets/Liyue_Wallpaper.png",
      color: "#FF9800",
      emoji: "⚖️",
      description: "Ancient scripts and hidden secrets in the geo-nation.",
      quests: [
        { name: "Nine Pillars of Peace", duration: "4h", items: "All Geoculus", price: "$15" },
        { name: "The Chi of Yore", duration: "3h", items: "High DPS", price: "$12" },
        { name: "Treasure Lost, Treasure Found", duration: "2h", items: "None", price: "$8" },
        { name: "And This Treasure Goes To...", duration: "1h", items: "None", price: "$4" }
      ]
    },
    {
      id: "dragonspine",
      name: "Dragonspine",
      wallpaper: "/Assets/DragonSpine_wallpaper_1.png",
      color: "#00BCD4",
      emoji: "❄️",
      description: "Frosty missions in the eternal snow of the mountain.",
      quests: [
        { name: "In the Mountains", duration: "3.5h", items: "Pyro Chars", price: "$15" },
        { name: "The Festering Fang", duration: "2h", items: "Dragon Ore", price: "$10" },
        { name: "Snow-Bound Town", duration: "1h", items: "None", price: "$5" }
      ]
    },
    {
      id: "inazuma",
      name: "Inazuma",
      wallpaper: "/Assets/Inazuma_wallpaper_1.png",
      color: "#9C27B0",
      emoji: "⚡",
      description: "Island-specific mysteries and samurai legends.",
      quests: [
        { name: "Sacred Sakura Cleansing", duration: "6h", items: "Electrogranum", price: "$25" },
        { name: "Tatara Tales", duration: "7 Days (IRL)", items: "Patience", price: "$30" },
        { name: "Orobashi's Legacy", duration: "4h", items: "None", price: "$20" }
      ]
    },
    {
      id: "enkanomiya",
      name: "Enkanomiya",
      wallpaper: "/Assets/Enkanomiya_wallpaper.png",
      color: "#3F51B5",
      emoji: "🌗",
      description: "Abyssal secrets within the lightless depths.",
      quests: [
        { name: "The Subterranean Trials", duration: "5h", items: "Key Sigils", price: "$25" },
        { name: "Hyperion's Dirge", duration: "3h", items: "Sigils", price: "$15" }
      ]
    },
    {
      id: "chasm",
      name: "The Chasm",
      wallpaper: "/Assets/Chasm_Wallpaper.png",
      color: "#795548",
      emoji: "💎",
      description: "Mining investigations and underground world quests.",
      quests: [
        { name: "Chasm Spelunkers", duration: "4h", items: "Lumenstone", price: "$20" },
        { name: "The Heavenly Stone's Debris", duration: "3h", items: "None", price: "$15" }
      ]
    },
    {
      id: "sumeru",
      name: "Sumeru",
      wallpaper: "/Assets/Sumeru_Wallpaper.png",
      color: "#8BC34A",
      emoji: "🌿",
      description: "Rainforest and desert chronicles of wisdom.",
      quests: [
        { name: "Aranyaka Series", duration: "12h", items: "Extreme Patience", price: "$50" },
        { name: "Golden Slumber", duration: "5h", items: "None", price: "$25" }
      ]
    },
    {
      id: "fontaine",
      name: "Fontaine",
      wallpaper: "/Assets/Fontaine_wallpaper_1.png",
      color: "#2196F3",
      emoji: "💧",
      description: "Justice-themed investigations and underwater expeditions.",
      quests: [
        { name: "Ancient Colors", duration: "4h", items: "None", price: "$20" },
        { name: "Ann of the Narzissenkreuz", duration: "5h", items: "None", price: "$25" }
      ]
    },
    {
      id: "sea-of-bygone-eras",
      name: "Sea of Bygone Eras",
      wallpaper: "/Assets/Sea_off_Bygone_eras_wallpaper.png",
      color: "#009688",
      emoji: "🔱",
      description: "Sunken chronicles and Remurian legends.",
      quests: [
        { name: "The Last Day of Remuria", duration: "3h", items: "None", price: "$15" },
        { name: "Gradus ad Capitolium", duration: "2h", items: "None", price: "$10" }
      ]
    },
    {
      id: "natlan",
      name: "Natlan",
      wallpaper: "/Assets/Natlan_wallpaper_1.png",
      color: "#FF5722",
      emoji: "🔥",
      description: "Trial by fire and tribal chronicles.",
      quests: [
        { name: "Tale of the Brave", duration: "4h", items: "None", price: "$20" },
        { name: "Spirit of the Flame", duration: "3h", items: "None", price: "$15" }
      ]
    },
    {
      id: "nod-krai",
      name: "Nod-Krai",
      wallpaper: "/Assets/Nod-Krai_wallpaper_1.png",
      color: "#607D8B",
      emoji: "🏔️",
      description: "Frost-bitten mysteries of the north.",
      quests: [
        { name: "The Frozen Whisper", duration: "5h", items: "Cryo Chars", price: "$25" },
        { name: "Aurora Serenade", duration: "4h", items: "None", price: "$20" }
      ]
    }
  ];

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedRegion(null);
  };

  return (
    <div className="quest-page">
      <PageHero 
        title={selectedRegion ? `${selectedRegion.name} Quests` : "Quest Completion Services"}
        subtitle={selectedRegion 
          ? `Select a world quest from ${selectedRegion.name} for professional completion.` 
          : "Professional completion of World Quests and Side Quests across all regions."}
      >
        {selectedRegion && (
          <button className="back-btn" onClick={handleBack}>
            ← Back to Regions
          </button>
        )}
      </PageHero>

      <section className="quest-content">
        <div className="container">
          {!selectedRegion ? (
            <div className="quest-regions-grid">
              {regions.map((region) => (
                <div key={region.id} className="quest-region-card" onClick={() => handleRegionClick(region)}>
                  <div className="q-card-image">
                    <img src={region.wallpaper} alt={region.name} />
                  </div>
                  <div className="q-card-info">
                    <h3>{region.emoji} {region.name}</h3>
                    <p>{region.description}</p>
                    <span className="q-count">{region.quests.length} Available Packages</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="quest-list-view">
              <div className="quest-child-grid">
                {selectedRegion.quests.map((quest, index) => (
                  <div key={index} className="quest-child-card">
                    <div className="q-child-header" style={{ backgroundColor: selectedRegion.color }}>
                      <h4>{quest.name}</h4>
                    </div>
                    <div className="q-child-body">
                      <div className="q-detail">
                        <span className="q-label">Duration:</span>
                        <span className="q-value">{quest.duration}</span>
                      </div>
                      <div className="q-detail">
                        <span className="q-label">Requirements:</span>
                        <span className="q-value">{quest.items}</span>
                      </div>
                      <div className="q-price-tag">
                        {quest.price}
                      </div>
                      <button className="order-quest-btn">Request Service</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Quest;
