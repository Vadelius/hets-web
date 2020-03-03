import {Badge, Button, Descriptions, Modal} from "antd";
import React, {useState} from "react";
import {useAuth} from "react-auth-hook";

import {IUseAuth} from "../../Typings/IUseAuth";
import {useOneUserQuery} from "../../Generated/graphql";
import {fromString} from "uuidv4";

interface Props {
    visible: boolean;
}

export const ProfileView: React.FC<Props> = () => {
        const [state, setState] = useState<Props>({
            visible: false,
        });
        const showModal = () => {
            setState({
                visible: true,
            });
        };
        const handleModalClick = () => {
            setState({
                visible: false,
            });
        };
        const {isAuthenticated, user}: IUseAuth = useAuth();
        const {loading, error, data} = useOneUserQuery({
            variables: {id: fromString(user?.sub ? user!.sub: "no sub") },
            skip: !isAuthenticated(),
        });

        if (error || loading) {
            return (
                <span>Error | Loading</span>
            )
        }
        if (isAuthenticated() && data?.user && user) {
            return (
                <>
                    <Descriptions layout="vertical" bordered>
                        <Descriptions.Item label="Name">{data?.user?.username}</Descriptions.Item>
                        <Descriptions.Item label="Registered">{data?.user?.created}</Descriptions.Item>
                        <Descriptions.Item label="Minutes exercised" span={2}>
                            543534
                        </Descriptions.Item>
                        <Descriptions.Item label="Status">
                            <Badge status="success" text="Online"/>
                        </Descriptions.Item>
                        <Descriptions.Item label="Email">{data.user?.email}</Descriptions.Item>
                        <Descriptions.Item label="Stored userdata">
                            <Button type="dashed" onClick={showModal}>
                                Get JSON
                            </Button>
                        </Descriptions.Item>
                    </Descriptions>

                    <Modal
                        title="Stored user data"
                        visible={state.visible}
                        footer={[
                            <Button key="back" onClick={handleModalClick}>
                                Return
                            </Button>,
                        ]}
                    >
                        {data
                            ? Object.entries(data.user).map(([key, value]) => {
                                return (
                                    <div key={key}>
                                        {key}: {value}
                                    </div>
                                );
                            })
                            : "No data found."}
                    </Modal>
                </>
            );
        } else {
            return <span>Login</span>
        }
    }
;

export default ProfileView;
