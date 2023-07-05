import React, { useState, useEffect } from "react";
import "./card.styles.css";

const Card = ({ photo }) => {
  const { alt_description, urls, user } = photo;
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isScreenLarge, setIsScreenLarge] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenLarge(window.innerWidth >= 600); 
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleCardSize = () => {
    if (isScreenLarge) {
      setIsEnlarged(!isEnlarged);
    }
  };

  return (
    <div className={`card-container ${isEnlarged ? "enlarged" : ""}`} key={photo.id}>
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${urls.regular})`,
        }}
        onClick={toggleCardSize}
      ></div>
      <div className="card-content">
        <h3 className="owner">Photographer:</h3>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <div className="card-actions">
        {isEnlarged && (
          <a href="#" className="action-link" onClick={toggleCardSize}>
            
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
