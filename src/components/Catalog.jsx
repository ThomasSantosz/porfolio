import React, { useState } from "react";
import { useParams } from "react-router-dom";
import translations from "../translations";

const Catalog = () => {
  const { lang } = useParams();
  const currentLang = translations[lang] ? lang : "en";

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const catalogItems = [
    {
      image: "/src/assets/projects/project-1.webp",
      video: "/src/assets/projects/previews/20250406_164031000_iOS.MP4",
      title: translations[currentLang].title1,
      description: translations[currentLang].description1,
      tags: translations[currentLang].tags1
    },
    {
      image: "/src/assets/projects/project-2.webp",
      video: "/src/assets/projects/previews/copy_5F04202B-A81E-4946-A2AB-F58C449693B4.mov",
      title: translations[currentLang].title2,
      description: translations[currentLang].description2,
      tags: translations[currentLang].tags2
    },
    {
      image: "/src/assets/projects/project-3.webp",
      video: "/src/assets/projects/project-3-preview.mp4",
      title: translations[currentLang].title3,
      description: translations[currentLang].description3,
      tags: translations[currentLang].tags3
    },
    {
      image: "/src/assets/projects/project-4.webp",
      video: "/src/assets/projects/project-4-preview.mp4",
      title: translations[currentLang].title4,
      description: translations[currentLang].description4,
      tags: translations[currentLang].tags4
    }
  ];
  

  return (
    <div className="catalog">
      {catalogItems.map((item, index) => (
        <div
          key={index}
          className="catalog-item"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === index ? (
            <video
              className="catalog-video"
              src={item.video}
              autoPlay
              muted
              loop
            />
          ) : (
            <img src={item.image} alt={item.title} className="catalog-image" />
          )}
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
