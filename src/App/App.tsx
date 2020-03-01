/* Dependencies */
import { ApolloProvider } from "@apollo/react-hooks";
import { RouteComponentProps } from "@reach/router";
import { Layout } from "antd";
import ApolloClient from "apollo-boost";
import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { ActivityView } from "../Views/Activity";
import { HeaderView } from "../Views/Header";
import { HistoryView } from "../Views/History";
import { LeaderboardView } from "../Views/Leaderboard";
import { ProfileView } from "../Views/Profile";
import Styles from "./App.module.scss";
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
	const { Content, Header } = Layout;
	return (
		<BrowserRouter>
			<ApolloProvider client={client}>
				<Header className={Styles.header}>
					<HeaderView name={"Teststring"} />
				</Header>
				<Content className={Styles.app_content}>
					<Switch>
						<Route default exact path="/profile" component={ProfileView} />
						<Route exact path="/activity" component={ActivityView} />
						<Route exact path="/history" component={HistoryView} />
						<Route exact path="/leaderboard" component={LeaderboardView} />
					</Switch>
				</Content>
			</ApolloProvider>
		</BrowserRouter>
	);
};
