import React from 'react';
import { useParams } from "react-router-dom";
import translations from "/src/translations"; // Importando o arquivo de traduções
import Catalog from "/src/components/Catalog"; // Importe o componente Catalog

const Home = () => {
  const { lang } = useParams(); // Obtém o idioma da URL

  // Se o idioma não for válido, usa "en" como padrão
  const currentLang = translations[lang] ? lang : "en";


  const catalogItems = [
    {
      name: "The Importance of Plowing: How Climate and Weather Affect Harvest",
      image: "/src/assets/img/catalags/pexels-ofir-eliav-2397652-7940478.jpg",
      description: "Descrição do Produto 1",
      price: 49.99
    },
    {
      name: "Smart Fertilization: How to Nourish Soil for Maximum Productivity",
      image: "/src/assets/img/catalags/pexels-nc-farm-bureau-mark-21711158.jpg",
      description: "Descrição do Produto 2",
      price: 79.99
    },
    {
      name: "Strategic Fertilization: The Role of Nutrients in Crop Quality",
      image: "/src/assets/img/catalags/pexels-mirkofabian-11996945.jpg",
      description: "Descrição do Produto 3",
      price: 99.99
    },
    {
      name: "Soil Amendment: How to Adjust pH and Improve Fertility",
      image: "/src/assets/img/catalags/pexels-jakeheinemann-1482101.jpg",
      description: "Descrição do Produto 3",
      price: 99.99
    },
    {
      name: "Sustainable Soil Management: Strategies to Preserve Productivity",
      image: "/src/assets/img/catalags/pexels-olliecraig1-6020273.jpg",
      description: "Descrição do Produto 3",
      price: 99.99
    },
    {
      name: "Precision Spraying: How to Apply Pesticides Efficiently",
      image: "/src/assets/img/catalags/pexels-stitch-20280087.jpg",
      description: "Descrição do Produto 3",
      price: 99.99
    },
    {
      name: "Pest and Disease Control: Strategies for Healthy Crops",
      image: "/src/assets/img/catalags/pexels-freestockpro-7768447.jpg",
      description: "Descrição do Produto 3",
      price: 99.99
    },
    {
      name: "Crop Protection: How to Minimize Losses and Increase Profitability",
      image: "/src/assets/img/catalags/pexels-melquizedeque-almeida-39371277-31226927.jpg",
      description: "Descrição do Produto 3",
      price: 99.99
    },
    {
      name: "Integrated Pest Management (IPM): How to Reduce Impacts and Improve Production",
      image: "/src/assets/img/catalags/pexels-davidmcelwee-16407472.jpg",
      description: "Descrição do Produto 3",
      price: 99.99
    }
    // Adicione mais produtos conforme necessário
  ];


  return (
    <>
    <div>
      <div className='content'>
        <div className="text-definition">
          <h1>{translations[currentLang].ApresentationTitileHome}</h1>
          <h3>{translations[currentLang].ApresentationExperienceHome}</h3>
          <p>{translations[currentLang].ApresentationDescriptionHome}</p>
          <button className="learn-more-introduction-home"><a>{translations[currentLang].LearnMoreIntroductionHome}</a></button>
          <img src="/src/assets/raviKumarProfile.webp" />
        </div>
        {/*<div className="video-of-apresentation">
          <img src="/src/assets/img/craig-cooper-mADanQnJ_oU-unsplash.jpg" /> {/* Video here */}
        {/*</div>*/}

        <div className="home">
          <h1>{translations[currentLang].SolutionsForYourBusiness}</h1>
          <div className="catalags">
            {/*<h4>Soil and Plant Nutrition</h4>*/}
            <Catalog items={catalogItems} />
          </div>
        </div>

        {/*<div className="company-insights">
          <h1>{translations[currentLang].CompanyInsights}</h1>

          <div className="purpose">
            <img src="/src/assets/img/catalags/pexels-shvetsa-5230983.jpg" />
            <div className="text">
              <h2>Agro Unity: Innovation and Technology at the Service of Agribusiness</h2>
              <p>Agro Unity is a platform dedicated to innovation in agribusiness, combining technology and knowledge to optimize productivity in the field. With a focus on agronomic engineering, we address topics such as fertilization, soil management, irrigation and crop protection, providing strategic insights for producers and professionals in the sector. Our commitment is to promote more efficient, sustainable and connected agriculture with new technologies.</p>
              <button id="company-insights"><a>Find out more</a></button>
            </div>
          </div>

        </div>*/}

      </div>
    </div>
    </>
  );
};

export default Home;