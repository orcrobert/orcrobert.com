import styles from './Description.module.css'
import React from 'react';
import { useState, useEffect } from 'react';
import ContactBox from './ContactBox';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeBlock, dracula } from 'react-code-blocks';
import { dark_av } from "../public/images/memoji_dark.png";
import { light_av } from "../public/images/memoji_light.png";


const Description = () => {
    const [isTimelineVisible, setIsTimelineVisible] = useState(false);

    const variants = {
        open: { opacity: 1, height: "auto" },
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
        <div>
            <div class="w-96 flex justify-between w-full">
                <div className="md:flex">
                    <div>
                        <h1 class="animate-text bg-gradient-to-r
                        from-teal-500 via-purple-500 to-orange-500 
                        bg-clip-text text-transparent text-6xl font-extrabold antialiased
                        drop-shadow-lg shadow-transparent">
                            Hello there traveller! <br /> I'm Robert
                        </h1>
                    </div>
                    <div className='flex'>
                        <motion.img src='https://imgur.com/pEZtFpC.png ' alt='avatar'
                            className='max-w-xs max-h-xs' animate={{ rotate: 360 }}
                            transition={{ duration: 2 }} />
                    </div>
                </div>

            </div>
            <div className='pt-6 sm:flex sm:justify-center'>
                <p className="indent-4 antialiased">
                    I'm a Computer Science student at UBB (english section) who gets a kick out of solving tricky problems and making software that not only works like a charm but also looks good doing it. Ever since I got hooked on programming, I've been on a mission to bring a bit of personality into my code.
                </p>
            </div>
            <div className='pt-2 sm:flex sm:justify-center'>
                <p className="indent-4 antialiased">
                    As for more personal stuff, I'm into very aggressive metal music, motorcycles, philosophy and trying to optimize every aspect of my existence.
                    You can find out more by navigating to some of the links above.
                </p>
            </div>
            <div className='pt-3 sm:flex'>
                <h1 className="font-semibold">View my programming timeline </h1>
                <h1 className='text-2xl	'>⇙</h1>
            </div>
            <button onClick={() => setIsTimelineVisible(!isTimelineVisible)}
                    className='font-black'>
                {isTimelineVisible ? '• Hide Timeline •' : '• Show Timeline •'}
            </button>
            <AnimatePresence>
                {isTimelineVisible && (
                    <motion.div
                        key="timeline"
                        variants={variants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{ duration: 0.5 }}
                        className={`pt-8 flex justify-center`}
                    >
                        <div>
                            <div class="ps-2 my-2 first:mt-0">
                                <h3 class="text-xs font-bold uppercase text-gray-500 dark:text-gray-400">
                                    2018
                                </h3>
                            </div>

                            <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
                                <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
                                    </div>
                                </div>

                                <div class="grow p-2 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                        Wrote my first C# program, a simple calculator.
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        This was the first time I was introduced to programming.
                                    </p>
                                </div>
                            </div>

                            <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">

                                <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
                                    </div>
                                </div>
                                <div class="grow p-2 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                        Started learning basic C++ and algorithms.
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        I was very eager to start high school, so I learned the computer science curriculum beforehand.
                                    </p>
                                </div>
                            </div>

                            <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">

                                <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
                                    </div>
                                </div>
                                <div class="grow p-2 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                        Basics of Web Development.
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        Learned HTML and CSS.
                                    </p>
                                </div>
                            </div>

                            <div class="ps-2 my-2 first:mt-0">
                                <h3 class="text-xs font-bold uppercase text-gray-500 dark:text-gray-400">
                                    2019 & 2020
                                </h3>
                            </div>

                            <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">

                                <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
                                    </div>
                                </div>

                                <div class="grow p-2 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                        Complex algorithms in C++.
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        Started participating in physical and online programming competitions.
                                    </p>
                                </div>
                            </div>

                            <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">

                                <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
                                    </div>
                                </div>

                                <div class="grow p-2 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                        ORACLE - Java Foundations Certification
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        Learned the basics of Java and Object Oriented Programming.
                                    </p>
                                </div>
                            </div>

                            <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">

                                <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
                                    </div>
                                </div>
                                <div class="grow p-2 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                        Experimented with Arduino.
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        Went in the world of micro-controllers!
                                    </p>
                                </div>
                            </div>

                            <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">

                                <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
                                    </div>
                                </div>

                                <div class="grow p-2 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                        Basics of Linux.
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        Becomed a Hackerman.
                                    </p>
                                </div>
                            </div>

                            <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">

                                <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
                                    </div>
                                </div>

                                <div class="grow p-2 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                        Java Programmer for robotics.
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        Was the main programmer in my schools FTC team.
                                    </p>
                                </div>
                            </div>

                            <div class="ps-2 my-2 first:mt-0">
                                <h3 class="text-xs font-bold uppercase text-gray-500 dark:text-gray-400">
                                    2021
                                </h3>
                            </div>

                            <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">

                                <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
                                    </div>
                                </div>

                                <div class="grow p-2 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                        Web Design.
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        Learned Javascript in-depth and experimented with ReactJS and NextJS. <br />
                                        + TailwindCSS, ThreeJS, Framer Motion etc.
                                    </p>
                                </div>
                            </div>

                            <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">

                                <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
                                    </div>
                                </div>
                                <div class="grow p-2 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                        SQL and C#.
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        Created some WinForms applications with backend and a layered architecture.
                                    </p>
                                </div>
                            </div>

                            <div class="ps-2 my-2 first:mt-0">
                                <h3 class="text-xs font-bold uppercase text-gray-500 dark:text-gray-400">
                                    2022
                                </h3>
                            </div>

                            <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">

                                <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
                                    </div>
                                </div>

                                <div class="grow p-2 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                        Degenerate Era.
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        I have no idea what I'm doing.
                                    </p>
                                </div>
                            </div>

                            <div class="ps-2 my-2 first:mt-0">
                                <h3 class="text-xs font-bold uppercase text-gray-500 dark:text-gray-400">
                                    2023 - early 2024
                                </h3>
                            </div>

                            <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">

                                <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
                                    <div class="relative z-10 size-7 flex justify-center items-center">
                                        <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
                                    </div>
                                </div>

                                <div class="grow p-2 pb-8">
                                    <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                        Preparing for exams.
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        ...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Description