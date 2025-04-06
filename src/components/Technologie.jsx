import React from "react";
import { useParams } from "react-router-dom";
import translations from "../translations";

const Technologie = () => {
  const { lang } = useParams();
  const currentLang = translations[lang] ? lang : "en";

  const technologieItems = [
    {
      image: "/src/assets/technologies/react-logo-transparent.png"
    },
    {
      image: "/src/assets/technologies/node-js-logo.png"
    }
  ];

  return (
    <div className="technologies-catalog">
      {technologieItems.map((item, index) => (
        <div key={index} className="technologie-item">
            <img src={item.image} alt={item.title} className="technologie-image" />
        </div>
      ))}
    </div>
  );
};

export default Technologie;