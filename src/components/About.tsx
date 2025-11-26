const About = () => {
    return (
        <section id="about" className="py-20 border-t border-gray-100 relative overflow-hidden">
            {/* 장식 요소 - 반원과 원형 조합 */}
            <div className="absolute top-10 left-0 w-40 h-40 bg-gradient-to-br from-gray-200/40 to-gray-300/20 rounded-full -translate-x-1/2" />
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-tl from-blue-100/30 to-purple-100/20 rounded-full translate-x-1/4" />
            <div className="absolute top-1/2 right-0 w-32 h-32 bg-gray-200/30 rounded-full translate-x-1/2" />

            <h3 className="text-3xl font-bold mb-10 relative z-10">About Me</h3>
            <div className="text-lg text-gray-600 leading-loose max-w-3xl relative z-10">
                <p className="mb-6">
                    웹 퍼블리셔로 시작하여 웹 인터페이스 구현에 집중해왔습니다.
                    현재는 기술의 흐름에 맞춰 <strong className="text-text font-semibold">프론트엔드와 백엔드 전반</strong>에 대한 지식과 실습을 통해 개발 역량을 넓히고 있습니다.
                </p>
                <p>
                    단순한 기능 구현을 넘어, <strong className="text-text font-semibold">문제 해결 능력</strong>과 <strong className="text-text font-semibold">설계 역량</strong>을 갖춘 주도적인 개발자로 성장하는 것을 목표로 끊임없이 학습하고 있습니다.
                </p>
            </div>
        </section>
    );
};

export default About;

