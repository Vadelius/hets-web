import { Badge, Button, Descriptions, Modal } from "antd";
import React, { useState } from "react";
import { useAuth } from "react-auth-hook";

import { IUseAuth } from "../../Typings/IUseAuth";

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
	const { user }: IUseAuth = useAuth();
	return (
		<>
			<Descriptions layout="vertical" bordered>
				<Descriptions.Item label="Name">{user?.nickname}</Descriptions.Item>
				<Descriptions.Item label="Registered">2018-04-24 18:00:00</Descriptions.Item>
				<Descriptions.Item label="Minutes exercised" span={2}>
					543534
				</Descriptions.Item>
				<Descriptions.Item label="Status">
					<Badge status="success" text="Online" />
				</Descriptions.Item>
				<Descriptions.Item label="Email">{user?.email}</Descriptions.Item>
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
				{user
					? Object.entries(user).map(([key, value]) => {
							return (
								<div>
									{key}: {value}
								</div>
							);
					  })
					: "No data found."}
			</Modal>
		</>
	);
};

export default ProfileView;
