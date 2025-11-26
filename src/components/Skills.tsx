const Skills = () => {
    const skills = {
        "Frontend": [
            { name: "React", badge: "https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" },
            { name: "TypeScript", badge: "https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" },
            { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" },
            { name: "Next.js", badge: "https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white" },
            { name: "TailwindCSS", badge: "https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" },
            { name: "HTML/CSS", badge: "https://img.shields.io/badge/HTML/CSS-E34F26?style=flat-square&logo=html5&logoColor=white" }
        ],
        "Backend": [
            { name: "Node.js", badge: "https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" },
            { name: "Express", badge: "https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white" },
            { name: "NestJS", badge: "https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white" }
        ],
        "Database": [
            { name: "MySQL", badge: "https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" },
            { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" }
        ],
        "Tools": [
            { name: "Git", badge: "https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" },
            { name: "GitHub", badge: "https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" },
            { name: "Figma", badge: "https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white" },

        ]
    };

    return (
        <section id="skills" className="py-20 border-t border-gray-100 relative overflow-hidden">
            {/* 장식 요소 - 사각형과 원형 조합 */}
            <div className="absolute top-20 right-20 w-24 h-24 bg-cyan-100/40 rounded-lg rotate-12" />
            <div className="absolute top-40 left-10 w-36 h-36 bg-purple-100/30 rounded-full blur-xl" />
            <div className="absolute bottom-20 right-40 w-28 h-28 bg-pink-100/30 rounded-lg -rotate-6" />
            <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-blue-100/40 rounded-full" />

            <div className="mb-10 relative z-10">
                <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Skills</span>
                <h3 className="text-3xl font-bold text-gray-900">기술 스택</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-toss transition-shadow">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                            {items.map(skill => (
                                <img
                                    key={skill.name}
                                    src={skill.badge}
                                    alt={skill.name}
                                    className="h-6"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
