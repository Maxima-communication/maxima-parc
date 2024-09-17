'use client';

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import Image from "next/image";
import MenuIcon from '@/assets/menu.svg';  // Assuming this is an SVG component.
import { X } from 'lucide-react'; // You can import a close icon for the mobile menu.
import { siteConfig } from '@/configs/site';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
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
                <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
              </ScrollLink>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/80 z-30 flex flex-col items-center justify-center">
          <X className="h-6 w-6 cursor-pointer absolute top-5 right-5" onClick={toggleMenu} />
          <nav className="flex flex-col gap-4 text-white text-xl">
            {siteConfig.navItems.map((item, index) => (
              <ScrollLink 
                key={index} 
                to={item.href.substring(1)} // Remove the '#' from href
                smooth={true}
                duration={700}
                onClick={toggleMenu}  // Close menu on link click
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                {item.title}
              </ScrollLink>
            ))}
            <ScrollLink 
                to='calltoaction'
                smooth={true}
                duration={700}
                onClick={toggleMenu}  // Close menu on link click
                className='gap-1 items-center cursor-pointer bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight hover:bg-gray-300 transition-colors'>
              <p>Profitez-en</p>
              <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
            </ScrollLink>
          </nav>
        </div>
      )}
    </header>
  );
};
