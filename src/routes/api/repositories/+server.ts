import { sessions } from "$lib/collections";
import { getUserRepositories } from "$lib/github.js";
import { json } from "@sveltejs/kit";
import { ObjectId } from "mongodb";

export async function GET({ locals }) {
    const userSession = (locals as App.Locals).session;  
    const repos = await getUserRepositories(userSession!.token!);
    return json(repos, { status: 200 });
}

export async function POST({ request, locals }) {

    const { repo } = await request.json();
    const userSession = (locals as App.Locals).session;
    const res = await sessions.updateOne({ _id: new ObjectId(userSession!._id) }, { $set: { repo } });
    return json({ }, { status: 200 });

}