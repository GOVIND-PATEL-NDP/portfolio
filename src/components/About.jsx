import React from 'react'
import Tilt from "react-parallax-tilt";

import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "Spring",0.5*index,0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">

        <div options={{
          max : 45,
          scale : 1,
          speed : 450
         
        }}
         className='bg-tertiary rounded-[20px] py-5 px-12  min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
        </motion.div>

    </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
        Overview
      </h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] p-2'>
    

    Hi, I'm Govind Patel, a passionate and detail-oriented Software Engineer with a Bachelor of Computer Application from Dr. Harisingh Gour Central University. Currently, I am pursuing a Master of Computer Application (2024-2026) from BIST Bhopal to further deepen my technical knowledge and skills. With a strong foundation in software development, I specialize in building dynamic and responsive web applications using modern technologies like React.js, Spring Boot, and MySQL.

I am currently working as a React Developer at Global FPO, where I collaborate on enhancing user interfaces, integrating APIs, and optimizing performance. My technical expertise spans across JavaScript, Java (Core & Spring Boot), HTML/CSS, and working with tools like Git, VS Code, and Postman.

I am eager to leverage my technical skills and creativity to solve complex problems and deliver user-centric solutions. Explore my projects to see how I bring ideas to life!
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")