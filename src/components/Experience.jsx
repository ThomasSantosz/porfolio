import React from "react";
import { useParams } from "react-router-dom";
import translations from "../translations";

const Experience = () => {
  const { lang } = useParams();
  const currentLang = translations[lang] ? lang : "en";

  const experienceItems = [
    {
        type: translations[currentLang].yearExperience1,
        title: translations[currentLang].titleExperience1,
        business: translations[currentLang].secondTitleExperience1,
        description: translations[currentLang].descriptionExperience1,
        tags: translations[currentLang].tagsExperience1
    },
    {
        type: translations[currentLang].yearExperience2,
        title: translations[currentLang].titleExperience2,
        business: translations[currentLang].secondTitleExperience2,
        description: translations[currentLang].descriptionExperience2,
        tags: translations[currentLang].tagsExperience2
    },
    {
        type: translations[currentLang].yearExperience3,
        title: translations[currentLang].titleExperience3,
        business: translations[currentLang].secondTitleExperience3,
        description: translations[currentLang].descriptionExperience3,
        tags: translations[currentLang].tagsExperience3
    },
    {
        type: translations[currentLang].yearExperience4,
        title: translations[currentLang].titleExperience4,
        business: translations[currentLang].secondTitleExperience4,
        description: translations[currentLang].descriptionExperience4,
        tags: translations[currentLang].tagsExperience4
    }
  ];

  return (
    <div className="experience-catalog">
      {experienceItems.map((item, index) => (
        <div key={index} className="experience-item">
            <a className="experience-type">{item.type}</a>
            <div className="experience-content">
                <h2>{item.title}<a>{item.business}</a></h2>
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

export default Experience;