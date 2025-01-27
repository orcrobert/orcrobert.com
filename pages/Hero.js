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
            "https://drive.google.com/file/d/1GXRc_yRcW72wQ9llxh1liuiXO2Xqs3z1/view?usp=drive_link";
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
            ></div>
            <div
                className="
          rounded-lg h-auto w-full md:w-96 p-4 bg-gray-200 dark:bg-zinc-800
          shadow-md relative md:hover:transition md:hover:ease-in-out md:hover:delay-75
          md:hover:scale-105 dark:text-zinc-100
        "
            >
                <div className="flex items-center">
                    {Badgecolor()}
                    <div className="pt-1">
                        <strong className="text-xl sm:text-2xl md:text-xl font-bold tracking-tight antialiased">
                            Orban Robert
                        </strong>
                        <div className="flex items-center">
                            {/* SVG Icon */}
                            <h4 className="text-sm sm:text-base">Software Developer</h4>
                        </div>
                    </div>
                </div>
                <div className="pt-5">
                    <p className="text-sm sm:text-base">
                        I'm a developer based in Romania!
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