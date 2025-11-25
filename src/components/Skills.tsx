const Skills = () => {
    const skills = {
        "Frontend": ["React", "TypeScript", "JavaScript", "Next.js", "TailwindCSS", "HTML/CSS"],
        "Backend": ["Node.js", "Express", "NestJS"],
        "Database": ["MySQL", "PostgreSQL"],
        "Tools": ["Git", "GitHub", "Figma", "Vite"]
    };

    return (
        <section id="skills" className="py-20 border-t border-gray-100">
            <div className="mb-10">
                <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Skills</span>
                <h3 className="text-3xl font-bold text-gray-900">기술 스택</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-toss transition-shadow">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                            {items.map(skill => (
                                <span key={skill} className="px-3 py-1.5 bg-blue-50 text-primary rounded-lg text-sm font-semibold border border-blue-100">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
