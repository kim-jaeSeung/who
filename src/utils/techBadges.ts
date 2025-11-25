// Tech stack badge mapping
export const techBadges: Record<string, string> = {
    "React": "https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black",
    "TypeScript": "https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white",
    "JavaScript": "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
    "Next.js": "https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white",
    "TailwindCSS": "https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white",
    "HTML": "https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white",
    "CSS": "https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white",
    "Node.js": "https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white",
    "Express": "https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white",
    "NestJS": "https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white",
    "MySQL": "https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white",
    "PostgreSQL": "https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white",
    "Vite": "https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white",
};

export const getTechBadge = (tech: string): string => {
    return techBadges[tech] || `https://img.shields.io/badge/${tech}-3182F6?style=flat-square&logoColor=white`;
};
