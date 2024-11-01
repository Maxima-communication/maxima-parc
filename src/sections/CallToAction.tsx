"use client";

import React, { useRef, useState } from 'react';
import ArrowRight from '@/assets/arrow-right.svg';
import starImage from '@/assets/emojistar 1.png';
import springImage from '@/assets/helix2 1.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import emailjs from "@emailjs/browser";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const form = useRef<any>(null);

  // State for success message
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("maxima_parc_form", "maxima_parc_template", form.current, {
        publicKey: "_GLhqqR6yqsi51G6z",
      })
      .then(
        () => {
          console.log("SUCCESS!");

          // Show success message
          setShowSuccessMessage(true);

          // Reset form data
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          });

          form.current.reset();

          // Hide the message after 3 seconds
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section id='calltoaction' ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container mx-auto px-4">
        <div className='section-heading relative'>
          <h2 className="section-title text-4xl font-bold text-center mb-5">100% satisfait ou remboursé, garanti !</h2>
          <p className="section-description text-xl text-center mt-5 max-w-2xl mx-auto">
            Célébrez vos réussites avec une application qui suit vos progrès et booste votre efficacité dans la gestion de votre agence de location de voitures.
          </p>
          <motion.img src={starImage.src} alt="Star Image" width={360} className='absolute -left-[350px] -top-[137px]' style={{ translateY }} />
          <motion.img src={springImage.src} alt="Spring Image" width={360} className='absolute -right-[331px] -top-[19px]' style={{ translateY }} />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <div className="btn btn-primary">Un mois gratuit 🎉</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 max-w-xl mx-auto"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <label htmlFor="name" className="section-contact block text-lg text-gray-700 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 text-lg"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <label htmlFor="email" className="section-contact block text-lg text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 text-lg"
              />
            </motion.div>

            {/* New phone number field */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <label htmlFor="phone" className="section-contact block text-lg text-gray-700 mb-2">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 text-lg"
              />
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <label htmlFor="message" className="section-contact block text-lg text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 resize-none text-lg"
              ></textarea>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn gap-1 w-full py-3 px-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md"
            >
              <span>Profitez maintenant</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </form>

          {/* Success message */}
          {showSuccessMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-center text-green-600 text-lg font-semibold "
            >
              Votre email a été envoyé avec succès ! 🎉
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
