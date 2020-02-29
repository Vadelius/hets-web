/* Dependencies */
import "./index.scss";

import { navigate, RouteComponentProps, Router } from "@reach/router";
import React from "react";
import { AuthProvider, useAuth } from "react-auth-hook";
import ReactDOM from "react-dom";

/* App */
import { App } from "./App/App";
/* Service Worker */
import * as serviceWorker from "./serviceWorker";

function AuthCallback({ location }: RouteComponentProps) {
	const { handleAuth } = useAuth();

	React.useEffect(() => {
		const origin = localStorage.getItem("ORIGIN") || undefined;

		handleAuth(origin);
	}, [handleAuth]);

	return (
		<div
			style={{
				alignItems: "center",
				display: "flex",
				height: "100vh",
				justifyContent: "center",
				width: "100vw",
			}}
		>
			<h1>You have reached the callback page - you will now be redirected</h1>
		</div>
	);
}
/* Render and wrap  */
ReactDOM.render(
	<AuthProvider navigate={navigate} auth0Domain="hets.eu.auth0.com" auth0ClientId="l8dZpQl59pVxFY4MjCxlgLHgfL5CYQ7K">
		<Router>
			<App default />
			<AuthCallback path="/auth_callback" />
		</Router>
	</AuthProvider>,
	document.getElementById("root"),
);
/* Unregister Service Worker */
serviceWorker.unregister();
