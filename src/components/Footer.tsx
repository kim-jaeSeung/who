const Footer = () => {
    return (
        <footer id="contact" className="py-20 bg-gray-50 border-t border-gray-200 mt-20">
            <div className="max-w-screen-lg mx-auto px-6 text-center">

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                    <a href="https://github.com/kim-jaeSeung" target="_blank" rel="noreferrer" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30 hover:-translate-y-1">
                        GitHub
                    </a>
                </div>
                <div className="text-gray-400 text-sm">
                    <p className="mb-2">jas2878@naver.com</p>
                    <p>© 2025. Kim Jae Seung. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
