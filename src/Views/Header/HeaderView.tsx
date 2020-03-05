import React from "react";
import {useAuth} from "react-auth-hook";
import {Link} from "react-router-dom";
import Styles from "./Header.module.scss";
import {IUseAuth} from "../../Typings/IUseAuth";

import {Alignment, Button, Classes, Navbar} from "@blueprintjs/core";

interface Props {
    name: string;
}

export const HeaderView: React.FC<Props> = () => {
    const {login, logout, isAuthenticated, user}: IUseAuth = useAuth();
// text={<Link to="/profile">Profile</Link>}
    return (
        <>
            <Navbar className={Classes.DARK}>
                <div className={Styles.fixed__navbar}>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>Hets</Navbar.Heading>
                    <Navbar.Divider/>
                    <Button className={Styles.menu__button} icon="home" text={<Link to="/profile" style={{color: "white"}}>Profile</Link>}/>
                    <Button className={Styles.menu__button} icon="take-action" text={<Link to="/activity" style={{color: "white"}}>Activity</Link>}/>
                    <Button className={Styles.menu__button} icon="history" text={<Link to="/history" style={{color: "white"}}>History</Link>}/>
                    <Button className={Styles.menu__button} icon="satellite" text={<Link to="/leaderboard" style={{color: "white"}}>Leaderboard</Link>}/>
                    <Navbar.Divider/>
                    {isAuthenticated() ? (
                        <Button onClick={logout}>
                            Logout
                        </Button>
                    ) : (
                        <Button onClick={login}>
                            Log in / Register
                        </Button>
                    )}
                    <Navbar.Divider/>
                    <span style={{textAlign: "right"}}>{isAuthenticated() ? user && user.nickname : "You are not logged in."}</span>
                </Navbar.Group>
                </div>
            </Navbar>
        </>
    );
};
