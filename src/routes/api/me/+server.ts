import { json } from '@sveltejs/kit';

export async function GET({ locals, request, cookies }) {
	return json({ session: (locals as App.Locals).session });
}
