export const icons = {
	discord: 'ic:round-discord',
	copyright: 'lucide:copyright',
	menu: 'mdi-light:menu'
};
export type KnownIcon = keyof typeof icons;

type NavLinkObjType = {
	id: number;
	label: string;
	href: string;
}[];
export const navLinks: NavLinkObjType = [
	{ id: 1, label: 'Tải xuống', href: '/download' },
	{ id: 2, label: 'FAQ', href: '/faq' },
	{ id: 3, label: 'Browser', href: '#browser' },
	{
		id: 4,
		label: 'Dashboard',
		href: 'https://gdvnps.ps.fhgdps.com/dashboard'
	}
];

export type AnchorLinkTarget = '_self' | '_blank' | '_parent' | '_top';

export type TailwindFontSizeClass =
	| 'text-xs'
	| 'text-sm'
	| 'text-base'
	| 'text-lg'
	| 'text-xl'
	| 'text-2xl'
	| 'text-3xl'
	| 'text-4xl'
	| 'text-5xl'
	| 'text-6xl'
	| 'text-7xl'
	| 'text-8xl'
	| 'text-9xl';
