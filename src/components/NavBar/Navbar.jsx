import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = (props) => {
    return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to={"/Dialogs"} activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/Settings" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/Music" activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink>
        </div>
        <div className={`${s.item} ${s.active} ${s.itemF}`}>
            <NavLink to="/Sidebar" activeClassName={s.active}>Friends</NavLink>
        </div>
    </nav>
}

export default Navbar;