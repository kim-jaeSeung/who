import { Link } from "react-router-dom";
import type { PortfolioItem } from "../data/portfolio";

interface Props {
  item: PortfolioItem;
}

const PortfolioCard = ({ item }: Props) => {
  return (
    <Link
      to={`/project/${item.id}`}
      className="group bg-white rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-toss hover:-translate-y-1 border border-gray-100 flex flex-col h-full"
    >
      {/* <div className="h-48 bg-gray-100 overflow-hidden relative">
        <img
          src={item.imgSrc}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div> */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-1 rounded-md">
            {item.type}
          </span>
          <span className="text-xs text-gray-400">{item.period}</span>
        </div>
        <h4 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
          {item.title}
        </h4>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {item.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-medium"
            >
              {tech}
            </span>
          ))}
          {item.techStack.length > 3 && (
            <span className="text-xs text-gray-400 px-2 py-1 font-medium">
              +{item.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
