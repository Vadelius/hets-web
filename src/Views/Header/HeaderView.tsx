import { HistoryOutlined, IdcardOutlined, PlusCircleOutlined, RiseOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import React from "react";
import { useAuth } from "react-auth-hook";
import { Link } from "react-router-dom";

import { IUseAuth } from "../../Typings/IUseAuth";
import Styles from "./Header.module.scss";

interface Props {
	name: string;
}

export const HeaderView: React.FC<Props> = () => {
	const { login, logout, isAuthenticated, user }: IUseAuth = useAuth();

	return (
		<>
			<Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]} className={Styles.menu}>
				<Menu.Item className={Styles.menu_item} key="1">
					<IdcardOutlined style={{ fontSize: 24 }} />
					Profile
					<Link to="/profile" />
				</Menu.Item>
				<Menu.Item className={Styles.menu_item} key="2">
					<PlusCircleOutlined style={{ fontSize: 24 }} />
					New activity
					<Link to="/activity" />
				</Menu.Item>
				<Menu.Item className={Styles.menu_item} key="3">
					<HistoryOutlined style={{ fontSize: 24 }} />
					History
					<Link to="/history" />
				</Menu.Item>
				<Menu.Item className={Styles.menu_item} key="4">
					<RiseOutlined style={{ fontSize: 24 }} />
					Leaderboard
					<Link to="/leaderboard" />
				</Menu.Item>
			</Menu>
			<div className={Styles.auth_info}>
				{isAuthenticated() ? (
					<Button type="primary" className={Styles.auth_button} onClick={logout}>
						Logout
					</Button>
				) : (
					<Button type="primary" className={Styles.auth_button} onClick={login}>
						Log in / Register
					</Button>
				)}
				<span className={Styles.userInfo}> {isAuthenticated() ? user && user.nickname : "you!"}</span>
			</div>
		</>
	);
};
