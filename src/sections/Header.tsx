'use client';

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ArrowIcon from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import { MenuIcon, X } from 'lucide-react';
import { siteConfig } from '@/configs/site';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('Home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className='sticky top-0 md:backdrop-blur-sm z-20'>
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className='text-white/60 hidden md:block'>Satisfait ou Remboursé !</p>
        <div className='inline-flex gap-1 items-center'>
          <p>
            2 mois gratuit 🎉
          </p>
        </div>
      </div>
      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <ScrollLink to="hero" smooth={true} duration={700}>
              <Image src={Logo} alt='Maxima Parc Logo' height={40} width={40} />
            </ScrollLink>

            {/* Menu icon for mobile */}
            <div className="md:hidden">
              <MenuIcon className="h-5 w-5 cursor-pointer" onClick={toggleMenu} />
            </div>

            {/* Navigation for larger screens */}
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              {siteConfig.navItems.map((item, index) => (
                <ScrollLink 
                  key={index} 
                  to={item.href.substring(1)} // Remove the '#' from href
                  smooth={true}
                  duration={700}
                  className="hover:text-black transition-colors cursor-pointer"
                >
                  {item.title}
                </ScrollLink>
              ))}
              <ScrollLink 
                  to='calltoaction'
                  smooth={true}
                  duration={700}
                  className='gap-1 items-center cursor-pointer bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight hover:bg-gray-800 transition-colors'>
                <p>Contactez nous</p>
                <ArrowIcon className="h-4 w-4 inline-flex justify-center items-center" />
              </ScrollLink>
            </nav>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] z-50 flex flex-col justify-between p-6"
          >
            <div className="flex justify-between items-center">
              <Image src={Logo} alt='Logo' height={40} width={40} />
              <button onClick={toggleMenu} className="text-black">
                <X className="h-8 w-8" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-6 mt-12">
              {siteConfig.navItems.map((item, index) => (
                <ScrollLink
                  key={index}
                  to={item.href.substring(1)}
                  smooth={true}
                  duration={700}
                  onClick={() => {
                    setSelectedLink(item.title);
                    setIsMenuOpen(false);
                  }}
                  className="text-[#010D3E] text-4xl font-bold flex items-center tracking-tighter"
                >
                  <span className="text-[#001E80] mr-4 text-xl">{`0${index + 1}`}</span>
                  {item.title}
                </ScrollLink>
              ))}
            </nav>
            
            <div className="space-y-6 mb-8">
              <div className="tag flex justify-center">
                Satisfait ou Remboursé !
              </div>
              <ScrollLink
                to='calltoaction'
                smooth={true}
                duration={700}
                onClick={() => setIsMenuOpen(false)}
                className='btn btn-primary w-full text-xl'
              >
                <span>Contact Us</span>
                <ArrowIcon className="h-5 w-5 ml-2" />
              </ScrollLink>
              <div className="flex justify-between items-center">
                <div className="btn btn-primary">
                  2 mois gratuit
                </div>
                <ScrollLink 
                  to='calltoaction'
                  smooth={true}
                  duration={700}
                  onClick={() => setIsMenuOpen(false)}
                  className="btn btn-text gap-1 cursor-pointer"
                >
                  <span>Profitez maintenant</span>
                  <ArrowIcon className="h-5 w-5" />
                </ScrollLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};