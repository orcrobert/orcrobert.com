import { useState } from 'react';

const SkillsComponent = () => {
    const [skills, setSkills] = useState([
        { name: 'Python', level: 90, experience: 4, link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/230px-Python-logo-notext.svg.png?20220821155029"' },
        { name: 'Linux', level: 90, experience: 3, link: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg' },
        { name: 'ReactJS', level: 90, experience: 2, link: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
        { name: 'C++', level: 80, experience: 5, link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/612px-ISO_C%2B%2B_Logo.svg.png?20170928190710' },
        { name: 'C#', level: 80, experience: 5, link: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg' },
        { name: 'Git', level: 75, experience: 2, link: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg' },
        { name: 'JavaScript', level: 70, experience: 3, link: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
        { name: 'SQL', level: 70, experience: 4, link: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' },
        { name: 'Java', level: 65, experience: 4, link: 'https://www.svgrepo.com/show/184143/java.svg' },
    ]);

    return (
        <div className="container mx-auto py-8">
            <h1 className="font-bold text-xl tracking-tight antialiased
            underline decoration-dashed underline-offset-2 mb-4">My Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-200 dark:bg-zinc-800 rounded-lg p-4 transform transition-transform hover:scale-110">
                        <div className="flex items-center gap-3"> {/* Using flexbox to align items */}
                            <h2 className="text-md font-semibold">{skill.name}</h2>
                            <img src={skill.link} alt={skill.name} className="w-5 h-5" />
                        </div>
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
