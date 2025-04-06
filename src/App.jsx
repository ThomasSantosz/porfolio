import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";
import Loader from "./components/Loader"; // Animação de carregamento
import "./App.css";

// Lazy loading das páginas
const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./pages/Home"));
const HowWeDoIt = lazy(() => import("./pages/HowWeDolt"));
const WhatWeBelieve = lazy(() => import("./pages/WhatWeBelieve"));
const WhatWeDo = lazy(() => import("./pages/WhatWeDo"));
const WhoWeAre = lazy(() => import("./pages/WhoWeAre"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

// Wrapper para lidar com a troca de idiomas
const LanguageWrapper = ({ Component }) => {
  let { lang } = useParams();

  // Se o idioma na URL for inválido, redireciona para "/en"
  if (lang !== "en" && lang !== "pt") {
    return <Navigate to="/en" replace />;
  }

  return <Component lang={lang} />;
};

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          {/* Redireciona "/" para "/en" por padrão */}
          <Route path="/" element={<Navigate to="/en" replace />} />
          
          {/* Rotas com suporte a idiomas */}
          <Route path="/:lang" element={<LanguageWrapper Component={Home} />} />
          <Route path="/:lang/who-we-are" element={<LanguageWrapper Component={WhoWeAre} />} />
          <Route path="/:lang/what-we-believe" element={<LanguageWrapper Component={WhatWeBelieve} />} />
          <Route path="/:lang/what-we-do" element={<LanguageWrapper Component={WhatWeDo} />} />
          <Route path="/:lang/how-we-do-it" element={<LanguageWrapper Component={HowWeDoIt} />} />
          <Route path="/:lang/contact-us" element={<LanguageWrapper Component={ContactUs} />} />

          {/* Qualquer rota inválida redireciona para "/en" */}
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default React.memo(App);