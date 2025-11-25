import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary selection:text-white">
      <Header />
      <main className="max-w-screen-lg mx-auto px-6 pb-20">
        <Hero />
        <About />
        <Skills />
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
