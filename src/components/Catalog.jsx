import React from "react";
import { useParams } from "react-router-dom";
import translations from "../translations";

import project1 from '../assets/projects/project-agrounity.jpg';

const Catalog = () => {
  const { lang } = useParams();
  const currentLang = translations[lang] ? lang : "en";

  const catalogItems = [
    {
      image: project1,
      title: translations[currentLang].title1,
      description: translations[currentLang].description1,
      tags: translations[currentLang].tags1
    }
  ];

  return (
    <div className="catalog">
      {catalogItems.map((item, index) => (
        <div key={index} className="catalog-item">
          <img src={item.image} alt={item.title} className="catalog-image" />
          <div className="catalog-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="tags">
              {item.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalog;