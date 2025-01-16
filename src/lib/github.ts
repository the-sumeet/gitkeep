import { Octokit, App } from "octokit";



export const getUser = async (token: string) => {
    const octokit = new Octokit({ auth: token });
    
    return (await octokit.rest.users.getAuthenticated()).data;

}

export const getUserRepositories = async (token: string) => {
    const octokit = new Octokit({ auth: token });

    let repos: App.Repositories = [];
    
    try {
        return repos = (await octokit.rest.repos.listForAuthenticatedUser({affiliation: 'owner'})).data;
    } catch (error: any) {
        throw new Error(`Error fetching repositories: ${error.message}`);
    }

    return null;

}