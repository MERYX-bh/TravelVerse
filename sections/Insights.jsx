'use client';

import { motion } from 'framer-motion';
import { insights } from '@/constants';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
     variants={staggerContainer}
     initial="hidden"
     whileInView="show"
     viewport={{once: false, amount: 0.25}}
     className={`${styles.innerWidth} mx-auto  
    flex flex-col`}>
      <div className="text-center">
        <TypingText title="| Insights" className="text-center" />
      </div>
      <TitleText title={<>Insight about TravelVerse</>} textStyle="text-center" />
    <div className="mt-[50px] flex flex-col gap-[30px]">
      {
        insights.map((insight, index) => (
          <InsightCard 
          key={`insight-${index}`} 
          {...insight}
          index = {index+1}
          />
        ))
      }
    </div>
    </motion.div>
    </section>
  )
}

export default Insights