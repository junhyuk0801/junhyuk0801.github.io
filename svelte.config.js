import sveltePreprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		//adapter: node(),
		adapter: adapter(),

		// Comment the paths if wants to run in dev mode.
		// paths: {
		// 	assets: '',
		// 	base: ''
		// },
	}
};

export default config;
