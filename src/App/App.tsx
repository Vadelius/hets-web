/* Dependencies */
import { ApolloProvider } from "@apollo/react-hooks";
import { RouteComponentProps } from "@reach/router";
import ApolloClient from "apollo-boost";
import React from "react";

import { HeaderView } from "../Views/Header";
interface IRouterProps extends RouteComponentProps {
	default: boolean;
}

/* Apollo Client */
const client = new ApolloClient({
	uri: process.env.REACT_APP_GRAPHQL_ENDPOINT_URI,
});

/* App */
export const App: React.FC<IRouterProps> = () => {
	React.useEffect(() => {
		localStorage.setItem("ORIGIN", `${window.location.href.replace(window.location.origin, "")}`);
	}, []);
	return (
		<ApolloProvider client={client}>
			<React.Fragment>
				<HeaderView name={"Teststring"} />
			</React.Fragment>
		</ApolloProvider>
	);
};
