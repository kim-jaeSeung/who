const Hero = () => {
    return (
        <section className="pt-40 pb-20 flex flex-col justify-center min-h-[60vh]">
            <span className="text-primary font-bold text-lg mb-4 block animate-fade-in-up">Web Developer</span>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-gray-900">
                Building <br />
                <span className="text-primary">Digital Experiences</span>
            </h2>
            <p className="text-xl text-subText max-w-2xl leading-relaxed">
                안녕하세요, 웹 개발자 <b>김재승</b>입니다.<br />
                사용자 중심의 인터페이스와 견고한 시스템을 설계합니다.
            </p>
        </section>
    );
};

export default Hero;
