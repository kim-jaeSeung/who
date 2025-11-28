export interface PortfolioItem {
  id: string;
  title: string;
  type: string;
  period: string;
  description: string;
  techStack: string[];
  role?: string;
  responsibilities?: {
    frontend?: string[];
    backend?: string[];
    other?: string[];
  };
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
    id: "input 유효성 검사 라이브러리",
    title: "input 유효성 검사 라이브러리",
    type: "오픈소스",
    period: "1주",
    description:
      "React와 바닐라 JavaScript에서 사용 가능한 input 검증 NPM 라이브러리",
    techStack: ["TypeScript", "Rollup", "NPM", "React"],
    role: "1인 개발 & 배포",
    teamSize: 1,
    details: [
      {
        title: "15+ 검증 함수",
        content:
          "이메일, 전화번호, 비밀번호, 신용카드 등 다양한 검증 규칙 제공",
      },
      {
        title: "React Hooks",
        content: "useValidator, useForm 훅으로 간편한 폼 검증 구현",
      },
      { title: "다국어 지원", content: "한글/영어 에러 메시지 자동 전환" },
      {
        title: "TypeScript 지원",
        content: "완전한 타입 정의로 개발 경험 향상",
      },
      { title: "경량 라이브러리", content: "14KB의 최적화된 번들 크기" },
      { title: "모듈 시스템", content: "CommonJS/ESM 빌드로 다양한 환경 지원" },
    ],
    learned: [
      "NPM 패키지 배포 및 오픈소스 관리 경험",
      "Rollup을 활용한 라이브러리 빌드 최적화",
      "TypeScript로 타입 안전한 API 설계",
      "React Hooks 패턴을 활용한 재사용 가능한 로직 구현",
    ],
    imgSrc: "/who/img/npmLogo.svg",
    links: {
      github: "https://github.com/kim-jaeSeung/npm-validator",
      demo: "https://www.npmjs.com/package/kr-js-input-validator",
    },
  },
  {
    id: "journee",
    title: "Journee",
    type: "팀 프로젝트",
    period: "8주",
    description: "국내 여행 수요가 증가하고 있지만 여행 계획 과정은 여전히 복잡하다는 문제에서 출발한 프로젝트입니다. 사용자는 지역·테마·선호도에 맞는 여행지를 쉽게 탐색하고, 일정 저장 및 커뮤니티 기능을 통해 여행 준비 시간을 줄일 수 있도록 기획했습니다.",
    techStack: ["React", "Node.js", "Express", "MySQL"],
    role: "팀장 / 프론트엔드, 백엔드",
    teamSize: 6,
    responsibilities: {
      frontend: [
        "커뮤니티 페이지 전체 UI/UX 설계 및 구현",
        "게시글 목록, 상세, 작성 컴포넌트를 모듈화",
        "Axios 기반 API 연동 및 에러 핸들링 구조 구성",
        "React Router를 활용한 SPA 구조 설계",
        "버튼, 입력 폼, 카드 등 공통 컴포넌트 설계로 개발 효율 향상",
      ],
      backend: [
        "커뮤니티 게시판 REST API 전반 개발 (CRUD 완비)",
        "게시글 및 사용자 테이블 구조 설계",
        "ORM을 활용한 DB 연동 및 데이터 모델 구현",
        "요청 검증, 에러 처리, 권한 검증 로직 구성",
        "필요한 필드만 select하고 페이지네이션을 적용하여 응답 효율 개선",
      ],
      other: [
        "8주간의 프로젝트 일정 총괄 및 스프린트 계획 수립",
        "역할 분배, 회의 주도, 기능 개발 방향 조율",
        "Git Flow 전략 도입 및 Pull Request 리뷰 프로세스 운영",
        "Figma를 활용한 UI 구조 설계 및 팀 공유 문서 체계화",
      ],
    },
    details: [
      {
        title: "로그인 / 회원가입 및 JWT 인증",
        content: "JWT 기반 인증 구조 설계. Access Token, Refresh Token 전략을 활용해 안정적인 인증 환경 제공. 토큰 만료, 변조 등 예외 처리 및 인증 미들웨어 구현",
      },
      {
        title: "지역 선택 기반 여행지 탐색",
        content: "전국 17개 시·도 기준 지역 선택 및 검색 기능 구현. 지역별 필터링 및 카테고리 기반 API 설계. UI 컴포넌트 재사용성을 고려한 화면 구조 구성",
      },
      {
        title: "커뮤니티 기능 (CRUD)",
        content: "여행 팁 공유 및 일정 공유를 위한 게시판 기능 구현. 게시글 목록 → 상세 → 작성/수정까지 전체 흐름 개발. 페이지네이션, 조회수 증가, 입력 검증 등 실사용 환경 고려. RESTful API 원칙을 기반으로 유지보수성을 높인 API 작성",
      },
      {
        title: "랜덤 여행지 추천 (룰렛 기능)",
        content: "간단한 룰렛 형태의 랜덤 여행지 추천 기능 구현. 매번 다른 여행지가 선정될 수 있도록 랜덤 알고리즘 구성. 여행지 목록과 추천 기능을 쉽게 연결할 수 있도록 구조화",
      },
      {
        title: "여행 계획 저장",
        content: "사용자가 선택한 일정 정보를 저장하는 기능 구현. 저장된 일정 조회 및 수정 API 제공. 사용자 맞춤형 일정 관리 흐름 설계",
      },
      {
        title: "KakaoMap 연동",
        content: "장소 검색 및 마커 표시 기능 구현. 지도 중심 이동, 지도 범위 자동 맞춤 등 KakaoMap API 기능 활용. 검색 결과와 지도 뷰를 연계하여 상호작용 기반 UI 제작",
      },
    ],
    learned: [
      "React 기반 SPA 구조와 컴포넌트 설계 능력 향상",
      "REST API 설계 및 서버·클라이언트 간 데이터 흐름 이해",
      "JWT 기반 인증 방식과 보안 대응 전략 학습",
      "GitHub, Figma, Notion을 활용한 협업 체계 구축 경험",
      "팀장으로서 일정 조정, 코드 리뷰, 협업 갈등 조정 등 프로젝트 관리 능력 강화",
    ],
    imgSrc: "/who/img/JournnePo.svg",
    links: {
      github: "https://github.com/orgs/ShiftLeftt/repositories",
    },
  },
  {
    id: "pooptime",
    title: "풉타임",
    type: "팀 프로젝트",
    period: "5주",
    description:
      "일상 속 짧은 공백 시간, 특히 화장실에서 잠깐 머무르는 시간을 보다 즐겁고 유익하게 보낼 수 있도록 기획한 모바일 웹 애플리케이션입니다. 퀴즈, 유머, 짧은 괴담 등 가볍게 소비할 수 있는 콘텐츠를 제공하며, 사용자 간 의견을 나눌 수 있는 간단한 커뮤니티 기능을 함께 구성했습니다.",
    techStack: ["React", "TailwindCSS", "Node.js", "Express", "MySQL"],
    role: "팀원 / 프론트엔드 및 백엔드 일부 담당",
    teamSize: 5,
    responsibilities: {
      frontend: [
        "콘텐츠 목록 및 상세 페이지 UI 구현",
        "모바일 환경 중심의 반응형 레이아웃 구성",
        "REST API 연동 및 간단한 상태 관리 기능 구현",
        "사용자가 콘텐츠를 빠르게 탐색할 수 있도록 화면 구조 정리",
      ],
      backend: [
        "직접 제작한 콘텐츠 데이터를 서버에서 REST API 형태로 제공",
        "간단한 데이터 모델 정의 및 라우팅 설계",
        "팀원들과 서로 다른 API 구현 방식을 비교하며 개선점 도출",
      ],
      other: [
        "모든 팀원이 동일한 기능을 각자의 방식으로 구현하여 다양한 기술 스택을 경험",
        "GitHub을 활용한 버전 관리, 코드 리뷰, 충돌 해결 등의 협업 프로세스 경험",
        "구현 방식의 차이를 분석하며 유지보수성과 구조적 설계의 중요성 체득",
      ],
    },
    details: [
      {
        title: "재미 콘텐츠 제공",
        content: "퀴즈, 상식, 유머, 짧은 괴담 등 다양한 유형의 콘텐츠 제공. 직접 수집 및 가공한 데이터를 JSON 형태로 정리하여 REST API로 제공. 짧은 시간 안에 빠르게 소비할 수 있는 콘텐츠 구조 설계",
      },
      {
        title: "커뮤니티 기능",
        content: "사용자 간 의견 공유를 위한 기본 게시판 기능 구현. 게시글 등록, 조회, 수정, 삭제 등 CRUD의 기본 흐름 학습. 팀원들과 구현 방식을 비교하며 구조적 차이를 분석",
      },
      {
        title: "로그인 및 인증",
        content: "기본적인 로그인 기능 구현. 인증된 사용자에게 더 개인화된 콘텐츠 흐름 제공. 사용자 및 세션 관리의 기초 개념 이해",
      },
    ],
    learned: [
      "콘텐츠 데이터를 직접 구조화하며 백엔드 기본 개념을 확실히 이해",
      "동일한 기능도 개발 방식에 따라 구조가 크게 달라질 수 있다는 점을 경험",
      "모바일 UI 중심의 웹 화면 구성 경험",
      "API 연동, 라우팅, 상태 관리 등 프론트엔드와 백엔드를 모두 경험하며 전체 개발 흐름에 대한 이해도 향상",
    ],
    imgSrc: "/who/img/poopPo.svg",
    links: {
      github: "https://github.com/kim-jaeSeung/poop",
    },
  },
  {
    id: "motooshoot",
    title: "모투슛",
    type: "팀 프로젝트",
    period: "4주",
    description: "주식 투자를 처음 접하는 사용자가 실제 돈을 사용하지 않고도 투자 원리를 이해할 수 있도록 설계된 모의 투자 웹 애플리케이션입니다. 공공 API를 기반으로 한 주식 데이터 제공, 초보자도 쉽게 사용할 수 있는 매수·매도 기능, 투자 결과 확인 기능 등을 통해 학습 중심의 경험을 제공합니다. 또한 재미 요소로 가상 대출 기능을 추가하여 사용자 참여도를 높였습니다.",
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "NestJS",
      "PostgreSQL",
    ],
    role: "프론트엔드, 백엔드",
    teamSize: 4,
    responsibilities: {
      frontend: [
        "메인 페이지에서 실시간 주가 데이터 표시 UI 구현",
        "관심 종목 페이지 및 사용자별 즐겨찾기 기능 개발",
        "차트 라이브러리를 활용해 주가 변화 추이를 시각적으로 표현",
        "API 데이터 로딩 처리, 오류 처리, 조건부 렌더링 등 사용자 경험 개선",
        "반응형 UI 구성 및 간결한 컴포넌트 설계",
      ],
      backend: [
        "종목 데이터, 관심 종목, 투자 내역 등을 관리하는 DB 테이블 설계 및 구현",
        "공공 API 호출을 통한 주식 데이터 수집 및 정제",
        "이틀치 데이터를 비교하여 변동 여부 계산 및 결과 제공",
        "랜덤 요소를 활용해 실전과 유사한 주가 시뮬레이션 데이터 구성",
        "API 응답 지연 문제를 해결하기 위해 캐싱 및 DB 저장 구조 도입",
        "프론트엔드 로딩 시간을 줄이기 위한 응답 최적화",
      ],
    },
    details: [
      {
        title: "주식 데이터 제공",
        content: "공공 주식 API를 활용하여 종목별 가격·거래량 등 핵심 데이터 제공. 데이터 변동성을 학습하기 위한 기초 자료 확보. Backend 단에서 API 호출 결과를 정리해 클라이언트에 최적화된 데이터 형태로 전달",
      },
      {
        title: "매도/매수 기능 (모의 투자)",
        content: "초보자도 이해할 수 있는 간단한 매수·매도 UX 설계. 사용자의 가상 잔액 변화 및 보유 종목 실시간 반영. 데이터 검증 로직을 통해 비정상 거래 방지",
      },
      {
        title: "관심 종목 북마크",
        content: "로그인한 사용자가 관심 종목을 저장하고 빠르게 조회할 수 있는 기능 제공. 사용자의 투자 성향을 파악하는 기반 기능으로 활용",
      },
      {
        title: "투자 내역 확인",
        content: "일별 수익률, 누적 투자 금액, 평가 손익 등을 시각적으로 확인 가능. 모의 투자 이후 사용자가 스스로 투자 전략을 분석할 수 있도록 구성",
      },
      {
        title: "가상 대출 기능",
        content: "재미 요소 및 학습 효과 강화를 위해 가상 대출 기능 제공. 대출 이자, 상환 흐름 등을 관리하며 기본적인 금융 개념 학습 가능. 가상 포트폴리오 성장 또는 위험 요소 체험에 활용",
      },
    ],
    learned: [
      "실시간 데이터 기반 UI 구성 경험",
      "외부 API 사용 시 병목 구간을 파악하고 캐싱 전략을 도입한 경험",
      "데이터 처리 로직을 백엔드에서 수행해 클라이언트 부담을 줄이는 설계 학습",
      "차트, 데이터 시각화, 반응형 UI 등 프론트엔드 활용 범위 확장",
      "모의 투자 흐름을 설계하며 금융 도메인 구조 이해",
      "프론트엔드·백엔드를 아우르는 통합 개발 경험 확보",
    ],
    imgSrc: "/who/img/motooPo.svg",
    links: {
      github:
        "https://github.com/kdt-ful-class-three-group/KDT-FUL-3_PROJECT-A-2",
    },
  },
  {
    id: "portfolio",
    title: "나의 포트폴리오",
    type: "개인 프로젝트",
    period: "1주",
    description: "개인 기술 스택과 프로젝트 경험을 소개하는 포트폴리오 사이트입니다. JSON 및 TypeScript 기반으로 데이터를 구조화하여 유지보수성과 확장성을 확보하고, React와 TailwindCSS를 활용하여 모던하고 직관적인 UI/UX를 구현했습니다.",
    techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
    role: "1인 개발",
    teamSize: 1,
    responsibilities: {
      frontend: [
        "UI 컴포넌트 구조 설계 및 구현",
        "JSON/TS 기반 데이터 관리 구조 개발",
        "페이지 라우팅 및 컴포넌트 재사용성 중심의 설계",
        "반응형 스타일링 및 TailwindCSS 커스텀 설정",
        "프로젝트 유지보수 및 기능 확장 진행 중",
      ],
    },
    details: [
      {
        title: "데이터 구조화",
        content: "JSON 및 TypeScript 기반으로 프로젝트 데이터와 컴포넌트를 구조화하여 유지보수성과 확장성을 확보함",
      },
      {
        title: "모던 UI/UX 구현",
        content: "깔끔하고 직관적인 사용자 경험을 목표로 전체 페이지 레이아웃을 설계하고, 시각적 일관성을 유지하는 디자인 시스템을 구축함",
      },
      {
        title: "반응형 디자인",
        content: "모바일, 태블릿, 데스크탑 환경에 최적화된 반응형 UI를 구현하여 다양한 디바이스에서도 안정적인 접근성을 제공함",
      },
      {
        title: "기술 스택 기반 구성",
        content: "React, TypeScript, TailwindCSS를 활용하여 컴포넌트 재사용성을 높이고 데이터 기반 UI를 효율적으로 구성함",
      },
    ],
    learned: [
      "React + TypeScript + TailwindCSS 최신 스택 활용",
      "컴포넌트 재사용성 및 데이터 주도 UI 설계",
      "반응형 디자인 및 사용자 경험 최적화",
    ],
    imgSrc: "/who/img/myPagePo.svg",
    links: {
      github: "https://github.com/kim-jaeSeung/who",
    },
  },
];
