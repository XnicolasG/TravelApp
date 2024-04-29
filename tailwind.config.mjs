/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'bali': 'url("/img/bali.jpg")',
				'chicago': 'url("/img/chicago.jpg")',
				'europe': 'url("/img/europe.jpg")',
				'iceland': 'url("/img/iceland.jpg")',
				'LA': 'url("/img/LA.jpg")',
				'miami': 'url("/img/miami.jpg")',
				'new-york': 'url("/img/new_york.jpg")',
				'norway': 'url("/img/norway.jpg")',
				'san-francisco': 'url("/img/sanFrancisco.jpg")',
				'san-francisco-desktop': 'url("/img/sanFranciscoDesktop.jpg")',
				'seattle': 'url("/img/seattle.jpg")',
				'switzerland': 'url("/img/switzerland.jpg")',
				'sydney': 'url("/img/sydney.jpg")',
				'yosemite': 'url("/img/yosemite.jpg")'
			},
			backgroundColor: theme => ({
				...theme('colors'),
				'primary': '#CC2D4A',
				'secondary': '#8FA206',
				'terciary': '#61AEC9'
			}),
			textColor:{
				'primary': '#CC2D4A',
				'secondary': '#8FA206',
				'terciary': '#61AEC9'
			}
		},
	},
	plugins: [],
}
