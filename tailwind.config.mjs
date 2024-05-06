/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes:{
				bgchange:{
					"0%":{
						backgroundImage:"linear-gradient(yellow,red)"
						
					},
					"50%":{
						backgroundImage:"linear-gradient(yellow,orange)"
					},
					"100%":{
						backgroundImage:"linear-gradient(yellow,blue)"
					}
				},
				poschange:{
					"0%": { transform: "translateY(0) translateX(0) " },
					"25%": { transform: "translateY(0vh) translateX(100vh)" },
					"50%": { transform: "translateY(100vh) translateX(100vh)" },
					"75%": { transform: "translateY(100vh) translateX(0vh)" },
					"100%": { transform: "translateY(0vh) translateX(0vh)" },
				  }
			},
			animation:{
				bgchange:"bgchange 5s linear infinite",
				poschange:"poschange 5s linear infinite"
			}
		},
	},
	plugins: [],
}
