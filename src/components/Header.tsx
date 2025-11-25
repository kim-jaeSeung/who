import { useEffect, useState } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-screen-lg mx-auto px-6 flex justify-between items-center">
                <h1 className="text-xl font-bold tracking-tight text-primary">KJS</h1>
                <nav>
                    <ul className="flex gap-6 text-sm font-medium text-subText">
                        <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                        <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
                        <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
