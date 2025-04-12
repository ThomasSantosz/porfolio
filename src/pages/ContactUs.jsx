import React, { useRef } from 'react';
{/*import { useParams } from "react-router-dom";*/}
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const HowWeDolt = () => {
  {/*const { lang } = useParams();
  const currentLang = translations[lang] ? lang : "en";*/}

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0son8oc',
      'template_bi6rde6',
      form.current,
      'Fz8lfMOyzTp84i0wW'
    ).then(
      () => {
        toast.success('Email enviado com sucesso!');
        form.current.reset();
      },
      (error) => {
        toast.error('Erro ao enviar o email: ' + error.text);
      }
    );
  };
  
  return (
    <AnimatedSection>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
        />
    </div>
    </AnimatedSection>
  );
};

export default HowWeDolt;