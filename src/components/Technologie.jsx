import React from "react";
import { useParams } from "react-router-dom";
import translations from "../translations";

import HTML5Logo from '../assets/html5.svg';
import CSS3Logo from '../assets/css3.svg';
import JavaScriptLogo from '../assets/javascript.svg';
import PHPLogo from '../assets/php.svg';
import DatabaseLogo from '../assets/databricks.svg';
import ReactLogo from '../assets/react.svg';

const Technologie = () => {
  const { lang } = useParams();
  const currentLang = translations[lang] ? lang : "en";

  const technologieItems = [
      {
        image: HTML5Logo
      },
      {
        image: CSS3Logo
      },
      {
        image: JavaScriptLogo
      },
      {
        image: PHPLogo
      },
      {
        image: DatabaseLogo
      },
      {
        image: ReactLogo
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