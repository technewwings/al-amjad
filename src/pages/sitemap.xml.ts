import type { APIRoute } from 'astro';
import { destinationDetails } from '../data/destinations';

const staticPaths = ['/', '/destinations', '/about', '/contact'];

export const GET: APIRoute = ({ site }) => {
	const origin = site && site.hostname !== 'localhost' && site.hostname !== '127.0.0.1' ? site.href.replace(/\/$/, '') : '';
	const paths = [...staticPaths, ...destinationDetails.map((destination) => `/destinations/${destination.slug}`)];

	const urls = paths
		.map((path) => {
			const loc = origin ? `${origin}${path}` : path;
			return `  <url><loc>${loc}</loc></url>`;
		})
		.join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
