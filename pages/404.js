import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NotFoundPage = () => {
    return (
        <div>
            <div className='bg-pink-400 dark:bg-purple-800 blur-3xl h-20 w-20 absolute'></div>
            <div className="container mx-auto px-0 py-0">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-xl mb-4">Oops! The page you're looking for does not exist.</p>
                <p className="text-gray-600 dark:text-gray-400">You might have followed a bad link, mistyped the address or the page is currently being built, feel free to try again.</p>
            </div>
            <div className="flex md:justify-center mt-0 md:mt-0">
                    <motion.img
                        src="/images/stop.png"
                        alt="avatar"
                        className="max-w-xs max-h-xs"
                        animate={{ rotate: -10}}
                        transition={{ duration: 1 }}
                    />
            </div>
        </div>
    );
}

export default NotFoundPage;