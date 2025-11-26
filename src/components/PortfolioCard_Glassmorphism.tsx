import { Link } from "react-router-dom";
import type { PortfolioItem } from "../data/portfolio";

interface Props {
    item: PortfolioItem;
}

// 각 프로젝트별 테두리 색상 매핑
const borderColorMap: Record<string, string> = {
    "input 유효성 검사 라이브러리": "border-purple-400/50 hover:border-purple-500",
    "journee": "border-pink-400/50 hover:border-pink-500",
    "pooptime": "border-cyan-400/50 hover:border-cyan-500",
    "motooshoot": "border-orange-400/50 hover:border-orange-500",
    "portfolio": "border-violet-400/50 hover:border-violet-500",
};

// 각 프로젝트별 액센트 색상
const accentColorMap: Record<string, string> = {
    "input 유효성 검사 라이브러리": "bg-purple-500/20 text-purple-700",
    "journee": "bg-pink-500/20 text-pink-700",
    "pooptime": "bg-cyan-500/20 text-cyan-700",
    "motooshoot": "bg-orange-500/20 text-orange-700",
    "portfolio": "bg-violet-500/20 text-violet-700",
};

const PortfolioCard = ({ item }: Props) => {
    const borderColor = borderColorMap[item.id] || "border-blue-400/50 hover:border-blue-500";
    const accentColor = accentColorMap[item.id] || "bg-blue-500/20 text-blue-700";

    return (
        <Link
            to={`/project/${item.id}`}
            className={`group bg-white/40 backdrop-blur-xl border-2 ${borderColor} rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/60 flex flex-col h-full relative`}
        >
            {/* 배경 그라데이션 효과 */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="p-6 flex flex-col flex-grow relative z-10">
                <div className="flex justify-between items-center mb-3">
                    <span className={`text-xs font-bold ${accentColor} backdrop-blur-sm px-3 py-1 rounded-full`}>
                        {item.type}
                    </span>
                    <span className="text-xs text-gray-600">{item.period}</span>
                </div>
                <h4 className="text-2xl font-bold mb-3 text-gray-900 group-hover:scale-105 transition-transform">
                    {item.title}
                </h4>
                <p className="text-gray-700 text-sm line-clamp-2 mb-4 flex-grow leading-relaxed">
                    {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {item.techStack.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="text-xs bg-gray-900/10 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full font-medium border border-gray-300/30"
                        >
                            {tech}
                        </span>
                    ))}
                    {item.techStack.length > 3 && (
                        <span className="text-xs text-gray-500 px-2 py-1 font-medium">
                            +{item.techStack.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default PortfolioCard;
