/* Dependencies */
import React from "react";

/* Views */
import { HeaderView } from "../Views/Header";
import { LandingView } from "../Views/Landing";

/* App */
export const App: React.FC = () => (
	<React.Fragment>
		<HeaderView />
		<LandingView loading={true} />
	</React.Fragment>
);
