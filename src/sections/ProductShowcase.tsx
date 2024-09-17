'use client';

import productImage from '@/assets/product-image.png';
import Image from 'next/image';
import pyramidImage from '@/assets/pyramid 1.png';
import tubeImage from "@/assets/torus 1.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll ({
   target: sectionRef,
   offset: ['start end', 'end start']

 });
 const translateY = useTransform(scrollYProgress, [0, 1], [150, -150] );
  return (
  <section ref={sectionRef} className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
    <div className="container">
      <div className='section-heading'>
      <div className='flex justify-center'>
      <div className='tag'>
      Un Tableau de Bord Clair et Précis
      </div>
      </div>
      <h2 className='section-title mt-5'>Une méthode plus efficace pour gérer votre agence</h2>
      <p className='section-description mt-5'>Gardez le contrôle total de votre agence en un clin d&apos;œil. Suivez facilement les réservations, paiements et l&apos;état des véhicules grâce à un tableau de bord intuitif et personnalisable. Boostez votre efficacité avec des graphiques interactifs et des rapports instantanés pour une gestion plus rapide et sans stress</p>
      </div>
      <div className='relative'>
     <Image src={productImage} alt="Product Image" className='mt-10'/>
     <motion.img src={pyramidImage.src} alt='Pyramid Image' height={262} width={262}  className='hidden md:block absolute -right-36 -top-32'
     style={{
      translateY,
     }}
     />
     <motion.img src={tubeImage.src} alt='Tube image' height={248} width={248} className='hidden md:block absolute bottom-24 -left-36'
     style={{
      translateY,
     }} />
     </div>
    </div>
  </section>
  );
};
