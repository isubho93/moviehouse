module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                'mobile': {
                    min: '340 px',
                    max: '1200 px'
                }
            }
        },
    },
    plugins: [],
}