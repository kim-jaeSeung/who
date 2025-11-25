import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import type { PortfolioItem } from '../data/portfolio';
import PortfolioCard from './PortfolioCard';
import PortfolioModal from './PortfolioModal';

const PortfolioSection = () => {
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

    return (
        <section id="portfolio" className="py-20 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                <div>
                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Projects</span>
                    <h3 className="text-3xl font-bold text-gray-900">Portfolio</h3>
                </div>
                <p className="text-gray-500 mt-4 md:mt-0 max-w-md text-right">
                    최신 기술 스택을 활용하여 만든 프로젝트들입니다.<br />
                    카드를 클릭하여 상세 내용을 확인해보세요.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.map((item) => (
                    <PortfolioCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
                ))}
            </div>
            {selectedItem && (
                <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
            )}
        </section>
    );
};

export default PortfolioSection;
