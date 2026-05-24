import { getPublishedPosts } from "../lib/blog";
import { NAV, SITE_URL } from "../lib/site";

export async function GET() {
	const posts = await getPublishedPosts();
	const pages = NAV.map(({ href }) => ({
		url: new URL(href, SITE_URL).toString(),
		lastmod: new Date().toISOString(),
	}));
	const blogPosts = posts.map((post) => ({
		url: new URL(`/blog/${post.data.slug}`, SITE_URL).toString(),
		lastmod: post.data.publishedAt.toISOString(),
	}));
	const urls = [...pages, ...blogPosts];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(item) => `	<url>
		<loc>${item.url}</loc>
		<lastmod>${item.lastmod}</lastmod>
	</url>`,
	)
	.join("\n")}
</urlset>`;

	return new Response(body, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
}
