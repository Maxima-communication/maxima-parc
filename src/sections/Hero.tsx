"use client";

import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/phone.png';
import cylinderImage from '@/assets/cylinder 1.png';
import noodleImage from '@/assets/half-torus 1.png';
import { Link as ScrollLink } from 'react-scroll';
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
target: heroRef, offset: ['start end' , 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
  <section id='hero' ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
    <div className="container">
      <div className='md:flex items-center'>
      <div className='md:w-[478px]'>
        <div className="tag">
        Satisfait ou Remboursé !
        </div>
        <h1 className="text-5xl  md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
        Controlez Tout N&apos;oubliez Rien      </h1>
        <p className="text-xl text-[#010D3E] tracking-tight mt-6">
        Gérez efficacement votre agence de location de voitures avec Maxima Parc. Simplifiez vos réservations, la gestion de votre flotte et vos clients en quelques clics. Optimisez vos opérations et concentrez-vous sur l&apos;essentiel.        </p>
        <div className="flex gap-1 items-center mt-[30px]">
          <div className="btn btn-primary">
          2 mois gratuit 🎉
          </div> 
          <ScrollLink 
                  to='calltoaction'
                  smooth={true}
                  duration={700} className="btn btn-text gap-1 cursor-pointer">
            <span>Profitez maintenant</span>
            <ArrowIcon className="h-5 w-5" />
          </ScrollLink>
        </div>
      </div>
      <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
        <motion.img src={cogImage.src} alt="Cog Image" className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0' animate={{
          translateY: [-30, 30], 
        }} transition={{ repeat: Infinity, repeatType: 'mirror', duration: 1, ease: 'easeInOut',}} />
      <motion.img 
      src= {cylinderImage.src} 
      width={220} 
      height={220} 
      alt="Cylinder image" 
      className='hidden md:block -top-6 -left-12 md:absolute'
      style= {{
        translateY: translateY,
      }}
      />
      <motion.img src={noodleImage.src}
       width={220} 
       alt="Noodle Image" 
       className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]'
       style= {{
        rotate: 30,
        translateY: translateY,
      }}
       /> 
      </div>
      </div>
    </div>
  </section>
  );
};
