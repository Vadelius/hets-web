import { Table } from "antd";
import React from "react";

import { User } from "../Generated/graphql";

interface Props {
	users: User[];
}

const UserList: React.FC<Props> = ({ users }) => {
	const usersByPoints = users.sort((a, b) => b.points - a.points);
	const columns = [
		{
			dataIndex: "username",
			title: "Name",
		},
		{
			dataIndex: "points",
			title: "Points",
		},
		{
			dataIndex: "[i]",
			title: "Ranking",
		},
	];

	return <Table columns={columns} size={"large"} dataSource={usersByPoints} rowKey={"id"} />;
};

export default UserList;
