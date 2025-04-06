import React from 'react';
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import translations from "../translations";
import Technologie from "../components/Technologie";
import Courses from "../components/Courses";
import Catalog from "../components/Catalog";
import Experience from "../components/Experience";

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
      image: "/src/assets/technologies/react-logo-transparent.png"
    },
    {
      image: "/src/assets/technologies/node-js-logo.png"
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




  const experienceItems = [
    {
      image: "/src/assets/projects/project-1.webp",
      title: translations[currentLang].title1,
      description: translations[currentLang].description1,
      tags: translations[currentLang].tags1
    },
    {
      image: "/src/assets/projects/project-2.webp",
      title: translations[currentLang].title2,
      description: translations[currentLang].description2,
      tags: translations[currentLang].tags2
    },
    {
      image: "/src/assets/projects/project-3.webp",
      title: translations[currentLang].title3,
      description: translations[currentLang].description3,
      tags: translations[currentLang].tags3
    },
    {
      image: "/src/assets/projects/project-4.webp",
      title: translations[currentLang].title4,
      description: translations[currentLang].description4,
      tags: translations[currentLang].tags4
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
                <img src="/src/assets/raviKumarProfile.webp" />
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