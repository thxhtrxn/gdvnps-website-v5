export async function GET() {
	return new Response(JSON.stringify(await import('$lib/data/faqs.json')), {
		headers: { 'Content-Type': 'application/json' }
	});
}
