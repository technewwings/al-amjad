import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
	const lines = ['User-agent: *', 'Allow: /', ''];

	if (site && site.hostname !== 'localhost' && site.hostname !== '127.0.0.1') {
		lines.push(`Sitemap: ${new URL('sitemap.xml', site).href}`, '');
	} else {
		lines.push('Sitemap: /sitemap.xml', '');
	}

	return new Response(lines.join('\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
