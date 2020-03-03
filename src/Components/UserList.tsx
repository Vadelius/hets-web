import {Table} from "antd";
import React from "react";
import {User} from "../Generated/graphql";
import {FireOutlined} from "@ant-design/icons";

type UserDataReturn = Pick<User, "id" | "username" | "points">;

interface Props {
    users: UserDataReturn[];
}

const UserList: React.FC<Props> = ({users}) => {
    const usersByPoints = users.sort((a, b) => {
        return b.points! - a.points!;
    });
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
            dataIndex: "idx",
            title: "Ranking",
        },
    ];

    return <Table columns={columns} size={"large"} dataSource={usersByPoints.map((x,i) => ({ ...x, idx: i + 1 }) )} rowKey={"idx"}/>;
};

export default UserList;
