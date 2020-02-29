import { HistoryOutlined, IdcardOutlined, PlusCircleOutlined, RiseOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";

import Styles from "./Header.module.scss";
const { Header } = Layout;

export const HeaderView: React.FC = () => {
	return (
		<Layout>
			<Header className={Styles.header}>
				<Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]} className={Styles.menu}>
					<Menu.Item className={Styles.menu_item} key="1">
						<IdcardOutlined style={{ fontSize: 24 }} />
						Profile
					</Menu.Item>
					<Menu.Item className={Styles.menu_item} key="2">
						<PlusCircleOutlined style={{ fontSize: 24 }} />
						New activity
					</Menu.Item>
					<Menu.Item className={Styles.menu_item} key="3">
						<RiseOutlined style={{ fontSize: 24 }} />
						Leaderboard
					</Menu.Item>
					<Menu.Item className={Styles.menu_item} key="4">
						<HistoryOutlined style={{ fontSize: 24 }} />
						History
					</Menu.Item>
					<span className={Styles.userInfo}>Hej V.V</span>
				</Menu>
			</Header>
		</Layout>
	);
};
