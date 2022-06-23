import sveltePreprocess from "svelte-preprocess";
// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";

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
        adapter: adapter({
            pages: "docs",
            assets: "docs",
            fallback: "index.html",
            precompress: false,
        }),

        prerender: {
            // This can be false if you're using a fallback (i.e. SPA mode)
            default: true,
        },

        paths: {
            // assets: '',
            base: "",
        },
        appDir: "_app",
    },
};

export default config;
