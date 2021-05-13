const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	darkMode: "class",
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				main: {
					DEFAULT: "#23272a",
					hover: "#36393f",
				},
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
