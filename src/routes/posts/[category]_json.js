import { process } from '$lib/markdown';
import fs from 'fs';
import dayjs from 'dayjs';

export function get({ params }) {
    const { category } = params;

    let mdList = fs.readdirSync(`src/posts/${category}`).map(v => {
        return {
            category: category,
            fileName: v
        }
    });

	let posts = mdList
            .filter(v => /.+\.md$/.test(v.fileName))
			.map(v => {
				const { metadata } = process(`src/posts/${category}/${v.fileName}`);
				return {
					metadata,
					slug: v.fileName.slice(0, -3),
                    category
				};
			});
	// sort the posts by create date.
	posts.sort((a, b) => (dayjs(b.metadata.date, "MMM D, YYYY") - dayjs(a.metadata.date, "MMM D, YYYY")));
	let body = {posts};

	return {
		body
	}
}