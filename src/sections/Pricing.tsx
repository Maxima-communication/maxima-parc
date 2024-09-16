/* eslint-disable react/jsx-key */
'use client';

import CheckIcon from '@/assets/check.svg';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';



const pricingTiers = [
  {
    title: "PACK STANDARD",
    monthlyPrice: 1990,
    buttonText: "Contactez-nous",
    popular: false,
    inverse: false,
    features: [
      "Gestion optimisée pour jusqu'à 12 véhicules",
      "Gestion optimisée pour jusqu'à 500 clients",
      "Gestion optimisée pour jusqu'à 1000 réservations",
      "Formation Gratuite",
      "Support Disponible 24/7",
    ],
  },
  {
    title: "PACK PRO",
    monthlyPrice: 2440,
    buttonText: "Contactez-nous",
    popular: true,
    inverse: true,
    features: [
      "Gestion optimisée pour à partir de 13 jusqu'à 20 véhicules",
      "Gestion optimisée pour jusqu'à 1000 clients",
      "Gestion optimisée pour jusqu'à 1500 réservations",
      "Installation Gratuite",
      "Formation Gratuite ",
      "Support Disponible 24/7",
      
    ],
  },
  {
    title: "PACK VIP",
    monthlyPrice: 5500,
    buttonText: "Contactez-nous",
    popular: false,
    inverse: false,
    features: [
      "Gestion de véhicules sans limite",
      "Gestion de clients sans limite",
      "Gestion de réservations sans limite",
      "Gestion financiere",
      "Installation Gratuite",
      "Formation Gratuite ",
      "Support Disponible 24/7",
      
    ],
  },
];

export const Pricing = () => {
  return (
  <section className="py-24 bg-white">
<div className="container">
  <div className='section-heading'>
<h2 className="section-title">
Tarifs
</h2>
<p className="section-description mt-5">
Profitez des meilleurs tarifs du marché pour une valeur exceptionnelle.
</p>
</div>
<div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center'>
  {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => ( 
    <div className={twMerge('card', inverse === true && "border-black bg-black text-white")}>
  <div className='flex justify-between '>

  <h3 className={twMerge('text-lg font-bold text-black/50', inverse === true && 'text-white/60')}>{title}</h3>
  {popular === true && (
    <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20 '>
     <motion.span 
     animate={{
      backgroundPositionX: '100%',
     }}
     transition={{
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop',
     }}
     className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium'>Popular</motion.span>
  </div>
  )}
  
  </div>
  <div className='flex items-baseline gap-1 mt-[30px]'>
    <span className='text-4xl font-bold tracking-tighter leading-none'>{monthlyPrice} DHs</span>
    <span className='tracking-tight font-bold text-black/50'>/ Année</span>
  </div>
  <button className={twMerge('btn btn-primary w-full mt-[30px]', inverse === true && 'bg-white text-black')}>{buttonText}</button>
  <ul className='flex flex-col gap-5 mt-8'>
    {features.map((feature) => (
      <li className='text-sm flex items-center gap-4'>
        <CheckIcon className='h-6 w-6' />

        <span>{feature}</span>
        </li>
    ))}
  </ul>
  </div>
  )
  )}

</div>
</div>
  </section>
  );
};
