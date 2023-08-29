'use client';
import {motion} from 'framer-motion';
import styles from '@/styles';
import { socials } from '@/constants';
import { footerVariants } from '@/utils/motion';

const Footer = () => (
  <motion.footer
  variants={footerVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient"/>
    <div className={`${styles.innerWidth} mx-auto flex
    flex-col gap-8 `}>
      <div className="flex items-center justify-between
      flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px]
        text-[44px] text-white">
          Choose a destination
        </h4>
        <button type="button" className="flex items-center
        h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
          <img
          src="/headset.svg"
          className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">BOOK A TRIP </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] opacity-10 bg-white" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px]
           text-white">TravelVerse</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 TravelVerse. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img
              src={social.url}
              key={social.name}
              alt={social.name}
              className="w-[24px] h-[24px] object-contain
              cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
