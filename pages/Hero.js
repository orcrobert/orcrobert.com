import { Avatar, Badge, Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Hero = () => {
    const { systemTheme, theme } = useTheme();
    const currTheme = theme === "system" ? systemTheme : theme;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleViewCVClick = () => {
        window.location.href =
            "https://drive.google.com/file/d/1KKaIGXupNQwaWlS13F3rL59LUHqcFuL6/view?usp=sharing";
    };
    const handleWriteMeClick = () => {
        window.location.href = "mailto:robyorban@gmail.com";
    };

    const Badgecolor = () => {
        if (!mounted) return null;
        return (
            <Badge
                enableShadow
                disableOutline
                color={currTheme === "dark" ? "success" : "primary"}
                className="pr-3"
            >
                <Avatar
                    squared
                    size="md"
                    src="/images/avatar.png"
                    alt="profile-pic"
                />
            </Badge>
        );
    };

    return (
        <div className="relative group">
            <div
                className="
                h-auto w-full md:w-96 p-4 absolute inset-0
                bg-pink-400 dark:bg-purple-800 blur-xl transition ease-in-out
                md:hover:delay-75 md:group-hover:blur-3xl md:group-hover:scale-105
                "
                style={{ willChange: "filter, transform, background-color" }}
            ></div>
            <div
                className="
                rounded-lg h-auto w-full md:w-96 p-4 bg-gray-200 dark:bg-zinc-800
                shadow-md relative md:hover:transition md:hover:ease-in-out md:hover:delay-75
                md:hover:scale-105 dark:text-zinc-100"
        style={{ willChange: "filter, transform" }}
            >
                <div className="flex items-center">
                    {Badgecolor()}
                    <div className="pt-1">
                        <strong className="text-xl sm:text-2xl md:text-xl font-bold tracking-tight antialiased">
                            Orban Robert
                        </strong>
                        <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#78b13f" className="w-5 h-5 mr-1">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                            <h4 className="text-sm sm:text-base">Software Engineer</h4>
                        </div>
                    </div>
                </div>
                <div className="pt-5">
                    <p className="text-sm sm:text-base">
                        I'm a developer from Romania!
                    </p>
                </div>
                <div className="pt-3 font-semibold grid grid-cols-2 sm:grid-cols-2 divide-x sm:divide-y gap-2 sm:gap-6">
                    <Button
                        size="md"
                        auto
                        color="success"
                        id="hire"
                        onClick={handleViewCVClick}
                    >
                        <h4 className="text-zinc-100 font-bold">View CV</h4>
                    </Button>
                    <Button
                        size="md"
                        auto
                        color="primary"
                        id="contact"
                        onClick={handleWriteMeClick}
                    >
                        <h4 className="text-zinc-100 font-bold">Email me</h4>
                    </Button>
                </div>
            </div>
        </div>
    );
};


export default Hero;