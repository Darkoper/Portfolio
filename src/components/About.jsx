import React from "react"
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon}) => {
  return(
    <Tilt className = "xs:w-[250px] w-full">
      <motion.div
        variants = {fadeIn("right","spring",0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>
        
      </motion.div>

    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView</h2>
      </motion.div>
      <motion.p
        variants = {fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate technology enthusiast with a strong proficiency in front-end development and exceptional problem-solving skills in C++. Continuously driven by a desire to innovate, I am now expanding my expertise into full-stack development and deep learning, aiming to leverage these skills to solve complex challenges and contribute to cutting-edge advancements in the tech industry.

      </motion.p>






      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) =>(
          <ServiceCard key = {service.title} index = {index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")