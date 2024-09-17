'use client';

import { Link as ScrollLink } from 'react-scroll';
import logo from '@/assets/logosaas.png';
import Image from 'next/image';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialYoutube from "@/assets/social-youtube.svg";
import { siteConfig } from '@/configs/site';
import SocialTiktok from '@/assets/tiktok.svg';
import SocialFacebook from '@/assets/facebook.svg';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="Maxima Parc logo" className='relative right-2 top-1' />
        </div>

        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          {siteConfig.navItems.map((item, index) => (
            <ScrollLink 
              key={index} 
              to={item.href.replace('#', '')} 
              smooth={true} 
              duration={500} 
              className="cursor-pointer"
            >
              {item.title}
            </ScrollLink>
          ))}
        </nav>

        <div className='flex justify-center gap-6 mt-6'>
          <Link href="https://www.instagram.com/maximaparc/">
          <SocialInsta />
          </Link>
          <Link href="https://www.facebook.com/maximaparc/">
          <SocialFacebook />
          </Link>
          <Link href="https://www.tiktok.com/@maximaparc">
          <SocialTiktok />
          </Link>
          <Link href="https://www.youtube.com/@maximaparc">
          <SocialYoutube />
          </Link>
        </div>
        <p className='mt-6'>&copy; 2024 Maxima Parc. All rights reserved.</p>
      </div>
    </footer>
  );
};
