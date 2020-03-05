/* Dependencies */
import {ApolloProvider} from "@apollo/react-hooks";
import {RouteComponentProps} from "@reach/router";
import ApolloClient from "apollo-boost";
import React from "react";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {Card, Classes, Elevation} from "@blueprintjs/core";
/* Views */
import {ActivityView} from "../Views/Activity";
import {HeaderView} from "../Views/Header";
import {HistoryView} from "../Views/History";
import {LeaderboardView} from "../Views/Leaderboard";
import {ProfileView} from "../Views/Profile";
import Styles from "./App.module.scss";
import {IUseAuth} from "../Typings/IUseAuth";
import {useAuth} from "react-auth-hook";

interface IRouterProps extends RouteComponentProps {
    default: boolean;
}

/* Apollo Client */
const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT_URI,
});

/* App */
export const App: React.FC<IRouterProps> = () => {
    const {isAuthenticated, user}: IUseAuth = useAuth();
    React.useEffect(() => {
        localStorage.setItem("ORIGIN", `${window.location.href.replace(window.location.origin, "")}`);
    }, []);
    React.useEffect(() => {
        const request = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nickname: user?.nickname,
                email: user?.email,
                sub: user?.sub,
            })
        };
        fetch("http://localhost:3000/Task/getuserobject/", request)
            .then(response => response.json())
            .then(data => console.log(data));
    }, [isAuthenticated(), user]);

    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <HeaderView name={"Teststring"}/>
                <div className={Styles.app__content}>
                    <Card elevation={Elevation.ONE} className={Classes.DARK}>
                        <Switch>
                            <Route default exact path="/profile" component={ProfileView}/>
                            <Route exact path="/activity" component={ActivityView}/>
                            <Route exact path="/history" component={HistoryView}/>
                            <Route exact path="/leaderboard" component={LeaderboardView}/>
                        </Switch>
                    </Card>
                </div>
            </ApolloProvider>
        </BrowserRouter>
    );
};
