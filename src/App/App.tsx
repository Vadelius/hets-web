/* Dependencies */
import { RouteComponentProps } from "@reach/router";
import React from "react";

/* Views */
import { HeaderView } from "../Views/Header";

interface IRouterProps extends RouteComponentProps {
	default: boolean;
}

/* App */
export const App: React.FC<IRouterProps> = () => {
	React.useEffect(() => {
		localStorage.setItem("ORIGIN", `${window.location.href.replace(window.location.origin, "")}`);
	}, []);
	return (
		<React.Fragment>
			<HeaderView name={"Teststring"} />
		</React.Fragment>
	);
};
