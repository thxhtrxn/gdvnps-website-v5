import { sql } from '$lib/utils/db.server';

export async function load() {
	const res = await sql`select version()`;
	const { version } = res[0];
	return { version };
}
