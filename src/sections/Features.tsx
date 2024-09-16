'use client';

import { Feature } from "@/sections/Feature";
import VehiculeIcon from "../assets/icons/car-front.svg";
import ClientIcon from "../assets/icons/users.svg";
import ReservationIcon from "../assets/icons/notebook-text.svg";

const features = [
  {
    title: "Gestion des clients",
    description:
      "Numérisation automatique des documents(CIN, Permis), base de données sécurisée, et suivi personnalisé pour un service optimal.",
    Icon: ClientIcon,
  },
  {
    title: "Gestion des réservations",
    description:
      "Planifiez facilement, générez des contrats et factures automatiquement, et suivez les disponibilités en temps réel.",
    Icon: ReservationIcon,
  },
  {
    title: "Gestion des véhicules",
    description:
      "Recevez des alertes de maintenance, suivez l'état de chaque véhicule, et assurez une gestion impeccable et sans tracas.",
    Icon: VehiculeIcon,
  },
];

export const Features = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
          Tout ce dont vous avez besoin !
        </h2>
        <div className="max-w-[540px] mx-auto">
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Profitez d&apos;une gestion de flotte personnalisable, d&apos;outils de coordination d&apos;équipe et d&apos;un suivi intelligent des réservations, le tout en un seul endroit. Programmez vos réservations, recevez des rappels de maintenance et suivez la progression de votre entreprise simplement et rapidement.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {features.map(({ title, description, Icon }) => (
            <Feature title={title} description={description} Icon={Icon} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
