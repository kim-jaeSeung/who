import type { PortfolioItem } from '../data/portfolio';
import { useEffect } from 'react';

interface Props {
    item: PortfolioItem;
    onClose: () => void;
}

const PortfolioModal = ({ item, onClose }: Props) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
            <div
                className="bg-white rounded-[32px] w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-fade-in-up flex flex-col"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors z-10 shadow-sm backdrop-blur-sm"
                >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="h-64 sm:h-80 bg-gray-100 relative shrink-0">
                    <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-8">
                        <div className="text-white">
                            <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block shadow-sm">{item.type}</span>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{item.title}</h2>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-8">
                        {item.techStack.map(tech => (
                            <span key={tech} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold border border-gray-200">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <p className="text-lg text-gray-700 mb-10 leading-relaxed font-medium">{item.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 p-6 bg-gray-50 rounded-2xl">
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-gray-900">프로젝트 정보</h4>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li className="flex"><span className="font-semibold text-gray-900 w-24 shrink-0">진행 기간</span> {item.period}</li>
                                <li className="flex"><span className="font-semibold text-gray-900 w-24 shrink-0">담당 역할</span> {item.role}</li>
                                {item.teamSize && <li className="flex"><span className="font-semibold text-gray-900 w-24 shrink-0">참여 인원</span> {item.teamSize}명</li>}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-gray-900">관련 링크</h4>
                            <div className="flex gap-4">
                                {item.links?.github && (
                                    <a href={item.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-primary hover:underline font-medium transition-colors">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.055-3.33 1.26-4.035-1.605-4.035-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.085-.75.09-.735.09-.735 1.2.09 1.83 1.245 1.83 1.245 1.065 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.225 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.66 1.695.255 2.925.135 3.225.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                                        GitHub 저장소
                                    </a>
                                )}
                                {item.links?.demo && (
                                    <a href={item.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-primary hover:underline font-medium transition-colors">
                                        <span>🔗</span> 데모 사이트
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mb-10">
                        <h4 className="font-bold text-lg mb-4 text-gray-900">주요 기능</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {item.details.map((detail, idx) => (
                                <div key={idx} className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h5 className="font-bold text-sm mb-1 text-primary">{detail.title}</h5>
                                    <p className="text-sm text-gray-600">{detail.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {item.learned && (
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-gray-900">배운 점</h4>
                            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    {item.learned.map((learn, idx) => (
                                        <li key={idx} className="leading-relaxed">{learn}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortfolioModal;
