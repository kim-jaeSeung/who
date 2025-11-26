import { portfolioData } from "../data/portfolio";
import PortfolioCard from "./PortfolioCard_Glassmorphism";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 border-t border-gray-100 relative overflow-hidden">
      {/* 장식 요소 - 다양한 크기의 원형들 */}
      <div className="absolute top-10 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-2xl" />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full" />
      <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full blur-xl" />

      <div className="flex flex-col md:flex-row justify-between items-end mb-10">
        <div>
          <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">
            Projects
          </span>
          <h3 className="text-3xl font-bold text-gray-900">Portfolio</h3>
        </div>
        <p className="text-gray-500 mt-4 md:mt-0 max-w-md text-right">
          최신 기술 스택을 활용하여 만든 프로젝트들입니다.
          <br />
          카드를 클릭하여 상세 내용을 확인해보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
