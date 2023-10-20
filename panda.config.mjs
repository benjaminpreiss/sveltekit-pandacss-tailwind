import { defineConfig } from '@pandacss/dev';
import preset from './src/lib/panda/preset';

export default defineConfig({
	presets: [preset],
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,ts,svelte}'],
	layers: {},

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {},

	// The output directory for your css system
	outdir: 'styled-system'
});
