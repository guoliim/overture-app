module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'sans': ['SFProText', 'Helvetica'],
            'text': ['SFProText', 'Helvetica'],
        },
        extend: {
            spacing: {
                '1.5': '0.375rem',
                '2.5': '0.625rem',
                '277.5': '69.375rem',
            },
            colors: {
                background: '#f5f5f7',
                title: '#000',
            },
            screens: {
                'sxl': '1200px',
            },
            borderRadius: {
                'sl': '0.625rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
