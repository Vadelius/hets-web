import React from "react";

import Loading from "../../Components/Loading";

interface State {
	loading: boolean;
}

export const LandingView: React.FC<State> = () => <Loading />;
