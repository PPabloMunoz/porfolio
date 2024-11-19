import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}"],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background-color))",
				primary: {
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: "hsl(var(--secondary))",
				card: "hsl(var(--card))",
			},
		},
	},
	plugins: [],
} satisfies Config;
