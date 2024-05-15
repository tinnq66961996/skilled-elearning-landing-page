/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        fontFamily: {
            sans: ['"Plus Jakarta Sans"', "sans-serif"],
        },
        extend: {},
        screens: {
            lg: "1440px",
            md: "768px",
        },
    },
    plugins: [],
};
