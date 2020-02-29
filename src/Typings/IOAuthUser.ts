export interface IOAuthUser {
	sub: string;
	nickname: string;
	name: string; // email.
	picture: string; // url.
	email: string; // email.
	email_verified: boolean;
}
