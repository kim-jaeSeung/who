//! 경력
export interface CareerEntry {
  company: string;
  department: string;
  position: string;
  role: string;
  start_date: string;
  end_date: string;
  duration: string;
}
//! 경력
export interface CareerData {
  experience: CareerEntry[];
}

//! 경력기술서
export interface carrerInfo {
  name: string;
  url: string;
  period: string;
  role: string;
  team_size: number;
  responsibilities: string[]; //* 여러개의 문자열일때는 []로 감싸줌
  technologies: string[];
}

//! 자격증
export interface certificate {
  name: string;
  url: string;
  period: string;
  role: string;
  team_size: number;
  responsibilities: string[]; //* 여러개의 문자열일때는 []로 감싸줌
  technologies: string[];
}

//! 경력
export interface certificateData {
  qualifications: certificate[];
}
