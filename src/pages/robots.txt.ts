import { SITE_URL } from "../lib/site";

export function GET() {
	const sitemapUrl = new URL("/sitemap.xml", SITE_URL).toString();
	const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
}
