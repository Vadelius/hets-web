import React from "react";
import {useActivitiesQuery} from "../../Generated/graphql";
import {Table} from "antd";

interface Props {
}

export const HistoryView: React.FC<Props> = () => {
    const {loading, error, data} = useActivitiesQuery();
	const columns = [
		{
			dataIndex: "created",
			title: "Time",
		},
		{
			dataIndex: "createdBy",
			title: "Name",
		},
		{
			dataIndex: "description",
			title: "Description",
		},
		{
			dataIndex: "duration",
			title: "Duration",
		},
		{
			dataIndex: "points",
			title: "Points",
		},
	];
    if (loading) {
    	return <span>Loading</span>
	}
    if (error) {
    	return <span>Error</span>
	}
    else {
	return <Table columns={columns} size={"large"} dataSource={data?.activities} rowKey={"id"} />;
	}
};

export default HistoryView;
