/* eslint-disable react/jsx-key */
"use client";

import avatar1 from "@/assets/avatar-1.png";
// import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";


const testimonials = [
  {
    text: "Le système a révolutionné notre manière de travailler. Nous avons gagné en productivité et nos clients apprécient la rapidité des processus.",
    imageSrc: avatar1.src,
    name: "BABA CARS",
    
  },
  // {
  //   text: "Un outil indispensable pour la gestion quotidienne de notre flotte. Très intuitif et efficace. ",
  //   imageSrc: avatar2.src,
  //   name: "DAROUICH CARS",
    
  // },
  {
    text: "Ce système a transformé la gestion de notre agence. Facile à utiliser et très complet, il nous aide à suivre toutes nos réservations et paiements en un seul endroit",
    imageSrc: avatar3.src,
    name: "Ajjebir Location",
    
  },
  {
    text: "Une solution parfaitement adaptée à nos besoins ! La possibilité de gérer jusqu'à 12 véhicules avec une interface intuitive a vraiment simplifié notre quotidien.",
    imageSrc: avatar4.src,
    name: "Happycar location",
    
  },
  {
    text: "Nous avons été impressionnés par la flexibilité du tableau de bord. Il est personnalisé selon nos préférences, ce qui rend la gestion beaucoup plus efficace.",
    imageSrc: avatar5.src,
    name: "Taylor cars",
    
  },
  {
    text: "Les tarifs sont très compétitifs pour la qualité offerte. C'est un excellent rapport qualité-prix pour notre agence.",
    imageSrc: avatar6.src,
    name: "Riley drive",
    
  },
  {
    text: "La possibilité de suivre l'état des véhicules en temps réel est un vrai atout. Cela nous aide à garantir que tout est en parfait état pour nos clients.",
    imageSrc: avatar7.src,
    name: "Patels location",
    
  },
  {
    text: "Nous avons constaté une amélioration significative de notre efficacité depuis que nous avons adopté ce système.",
    imageSrc: avatar8.src,
    name: "Dawson cars",
    
  },
  {
    text: "Le support client est exceptionnel. Réactif et toujours prêt à aider, il a rendu notre expérience encore meilleure.",
    imageSrc: avatar9.src,
    name: "Casey Harper Rent",
    
  },
];
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice (6, 9);

const TestimonialsColumn = (props: { className?: string; testimonials: typeof testimonials; duration?:number}) => (
  <div className={props.className}>
  <motion.div animate={{
    translateY: "-50%",
  }}
  transition={{
    duration: props.duration || 10 ,
    repeat: Infinity,
    ease: 'linear',
    repeatType: "loop",
  }}
  className="flex flex-col gap-6 pb-6 ">
 {[...new Array(2)].fill(0).map((_, index) => (
  <React.Fragment key={index}>
  {props.testimonials.map(({text, imageSrc, name }) => (
    <div className="card">
      <div>{text}</div>
      <div className="flex items-center gap-2 mt-5">
        <Image
        src={imageSrc}
        alt={name}
        width={40}
        height={40}
        className='h-10 w-10 rounded-full'
        />
        <div className="flex flex-col">
          <div className="font-medium tracking-tight leading-5">
            {name}
          </div>
          
        </div>
      </div>
    </div>


 ))}
    </React.Fragment>
 ))}

</motion.div>
</div>
);

export const Testimonials = () => {
  return (
  <section id="testimonials" className="bg-white">
    <div className="container">
      <div className="section-heading">
      <div className="flex justify-center">
      <div className="tag">Avis Clients</div>
      </div>
      <h2 className="section-title mt-5">Ce que Nos Clients Disent de Nous</h2>
      <p className="section-description mt-5">
      Les témoignages de nos clients satisfaits qui ont amélioré leur efficacité et simplifié leurs opérations grâce à notre solution. Vos succès sont notre meilleure récompense !
      </p>
      </div>
      <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
      <TestimonialsColumn testimonials ={firstColumn} duration={15} />
      <TestimonialsColumn testimonials ={secondColumn} 
      className='hidden md:block' duration={19} />
      <TestimonialsColumn testimonials ={thirdColumn} 
      className='hidden lg:block' 
      duration={17}
      />


      


       
      
    </div>
    </div>
  </section>
  );
};
