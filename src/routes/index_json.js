import { process } from '$lib/markdown';
import fs from 'fs';
import dayjs from 'dayjs';

export function get() {
	let mdList = fs.readdirSync(`src/posts`).reduce((acc, cur) => {
		let files = fs.readdirSync(`src/posts/${cur}`).map(v => {
			return {
				category: cur,
				fileName: v
			}
		});
		return [...acc, ...files];
	}, []);

	let posts = mdList
			.filter(v => /.+\.md$/.test(v.fileName))
			.map(v => {
				const { metadata } = process(`src/posts/${v.category}/${v.fileName}`);
				return {
					metadata,
					slug: v.fileName.slice(0, -3),
					category: v.category
				};
			});
	// sort the posts by create date.
	posts.sort((a, b) => (dayjs(b.metadata.date, "MMM D, YYYY") - dayjs(a.metadata.date, "MMM D, YYYY")));
	let body = {posts};

	return {
		body
	}
}