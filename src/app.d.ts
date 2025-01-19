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
			modal?: Modal | null;
			actions?: Button[] | null;
		}

		interface Locals {
			session?: Session;
		}

		interface Button {
			text: string
			type: "primary" | "secondary"
			onclick: () => void
		}

		interface Input {
			input
			label: string
			error: string
			type: "text" | "password"
			onchange: (value) => void

		}

		interface Modal {
			title: string
			message: string
			type: 'success' | 'error' | 'warning' | 'info'
			buttons?: Button[]
			input?: Input
		}

	}
}

export { };
