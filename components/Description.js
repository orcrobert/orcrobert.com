import styles from './Description.module.css'
import React from 'react';
import { motion } from 'framer-motion';
import { CodeBlock, dracula } from 'react-code-blocks';
import { dark_av } from "../public/images/memoji_dark.png";
import { light_av } from "../public/images/memoji_light.png";

const Description = () => {
    return (
        <>
            <div class="w-96 flex justify-between w-full">
                <div className="md:flex">
                    <div>
                        <h1 class="animate-text bg-gradient-to-r
                        from-teal-500 via-purple-500 to-orange-500 
                        bg-clip-text text-transparent text-6xl font-extrabold antialiased
                        drop-shadow-lg shadow-transparent">
                            Hello There<br />Traveler!
                        </h1>
                    </div>
                    <div className='flex'>
                        <motion.img src='https://imgur.com/pEZtFpC.png ' alt='avatar'
                            className='max-w-xs max-h-xs' animate={{ rotate: 360 }}
                            transition={{ duration: 2 }} />
                    </div>
                </div>
            </div>
            <div className='pt-6'>
                <p className="indent-4 antialiased">
                    My name is Robert and I'm a Computer Science student.
                    I have always enjoyed solving problems and since I have
                    been introduced to programming I have been obsessed with creating useful and
                    aesthetic pieces of software. Endlessly trying to perfect myself and my
                    knowledge in this field. For me, developing has always been a passion and
                    I always get excited when I learn about a new technology.
                </p>
            </div>
            <div>
                <div>
                    <div class="ps-2 my-2 first:mt-0">
                        <h3 class="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                            1 Aug, 2023
                        </h3>
                    </div>

                    <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
                        <a class="absolute inset-0 z-[1]" href="#"></a>
                        <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
                            <div class="relative z-10 size-7 flex justify-center items-center">
                                <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
                            </div>
                        </div>

                        <div class="grow p-2 pb-8">
                            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                <svg class="flex-shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
                                Created "Preline in React" task
                            </h3>
                            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Find more detailed insctructions here.
                            </p>
                            <button type="button" class="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                James Collins
                            </button>
                        </div>
                    </div>

                    <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
                        <a class="absolute inset-0 z-[1]" href="#"></a>

                        <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
                            <div class="relative z-10 size-7 flex justify-center items-center">
                                <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
                            </div>
                        </div>
                        <div class="grow p-2 pb-8">
                            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Release v5.2.0 quick bug fix 🐞
                            </h3>
                            <button type="button" class="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                <span class="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                    A
                                </span>
                                Alex Gregarov
                            </button>
                        </div>
                    </div>

                    <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
                        <a class="absolute inset-0 z-[1]" href="#"></a>

                        <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
                            <div class="relative z-10 size-7 flex justify-center items-center">
                                <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
                            </div>
                        </div>

                        <div class="grow p-2 pb-8">
                            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Marked "Install Charts" completed
                            </h3>
                            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Finally! You can check it out here.
                            </p>
                            <button type="button" class="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                James Collins
                            </button>
                        </div>
                    </div>

                    <div class="ps-2 my-2 first:mt-0">
                        <h3 class="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                            31 Jul, 2023
                        </h3>
                    </div>
                    <div class="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 dark:hover:bg-white/10">
                        <a class="absolute inset-0 z-[1]" href="#"></a>

                        <div class="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700 dark:group-hover:after:bg-gray-600">
                            <div class="relative z-10 size-7 flex justify-center items-center">
                                <div class="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600 dark:bg-gray-800 dark:border-gray-600"></div>
                            </div>
                        </div>

                        <div class="grow p-2 pb-8">
                            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                Take a break ⛳️
                            </h3>
                            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Just chill for now... 😉
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Description