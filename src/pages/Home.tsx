import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import PortfolioSection from '../components/PortfolioSection';

const Home = () => {
    return (
        <main className="max-w-screen-lg mx-auto px-6 pb-20">
            <Hero />
            <About />
            <Skills />
            <PortfolioSection />
        </main>
    );
};

export default Home;
