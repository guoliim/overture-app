module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                '277.5': '69.375rem',
            },
            colors: {
                background: '#f5f5f7',
            },
            screens: {
                'sxl': '1200px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
