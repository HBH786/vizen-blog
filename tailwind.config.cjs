/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#fff",
				//#F36E3E
				//secondary: "#19494b",
				secondary: "rgb(0, 136, 0)",
				'secondary-hover': "rgb(0, 160, 0)",
				foreground: "#fafcf7",
				tertiary: "rgb(0, 180, 0)",
				text: "#4A4A4A",
				accent: "#B5D99C",
			},
			fontFamily: {
				heading: ["Montserrat", "sans-serif"],
				body: ["Open Sans", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
