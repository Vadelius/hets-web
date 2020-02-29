import React from "react";

import Styles from "./Loading.module.scss";

const Loading: React.FC = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.vertical}>
				<i className={`fa fa-cog fa-spin ${Styles.spinner}`} />
			</div>
		</div>
	);
};

export default Loading;
