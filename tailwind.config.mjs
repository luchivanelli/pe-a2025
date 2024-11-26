/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  blue: '#0b0d3d',  
			  blue2: '#033F87',      
			  yellow: '#ffc809'      
			},
		  }
	},
	plugins: [],
}
