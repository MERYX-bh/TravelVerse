'use client';

import { TypingText } from '@/components';
import {motion} from 'framer-motion';
import styles from '@/styles';
import { fadeIn, staggerContainer } from '@/utils/motion';


const About = () => {
  return (
    <section className={`${styles.paddings} relative
    z-10`}>
      <div className="gradient-02 z-0"/>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto 
      ${styles.flexCenter} flex-col`}>
        <TypingText title='| About TravelVerse' textStyle='text-center' />
        <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px]
        text-[20px] text-center text-secondary-white'
        >
          At
        <span className="font-extrabold text-white"> TravelVerse,</span>
        Your Pathway to Extraordinary Explorations

we redefine the art of travel, offering you more than just a journey; we 
offer a gateway to  <span className="font-extrabold text-white">unforgettable experiences.</span> With a commitment 
to crafting seamless and  <span className="font-extrabold text-white">immersive adventures</span>, TravelVerse stands as a 
premier travel agency, dedicated to turning your travel dreams into tangible realities.
        </motion.p>
        <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain
        mt-[28px]'
        />
      </motion.div>
    </section>
    )
}

export default About