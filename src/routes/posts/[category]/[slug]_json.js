import { process } from '$lib/markdown';

export function get({ params }) {
	const { slug, category } = params;

	const { metadata, content } = process(`src/posts/${category}/${slug}.md`);
	const body = JSON.stringify({ metadata, content, category });

	return {
		body
	}
}