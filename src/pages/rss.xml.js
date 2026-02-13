import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	const toPostPath = (id) => id.replace(/\.(md|mdx)$/i, '');
	const base = import.meta.env.BASE_URL;
	const toBasePath = (path) =>
		`${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: toBasePath(`/blog/${toPostPath(post.id)}/`),
		})),
	});
}
