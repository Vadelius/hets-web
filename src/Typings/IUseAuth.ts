import Auth0 from "auth0-js";

export interface IUseAuth {
	login: () => void;
	logout: () => void;
	handleAuth: (returnRoute?: string) => void;
	isAuthenticated: () => boolean;
	user: Auth0.Auth0UserProfile | null;
	authResult: Auth0.Auth0DecodedHash | null;
}
