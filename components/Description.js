import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { dark_av } from '../public/images/memoji_dark.png';
import { light_av } from '../public/images/memoji_light.png';
import Timeline from './Timeline';
import SkillsComponent from './Skills';

const Description = () => {
    const [isTimelineVisible, setIsTimelineVisible] = useState(false);

    const variants = {
        open: { opacity: 1, height: 'auto' },
        closed: { opacity: 0, height: 0 }
    };

    useEffect(() => {
        if (isTimelineVisible) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [isTimelineVisible]);

    return (
        <div className="container mx-auto">
            <div className="md:flex md:justify-between">
                <div>
                    <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl sm:text-6xl font-extrabold antialiased drop-shadow-lg shadow-transparent text-center sm:text-left">
                        Hello there traveller! I'm Robert
                    </h1>
                </div>
                <div className="flex justify-center md:justify-end mt-4 md:mt-0">
                    <motion.img
                        src="https://imgur.com/pEZtFpC.png"
                        alt="avatar"
                        className="max-w-xs max-h-xs"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2 }}
                    />
                </div>
            </div>

            <h1 className="font-bold text-xl tracking-tight antialiased
            underline decoration-dashed underline-offset-2">Quick Intro</h1>

            <div className="pt-2 sm:flex sm:justify-center">
                <p className="indent-4 antialiased">
                    I'm a Computer Science student at UBB (english section) who gets a kick out of solving tricky problems and making software that not only works like a charm but also looks good doing it. Ever since I got hooked on programming, I've been on a mission to bring a bit of personality into my code.
                </p>
            </div>

            <div className="pt-2 sm:flex sm:justify-center">
                <p className="indent-4 antialiased">
                    As for more personal stuff, I'm into very aggressive metal music, motorcycles, philosophy and trying to optimize every aspect of my existence.
                    You can find out more by navigating to some of the links above.
                </p>
            </div>

            <SkillsComponent />

            <h1 className="font-bold text-xl tracking-tight antialiased
            underline decoration-dashed underline-offset-2">Timeline</h1>

            <div className="pt-3 flex flex-col items-center sm:flex-row sm:justify-center">
                <button onClick={() => setIsTimelineVisible(!isTimelineVisible)} className="font-black mb-2 sm:mb-0 sm:mr-2">
                    {isTimelineVisible ? '• Hide Timeline •' : '• Show Timeline •'}
                </button>
                <div className="text-2xl sm:flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 animate-bounce">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>

            <AnimatePresence>
                {isTimelineVisible && (
                    <motion.div
                        key="timeline"
                        variants={variants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{ duration: 0.5 }}
                        className="pt-8 flex justify-center"
                    >
                        <Timeline />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Description;