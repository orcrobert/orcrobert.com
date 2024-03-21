import { useState } from 'react';

const SkillsComponent = () => {
    const [skills, setSkills] = useState([
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'HTML', level: 80 },
        { name: 'CSS', level: 75 },
        { name: 'Node.js', level: 70 },
        { name: 'Python', level: 65 },
        { name: 'SQL', level: 60 },
        { name: 'Git', level: 55 },
    ]);

    return (
        <div className="container mx-auto py-8">
            <h1 className="font-bold text-2xl tracking-tight antialiased
            underline decoration-dashed underline-offset-2 mb-4">My Programming Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-200 dark:bg-zinc-800 rounded-lg p-4">
                        <h2 className="text-xl font-semibold">{skill.name}</h2>
                        <div className="bg-gray-300 dark:bg-gray-600 h-2 mt-2 rounded-full">
                            <div
                                className="h-full bg-pink-400 dark:bg-purple-800 rounded-full"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Level: {skill.level}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsComponent;
