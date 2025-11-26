import { Link } from "react-router-dom";
import type { PortfolioItem } from "../data/portfolio";

interface Props {
  item: PortfolioItem;
}

// 각 프로젝트별 그라데이션 색상 매핑
const gradientMap: Record<string, string> = {
  "input 유효성 검사 라이브러리": "bg-gradient-to-br from-purple-500 to-indigo-600",
  "journee": "bg-gradient-to-br from-pink-500 to-rose-600",
  "pooptime": "bg-gradient-to-br from-cyan-500 to-blue-600",
  "motooshoot": "bg-gradient-to-br from-amber-500 to-orange-600",
  "portfolio": "bg-gradient-to-br from-violet-500 to-purple-600",
};

const PortfolioCard = ({ item }: Props) => {
  const gradient = gradientMap[item.id] || "bg-gradient-to-br from-blue-500 to-indigo-600";

  return (
    <Link
      to={`/project/${item.id}`}
      className={`group ${gradient} rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full min-h-[280px] relative`}
    >
      {/* 배경 장식 효과 */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-500" />

      <div className="p-8 flex flex-col flex-grow relative z-10">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            {item.type}
          </span>
          <span className="text-xs text-white/80">{item.period}</span>
        </div>
        <h4 className="text-2xl font-bold mb-4 text-white drop-shadow-lg group-hover:scale-105 transition-transform">
          {item.title}
        </h4>
        <p className="text-white/90 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {item.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
          {item.techStack.length > 3 && (
            <span className="text-xs text-white/70 px-2 py-1 font-medium">
              +{item.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
