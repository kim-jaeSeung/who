const Hero = () => {
    return (
        <section className="pt-40 pb-20 flex flex-col justify-center min-h-[60vh] relative overflow-hidden">
            {/* 장식 요소 - 원형 */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute top-40 right-40 w-32 h-32 bg-purple-500/10 rounded-full" />
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl" />

            <span className="text-primary font-bold text-lg mb-4 block animate-fade-in-up relative z-10">Web Developer</span>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-gray-900 relative z-10">
                Building <br />
                <span className="text-primary">Digital Experiences</span>
            </h2>
            <p className="text-xl text-subText max-w-2xl leading-relaxed relative z-10">
                안녕하세요, 웹 개발자 <b>김재승</b>입니다.<br />
                사용자 중심의 인터페이스와 견고한 시스템을 설계합니다.
            </p>
        </section>
    );
};

export default Hero;

