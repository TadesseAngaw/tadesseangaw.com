export const SITE_NAME = "Tadesse Angaw";
export const SITE_DESCRIPTION =
	"Personal engineering blog and portfolio of Tadesse Angaw, focused on fintech platforms, distributed systems, mobile products, and engineering leadership.";
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL ?? "https://tadesseangaw.com";

export const NAV = [
	{ href: "/", label: "Home" },
	{ href: "/blog", label: "Blog" },
	{ href: "/portfolio", label: "Portfolio" },
	{ href: "/cv", label: "CV" },
] as const;

export const SOCIAL_LINKS = [
	{ href: "https://github.com/TadesseAngaw", label: "GitHub" },
	{ href: "https://linkedin.com/in/TadesseAngaw", label: "LinkedIn" },
] as const;
