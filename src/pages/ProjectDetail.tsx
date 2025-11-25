import { useParams, useNavigate } from "react-router-dom";
import { portfolioData } from "../data/portfolio";
import { getTechBadge } from "../utils/techBadges";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const currentIndex = portfolioData.findIndex((project) => project.id === id);
  const item = portfolioData[currentIndex];

  const prevProject = currentIndex > 0 ? portfolioData[currentIndex - 1] : null;
  const nextProject =
    currentIndex < portfolioData.length - 1
      ? portfolioData[currentIndex + 1]
      : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <main className="max-w-screen-lg mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            프로젝트를 찾을 수 없습니다
          </h2>
          <button
            onClick={() => navigate("/")}
            className="text-primary hover:underline"
          >
            홈으로 돌아가기
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-screen-lg mx-auto px-6 pb-20 pt-24">
      {/* 뒤로가기 버튼 */}
      <div className="pb-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium">뒤로가기</span>
        </button>
      </div>

      {/* 프로젝트 헤더 이미지 */}
      <div className="h-64 sm:h-96 bg-gray-100 rounded-3xl overflow-hidden relative mb-10">
        <img
          src={item.imgSrc}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-8">
          <div className="text-white">
            <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block shadow-sm">
              {item.type}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              {item.title}
            </h1>
          </div>
        </div>
      </div>

      {/* 기술 스택 */}
      <div className="flex flex-wrap gap-2 mb-10">
        {item.techStack.map((tech) => (
          <img key={tech} src={getTechBadge(tech)} alt={tech} className="h-6" />
        ))}
      </div>

      {/* 프로젝트 설명 */}
      <p className="text-xl text-gray-700 mb-12 leading-relaxed font-medium">
        {item.description}
      </p>

      {/* 프로젝트 정보 & 링크 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-8 bg-gray-50 rounded-3xl">
        <div>
          <h3 className="font-bold text-xl mb-6 text-gray-900">
            프로젝트 정보
          </h3>
          <ul className="space-y-4 text-gray-600">
            <li className="flex">
              <span className="font-semibold text-gray-900 w-28 shrink-0">
                진행 기간
              </span>
              <span>{item.period}</span>
            </li>
            <li className="flex">
              <span className="font-semibold text-gray-900 w-28 shrink-0">
                담당 역할
              </span>
              <span>{item.role}</span>
            </li>
            {item.teamSize && (
              <li className="flex">
                <span className="font-semibold text-gray-900 w-28 shrink-0">
                  참여 인원
                </span>
                <span>{item.teamSize}명</span>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-6 text-gray-900">관련 링크</h3>
          <div className="flex flex-col gap-4">
            {item.links?.github && (
              <a
                href={item.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-primary hover:underline font-medium transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.055-3.33 1.26-4.035-1.605-4.035-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.085-.75.09-.735.09-.735 1.2.09 1.83 1.245 1.83 1.245 1.065 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.225 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.66 1.695.255 2.925.135 3.225.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub 저장소
              </a>
            )}
            {item.links?.demo && (
              <a
                href={item.links.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-primary hover:underline font-medium transition-colors"
              >
                <span className="text-xl ">
                  <img className="w-6" src="/who/img/npmLogo.svg" alt="" />
                </span>
                NPM 사이트
              </a>
            )}
          </div>
        </div>
      </div>

      {/* 주요 기능 */}
      <div className="mb-12">
        <h3 className="font-bold text-2xl mb-6 text-gray-900">주요 기능</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {item.details.map((detail, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="font-bold text-base mb-2 text-primary">
                {detail.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {detail.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 배운 점 */}
      {item.learned && (
        <div className="mb-12">
          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-200">
            <ul className="list-disc list-inside space-y-3 text-gray-800 text-base">
              {item.learned.map((learn, idx) => (
                <li key={idx} className="leading-relaxed">
                  {learn}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 하단 네비게이션 */}
      <div className="pt-8 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* 이전 프로젝트 */}
          <div className="w-full sm:w-auto">
            {prevProject ? (
              <button
                onClick={() => navigate(`/project/${prevProject.id}`)}
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group w-full sm:w-auto"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400 mb-1">
                    이전 프로젝트
                  </div>
                  <div className="font-medium">{prevProject.title}</div>
                </div>
              </button>
            ) : (
              <div className="w-full sm:w-32" />
            )}
          </div>

          {/* 목록으로 */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors px-4 py-2 border border-gray-200 rounded-lg hover:border-primary"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="font-medium">목록</span>
          </button>

          {/* 다음 프로젝트 */}
          <div className="w-full sm:w-auto">
            {nextProject ? (
              <button
                onClick={() => navigate(`/project/${nextProject.id}`)}
                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group w-full sm:w-auto justify-end"
              >
                <div className="text-right">
                  <div className="text-xs text-gray-400 mb-1">
                    다음 프로젝트
                  </div>
                  <div className="font-medium">{nextProject.title}</div>
                </div>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            ) : (
              <div className="w-full sm:w-32" />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
