/* Dependencies */
import React from "react";

/* Views */
import { LandingView } from "../Views/Landing";

/* App */
export const App: React.FC = () => (
	<React.Fragment>
		<LandingView loading={true} />
	</React.Fragment>
);
