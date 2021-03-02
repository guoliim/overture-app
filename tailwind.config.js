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
                '28.5': '7.125rem',
                '53.5': '13.375rem',
                '87.5': '21.875rem',
                '277.5': '69.375rem',
            },
            colors: {
                background: '#f5f5f7',
                title: '#000',
                'normal-text': '#3d3d3d',
            },
            screens: {
                'sxl': '1200px',
            },
            borderRadius: {
                'sl': '0.625rem',
            },
            fontSize: {
                '2base': '2rem',
            },
            lineHeight: {
                'little-tight': '1.1',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
