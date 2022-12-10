/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      	"./index.html",
      	"./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      	colors: {
            'pink': '#F277DE',
            'yellow': '#EBF28F',
            'salmon': '#F28883',
            'green': '#5EF296',
            'purple': '#B56BF2',
            'white': '#fff',
            'black': '#000',
        },
        boxShadow: {
            'navbar-mobile': '6px 6px 0px #000000',
            'navbar': '8px 8px 0px #000000',
        },
        dropShadow: {
            'navbar-text': '-4px 4px 0px #000000',
        }
    },
    	plugins: [],
}