export interface PortfolioItem {
    id: string;
    title: string;
    type: string;
    period: string;
    description: string;
    techStack: string[];
    role?: string;
    details: { title: string; content: string }[];
    learned?: string[];
    imgSrc: string;
    links?: {
        github?: string;
        demo?: string;
    };
    teamSize?: number;
}

export const portfolioData: PortfolioItem[] = [
    {
        id: "journee",
        title: "Journee",
        type: "팀 프로젝트",
        period: "8주",
        description: "여행 계획 간소화 및 국내 여행 독려를 위한 웹 애플리케이션",
        techStack: ["React", "Node.js", "Express", "MySQL"],
        role: "팀장, 프론트엔드, 백엔드",
        teamSize: 6,
        details: [
            { title: "로그인 / 회원가입", content: "JWT 인증을 활용한 보안성 있는 사용자 인증 구현" },
            { title: "지역 선택 기능", content: "사용자가 원하는 지역명을 직접 선택하여 여행지 탐색" },
            { title: "커뮤니티 기능", content: "여행 팁, 일정 공유 게시판 (CRUD 완비)" },
            { title: "랜덤 여행지 추천", content: "룰렛 형태의 인터랙션을 통한 랜덤 국내 여행지 추천" },
            { title: "여행 계획 저장", content: "여행 일정 선택 및 확정 저장 기능" },
            { title: "KakaoMap 연동", content: "장소 검색 및 마커/지도 뷰 연동" }
        ],
        learned: [
            "React 기반 SPA 구조 및 컴포넌트 설계 학습",
            "GitHub, Figma 등 협업 도구를 통한 체계적인 개발 진행",
            "팀장으로서 프로젝트 관리 및 팀원 간의 원활한 소통 경험"
        ],
        imgSrc: "/who/img/JournnePo.svg",
        links: {
            github: "https://github.com/orgs/ShiftLeftt/repositories"
        }
    },
    {
        id: "pooptime",
        title: "풉타임",
        type: "팀 프로젝트",
        period: "5주",
        description: "화장실에서 보내는 시간을 즐겁게 만드는 모바일 웹 애플리케이션",
        techStack: ["React", "TailwindCSS", "Node.js", "Express", "MySQL"],
        role: "팀원",
        teamSize: 5,
        details: [
            { title: "재미 콘텐츠", content: "퀴즈, 상식, 괴담, 유머 등 다양한 콘텐츠 제공" },
            { title: "커뮤니티", content: "사용자 간 소통을 위한 게시판 기능" },
            { title: "로그인", content: "개인화된 콘텐츠 제공을 위한 인증 시스템" }
        ],
        learned: [
            "직접 데이터를 가공하여 REST API를 통해 콘텐츠를 제공하는 방법 학습",
            "팀원들과의 협업을 통해 다양한 기술 스택 활용 경험"
        ],
        imgSrc: "/who/img/poopPo.svg",
        links: {
            github: "https://github.com/kim-jaeSeung/poop"
        }
    },
    {
        id: "motooshoot",
        title: "모투슛",
        type: "팀 프로젝트",
        period: "4주",
        description: "초보자를 위한 주식 모의 투자 및 학습 웹앱",
        techStack: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "NestJS", "PostgreSQL"],
        role: "프론트엔드 & 백엔드",
        teamSize: 4,
        details: [
            { title: "주식 데이터 제공", content: "공공 API 활용 주식 가격, 거래량 데이터 제공" },
            { title: "매도/매수 기능", content: "초보자도 이해하기 쉬운 모의 거래 기능" },
            { title: "관심 종목 북마크", content: "로그인 사용자 대상 관심 종목 저장 기능" },
            { title: "투자 내역 확인", content: "자신의 투자 성과 및 내역 확인" },
            { title: "대출 기능", content: "재미 요소를 위한 가상 대출 및 이자 관리" }
        ],
        learned: [
            "외부 API 로딩 속도 문제 해결을 위한 백엔드 캐싱 및 DB 저장 구조 도입",
            "프론트엔드/백엔드 성능 최적화 경험"
        ],
        imgSrc: "/who/img/motooPo.svg",
        links: {
            github: "https://github.com/kdt-ful-class-three-group/KDT-FUL-3_PROJECT-A-2"
        }
    },
    {
        id: "portfolio",
        title: "나의 포트폴리오",
        type: "개인 프로젝트",
        period: "2025.05.01 ~ 진행중",
        description: "개인 기술 스택과 프로젝트 경험을 소개하는 포트폴리오 사이트",
        techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
        role: "1인 개발",
        teamSize: 1,
        details: [
            { title: "데이터 구조화", content: "JSON/TS 기반 데이터 관리로 유지보수 용이성 확보" },
            { title: "모던 UI/UX", content: "Toss 스타일의 깔끔하고 직관적인 디자인 구현" },
            { title: "반응형 디자인", content: "모바일 및 데스크탑 환경 최적화" }
        ],
        learned: [
            "React + TypeScript + TailwindCSS 최신 스택 활용",
            "컴포넌트 재사용성 및 데이터 주도 UI 설계"
        ],
        imgSrc: "/who/img/myPagePo.svg",
        links: {
            github: "https://github.com/kim-jaeSeung/who"
        }
    }
];
