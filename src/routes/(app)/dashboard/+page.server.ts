import { redirect } from '@sveltejs/kit';
import { dashboardLink } from '$lib';

export function load() {
	redirect(308, dashboardLink);
}
