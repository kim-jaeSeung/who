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
            fontSize: {
                'xs': ['1.05rem', { lineHeight: '1.5rem' }],
                'sm': ['1.275rem', { lineHeight: '1.875rem' }],
                'base': ['1.5rem', { lineHeight: '2.25rem' }],
                'lg': ['1.65rem', { lineHeight: '2.55rem' }],
                'xl': ['1.8rem', { lineHeight: '2.7rem' }],
                '2xl': ['2.25rem', { lineHeight: '3rem' }],
                '3xl': ['2.85rem', { lineHeight: '3.6rem' }],
                '4xl': ['3.45rem', { lineHeight: '4.2rem' }],
                '5xl': ['4.5rem', { lineHeight: '1' }],
                '6xl': ['5.4rem', { lineHeight: '1' }],
                '7xl': ['6.75rem', { lineHeight: '1' }],
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
