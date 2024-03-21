import { useState } from 'react';

const SkillsComponent = () => {
    const [skills, setSkills] = useState([
        { name: 'Python', level: 90, experience: 4 },
        { name: 'Linux', level: 90, experience: 3 },
        { name: 'ReactJS', level: 90, experience: 2 },
        { name: 'C++', level: 80, experience: 5 },
        { name: 'C#', level: 80, experience: 5 },
        { name: 'Git', level: 75, experience: 2 },
        { name: 'JavaScript', level: 70, experience: 3 },
        { name: 'SQL', level: 70, experience: 4 },
        { name: 'Java', level: 65, experience: 4 },
    ]);

    return (
        <div className="container mx-auto py-8">
            <h1 className="font-bold text-xl tracking-tight antialiased
            underline decoration-dashed underline-offset-2 mb-4">My Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-200 dark:bg-zinc-800 rounded-lg p-4 transform transition-transform hover:scale-110">
                        <h2 className="text-md font-semibold">{skill.name}</h2>
                        <div className="bg-gray-300 dark:bg-gray-600 h-2 mt-2 rounded-full">
                            <div
                                className="h-full bg-pink-400 dark:bg-purple-800 rounded-full"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Level: {skill.level}%</p>
                        <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">Experience: {skill.experience} years</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsComponent;
