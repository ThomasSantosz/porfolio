import React from 'react';
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import translations from "../translations";
import Technologie from "../components/Technologie";
import Courses from "../components/Courses";
import Catalog from "../components/Catalog";
import Experience from "../components/Experience";

import macBookMockups from '../assets/MackBook-mockups.png';

import HTML5Logo from '../assets/html5.svg';
import CSS3Logo from '../assets/css3.svg';
import JavaScriptLogo from '../assets/javascript.svg';
import PHPLogo from '../assets/php.svg';
import DatabaseLogo from '../assets/databricks.svg';
import ReactLogo from '../assets/react.svg';

import project1 from '../assets/projects/project-agrounity.jpg';

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }} // Entra pela esquerda
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
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


  const catalogItems = [
      {
        image: project1,
        title: translations[currentLang].title1,
        description: translations[currentLang].description1,
        tags: translations[currentLang].tags1
      }
    ];


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
    <>
      <div>
        <div className='content'>
            <AnimatedSection>
                <div className="text-definition">
                <h1>{translations[currentLang].ApresentationTitileHome}</h1>
                <h3>{translations[currentLang].ApresentationExperienceHome}</h3>
                <p>{translations[currentLang].ApresentationDescriptionHome}</p>
                <button className="learn-more-introduction-home">
                    <a>{translations[currentLang].LearnMoreIntroductionHome}</a>
                </button>
                <img src={macBookMockups} alt="macOS" />
                </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="technologies">
                <h1>{translations[currentLang].TechnologiesTextH1}</h1>
                <div className="images-technologies">
                  <Technologie items={technologieItems} />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="courses">
                <h1>{translations[currentLang].courseH1Title}</h1>
                <div className="catalags">
                  <Courses items={courseItems} />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
                <div className="home">
                    <h1>{translations[currentLang].SolutionsForYourBusiness}</h1>
                    <div className="catalags">
                      <Catalog items={catalogItems} />
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <div className="experience">
                    <h1>{translations[currentLang].ExperiencesTitleDiv}</h1>
                    <div className="experiences">
                        <Experience items={experienceItems} />
                    </div>
                </div>
            </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default Home;