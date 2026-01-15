/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'near-black': 'rgb(var(--near-black) / <alpha-value>)',
                'dark-gray': 'rgb(var(--dark-gray) / <alpha-value>)',
                'subtle-gray': 'rgb(var(--subtle-gray) / <alpha-value>)',
                'medium-gray': 'rgb(var(--medium-gray) / <alpha-value>)',
                'light-gray': 'rgb(var(--light-gray) / <alpha-value>)',
                'lighter-gray': 'rgb(var(--lighter-gray) / <alpha-value>)',
                'pure-white': 'rgb(var(--pure-white) / <alpha-value>)',
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'mono': ['JetBrains Mono', 'monospace'],
            },
            letterSpacing: {
                'tightest': '-0.08em',
                'tighter': '-0.05em',
                'slight': '-0.02em',
                'widest': '0.2em',
            },
            backgroundImage: {
                'grain': "url('/noise.png')", // We can generate this or simulate it with CSS
            }
        },
    },
    plugins: [],
}
