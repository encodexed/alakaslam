/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
		"./src/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				pangolin: ["Pangolin", "sans-serif"], // used in pages/eso/alchemy_assistant
			},
		},
		screens: {
			'xs': "525px",
			...defaultTheme.screens,
		},
		minHeight: {
			72: "288px",
			7: "28px",
			780: "780px"
		},
	},
	plugins: [],
};
