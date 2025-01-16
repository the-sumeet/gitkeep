// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

		type GitHubUser = RestEndpointMethodTypes["users"]["getAuthenticated"]["response"]['data'];
		type Repositories = RestEndpointMethodTypes["repos"]["listForAuthenticatedUser"]["response"]['data'];
		type RepoContent = RestEndpointMethodTypes["repos"]["getContent"]["response"]['data'];

		type ErrorResponse = {
			error: string;
		}
		type Session = App.GitHubUser & {
			_id?: string;
			token?: string; // GitHub token
			repo: string; // GitHub repository
			login: string; // GitHub username
		};

		type ParentData = {
			session?: Session;
		};

		interface AppState {
			token: string;
		}

		interface Locals {
			session?: Session;
		}

	}
}

export { };
