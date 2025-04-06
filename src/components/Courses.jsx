import React from "react";
import { useParams } from "react-router-dom";
import translations from "../translations";

const Courses = () => {
  const { lang } = useParams();
  const currentLang = translations[lang] ? lang : "en";

  const courseItems = [
    {
      title: translations[currentLang].courseTitle1,
      description: translations[currentLang].courseDescription1,
      tags: translations[currentLang].courseTags1
    },
    {
      title: translations[currentLang].courseTitle2,
      description: translations[currentLang].courseDescription2,
      tags: translations[currentLang].courseTags2
    },
    {
      title: translations[currentLang].courseTitle3,
      description: translations[currentLang].courseDescription3,
      tags: translations[currentLang].courseTags3
    },
    {
      title: translations[currentLang].courseTitle4,
      description: translations[currentLang].courseDescription4,
      tags: translations[currentLang].courseTags4
    },
    {
      title: translations[currentLang].courseTitle5,
      description: translations[currentLang].courseDescription5,
      tags: translations[currentLang].courseTags5
    },
    {
      title: translations[currentLang].courseTitle6,
      description: translations[currentLang].courseDescription6,
      tags: translations[currentLang].courseTags6
    },
    {
      title: translations[currentLang].courseTitle7,
      description: translations[currentLang].courseDescription7,
      tags: translations[currentLang].courseTags7
    },
    {
      title: translations[currentLang].courseTitle8,
      description: translations[currentLang].courseDescription8,
      tags: translations[currentLang].courseTags8
    },
    {
      title: translations[currentLang].courseTitle9,
      description: translations[currentLang].courseDescription9,
      tags: translations[currentLang].courseTags9
    },
    {
      title: translations[currentLang].courseTitle10,
      description: translations[currentLang].courseDescription10,
      tags: translations[currentLang].courseTags10
    }
  ];

  return (
    <div className="catalog-course">
      {courseItems.map((item, index) => (
        <div key={index} className="course-item">
          <div className="course-content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;