import React from "react";

import UserList from "../../Components/UserList";
import {useGetUsersWithPointsQuery} from "../../Generated/graphql";

interface Props {
}

export const LeaderboardView: React.FC<Props> = () => {
    const {loading, error, data} = useGetUsersWithPointsQuery();

    const users = data?.users;

    if (loading && !users) {
        return <p>Loading</p>;
    } else if (error) {
        return <p>An error occured</p>;
    }
    return users && users.length ? <UserList users={users}/> : <p>No users found.</p>;
};

export default LeaderboardView;
