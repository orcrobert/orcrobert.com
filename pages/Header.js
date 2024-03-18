import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Header = () => {

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const renderThemeChanger = () => {

        if(!mounted)
            return null;

        const currTheme = theme === 'system' ? systemTheme : theme;

        if (currTheme === 'light'){       
            return (
                <Button className={"bg-gray-200 shadow-sm opacity-75"} onClick={() => setTheme('dark')}
                    id="theme-changer">
                    <motion.svg whileHover={{
                        position: 'relative',
                        zIndex: 1,
                        scale: [1, 1.4, 1.2],
                        rotate: [0, 15, -15, 0],
                        transition: {
                            duration: .3
                        }}} class="w-5 h-5" exit={{inactive: true}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                        </svg>
                    </motion.svg>
                </Button>
            )
        }
        else{
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
                        }}} class="w-5 h-5" exit={{inactive: true}}>
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
                <li><Link href="/" className="font-semibold">About</Link></li>
            </ul>
            {renderThemeChanger()}
        </header>
    )
}
 
export default Header;