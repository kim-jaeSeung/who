/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3182F6', // Toss Blue
                secondary: '#B0B8C1', // Grey
                background: '#F2F4F6', // Light Grey BG
                text: '#191F28', // Dark Text
                subText: 'rgb(73 75 78)', // Sub Text
                white: '#FFFFFF',
            },
            fontFamily: {
                sans: ['Noto Sans KR', 'sans-serif'],
            },
            boxShadow: {
                'toss': '0 4px 24px rgba(0, 0, 0, 0.08)',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            }
        },
    },
    plugins: [],
}
