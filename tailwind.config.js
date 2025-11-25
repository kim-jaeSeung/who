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
                'xs': ['0.875rem', { lineHeight: '1.25rem' }],      // 14px
                'sm': ['1rem', { lineHeight: '1.5rem' }],            // 16px
                'base': ['1.125rem', { lineHeight: '1.75rem' }],     // 18px (본문)
                'lg': ['1.25rem', { lineHeight: '1.875rem' }],       // 20px
                'xl': ['1.5rem', { lineHeight: '2rem' }],            // 24px
                '2xl': ['1.875rem', { lineHeight: '2.25rem' }],      // 30px
                '3xl': ['2.25rem', { lineHeight: '2.5rem' }],        // 36px
                '4xl': ['2.75rem', { lineHeight: '3rem' }],          // 44px
                '5xl': ['3.5rem', { lineHeight: '1' }],              // 56px
                '6xl': ['4rem', { lineHeight: '1' }],                // 64px
                '7xl': ['5rem', { lineHeight: '1' }],                // 80px
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
