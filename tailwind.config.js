const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto Mono", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				main: "#232528",
				gray: "#A5AAB0",
				light: "#E8E8EB",
				milk: "#F4F4F8",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
