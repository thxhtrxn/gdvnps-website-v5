import { redirect } from '@sveltejs/kit';
import { browserLink } from '$lib';

export function load() {
	redirect(308, browserLink);
}
