import { redirect } from '@sveltejs/kit';
import { discordLink } from '$lib';

export function load() {
	redirect(308, discordLink);
}
