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
    flex-col gap-8`}>

    </div>
  </motion.footer>
);

export default Footer;
