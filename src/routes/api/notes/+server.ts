import { json } from '@sveltejs/kit';
import { Octokit, App } from "octokit";

export async function GET({locals, url}) {

    const userSession = (locals as App.Locals).session;
    const path = url.searchParams.get('path') || "";

	const token = userSession!.token;
    const octokit = new Octokit({ auth: token });
    
    try {
        const files = (await octokit.rest.repos.getContent({owner: userSession?.login!, repo: userSession!.repo, path })).data;
        return json({ files });
    } catch (error: any) {
        console.error(`Error fetching repository '${userSession!.repo}', path '${path}', for user '${userSession?.login}'. ${error.message}. ${error.status}`);
        return json({"error": error.message}, { status: error.status });
    }
}

export async function PUT({locals, url, request}) {

    const userSession = (locals as App.Locals).session;
    const path = url.searchParams.get('path') || "";
    const {content, sha} = (await request.json());

    const token = userSession!.token;
    const octokit = new Octokit({ auth: token });

    try {
        console.log(`Updating ${path} in repository ${userSession!.repo} for user ${userSession?.login} with sha ${sha} and content ${content}`);
        const response = await octokit.rest.repos.createOrUpdateFileContents({
            owner: userSession!.login!,
            repo: userSession!.repo,
            path,
            message: `Create or update ${path}`,
            content: content,
            sha: sha
        });
        return json({ response });
    } catch (error) {
        return json({"error": error.message}, {status: error.status});
    }
}

export async function DELETE({locals, url}) {

    const userSession = (locals as App.Locals).session;
    const path = url.searchParams.get('path') || "";
    const sha = url.searchParams.get('sha') || "";

    const token = userSession!.token;
    const octokit = new Octokit({ auth: token });

    try {
        console.debug(`Deleting ${path} in repository ${userSession!.repo} for user ${userSession?.login} with sha ${sha}`);
        const response = await octokit.rest.repos.deleteFile({
            owner: userSession!.login!,
            repo: userSession!.repo,
            path,
            message: `Delete ${path}`,
            sha
        });
        return json({ response });
    } catch (error) {
        return json({"error": error.message}, {status: error.status});
    }
}