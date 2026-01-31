/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                arabic: ['Amiri', 'serif'],
                heading: ['Cormorant Garamond', 'serif'],
                body: ['Montserrat', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                // Brand Colors
                'blush-pink': 'hsl(var(--blush-pink))',
                'silk-pink': 'hsl(var(--silk-pink))',
                'dark-brown': 'hsl(var(--dark-brown))',
                'cream': 'hsl(var(--cream))',
                'gold': 'hsl(var(--gold))',
            },
            boxShadow: {
                'soft': 'var(--shadow-soft)',
                'elegant': 'var(--shadow-elegant)',
                'card': 'var(--shadow-card)',
                'gold': 'var(--shadow-gold)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'fade-in': {
                    from: { opacity: '0' },
                    to: { opacity: '1' }
                },
                'fade-in-up': {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'scale-in': {
                    from: { opacity: '0', transform: 'scale(0.9)' },
                    to: { opacity: '1', transform: 'scale(1)' }
                },
                'slide-in-right': {
                    from: { transform: 'translateX(100%)' },
                    to: { transform: 'translateX(0)' }
                },
                'slide-in-left': {
                    from: { transform: 'translateX(-100%)' },
                    to: { transform: 'translateX(0)' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0) translateX(0)' },
                    '25%': { transform: 'translateY(-20px) translateX(10px)' },
                    '50%': { transform: 'translateY(-10px) translateX(-10px)' },
                    '75%': { transform: 'translateY(-25px) translateX(5px)' }
                },
                'pulse-soft': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'fade-in-up': 'fade-in-up 0.6s ease-out',
                'scale-in': 'scale-in 0.4s ease-out',
                'slide-in-right': 'slide-in-right 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                'slide-in-left': 'slide-in-left 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                'float': 'float 8s ease-in-out infinite',
                'pulse-soft': 'pulse-soft 2s ease-in-out infinite'
            },
            transitionTimingFunction: {
                'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
                'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
