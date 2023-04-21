/** @type {import('tailwindcss').Config} */
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
		minHeight: {
			'72': '288px',
		 }
	},
	plugins: [],
};
