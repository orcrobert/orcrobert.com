import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import NotFoundPage from "./404";

const Header = () => {

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const renderThemeChanger = () => {

        if (!mounted)
            return null;

        const currTheme = theme === 'system' ? systemTheme : theme;

        if (currTheme === 'light') {
            return (
                <Button className={"bg-gray-200 shadow-sm opacity-75"} onClick={() => setTheme('dark')}
                    id="theme-changer"
                    >
                    <motion.svg whileHover={{
                        position: 'relative',
                        zIndex: 1,
                        scale: [1, 1.4, 1.2],
                        rotate: [0, 15, -15, 0],
                        transition: {
                            duration: .3
                        }
                    }} class="w-5 h-5" exit={{ inactive: true }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                        </svg>
                    </motion.svg>
                </Button>
            )
        }
        else {
            return (
                <Button className={"dark:bg-zinc-800 shadow-sm opacity-75"} onClick={() => setTheme('light')}
                    id="theme-changer">
                    <motion.svg whileHover={{
                        position: 'relative',
                        zIndex: 1,
                        scale: [1, 1.4, 1.2],
                        rotate: [0, 15, -15, 0],
                        transition: {
                            duration: .3
                        }
                    }} class="w-5 h-5" exit={{ inactive: true }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                        </svg>
                    </motion.svg>
                </Button>
            )
        }
    }
    return (
        <header className="h-16 flex items-center justify-between  top-0">
            <ul className="flex gap-4">
                <li><Link href="/" className="font-semibold">Home</Link></li>
                <li><Link href="projects" className="font-semibold">Projects</Link></li>
                <li><Link href="404" className="font-semibold">About</Link></li>
                <li className="flex items-center">
                    <Link href="https://github.com/orcrobert/portifolio-website" className="font-semibold flex items-center">
                        Source
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </Link>
                </li>
            </ul>
            {renderThemeChanger()}
        </header>
    )
}

export default Header;