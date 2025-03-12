import React, { useState, useEffect } from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Text Section */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Govind</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 ${
              isMobile ? 'mb-32' : 'mb-10'
            }`}
          >
            I develop Interactive User
            <br className="sm:block hidden" />
            Friendly interfaces and web applications.
          </p>
        </div>
      </div>

      {/* 3D Computer Model */}
      <ComputersCanvas />

      {/* Scroll Indicator - Adjusted for Small Screens */}
      <div
        className={`absolute ${
          isMobile ? 'bottom-5' : 'xs:bottom-10 bottom-32'
        } w-full flex justify-center items-center`}
      >
        <a href="#about">
          <div className="w-[30px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
